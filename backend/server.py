from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field, ConfigDict, constr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Docuz Alexandru-Cristian Portfolio API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ========== Models ==========
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: constr(strip_whitespace=True, min_length=1, max_length=120)
    email: EmailStr
    message: constr(strip_whitespace=True, min_length=1, max_length=4000)
    # Honeypot field — should always be empty for real users
    website: Optional[str] = Field(default=None, max_length=255)


class ContactRecord(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    user_agent: Optional[str] = None
    referrer: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactResponse(BaseModel):
    success: bool
    id: str
    message: str


# ========== Routes ==========
@api_router.get("/")
async def root():
    return {"message": "Portfolio API online"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(payload: ContactCreate, request: Request):
    # Honeypot check — silently accept but don't store bot submissions
    if payload.website:
        logger.info("Honeypot triggered, ignoring submission")
        return ContactResponse(success=True, id="ignored", message="Thanks for your message.")

    record = ContactRecord(
        name=payload.name,
        email=payload.email,
        message=payload.message,
        user_agent=request.headers.get("user-agent"),
        referrer=request.headers.get("referer"),
    )

    doc = record.model_dump()
    # Convert datetime to ISO string for MongoDB storage consistency
    doc['created_at'] = doc['created_at'].isoformat()
    # EmailStr serializes via str(); ensure plain string
    doc['email'] = str(doc['email'])

    try:
        await db.contact_messages.insert_one(doc)
    except Exception as e:  # noqa: BLE001
        logger.exception("Failed to insert contact message")
        raise HTTPException(status_code=500, detail="Could not save message. Please try again.") from e

    return ContactResponse(
        success=True,
        id=record.id,
        message="Thanks — your message has been received.",
    )


@api_router.get("/contact/count")
async def contact_count():
    """Lightweight diagnostic endpoint (no PII). Useful for testing inserts."""
    count = await db.contact_messages.count_documents({})
    return {"count": count}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
