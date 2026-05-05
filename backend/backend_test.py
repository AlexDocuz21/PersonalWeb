#!/usr/bin/env python3
"""
Backend API Test Suite for Portfolio Website
Tests all contact form endpoints and validation logic
"""
import requests
import sys
from datetime import datetime

# Use the public preview URL
BASE_URL = "https://intent-craft-1.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BASE_URL
        self.tests_run = 0
        self.tests_passed = 0
        self.tests_failed = 0
        self.failures = []

    def log_test(self, name, passed, details=""):
        """Log test result"""
        self.tests_run += 1
        if passed:
            self.tests_passed += 1
            print(f"✅ PASS: {name}")
            if details:
                print(f"   {details}")
        else:
            self.tests_failed += 1
            self.failures.append({"test": name, "details": details})
            print(f"❌ FAIL: {name}")
            if details:
                print(f"   {details}")
        print()

    def test_health_check(self):
        """Test GET /api/ returns 200 with success message"""
        print("=" * 60)
        print("TEST: Health Check (GET /api/)")
        print("=" * 60)
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            
            passed = (
                response.status_code == 200 and
                "message" in response.json()
            )
            
            details = f"Status: {response.status_code}, Response: {response.json()}"
            self.log_test("Health Check", passed, details)
            return passed
        except Exception as e:
            self.log_test("Health Check", False, f"Exception: {str(e)}")
            return False

    def test_contact_valid_submission(self):
        """Test POST /api/contact with valid data"""
        print("=" * 60)
        print("TEST: Valid Contact Submission")
        print("=" * 60)
        try:
            # Get initial count
            count_before = requests.get(f"{self.base_url}/contact/count", timeout=10).json()["count"]
            print(f"Initial count: {count_before}")
            
            # Submit valid contact
            payload = {
                "name": "Test User",
                "email": "test@example.com",
                "message": "This is a test message from automated testing."
            }
            response = requests.post(
                f"{self.base_url}/contact",
                json=payload,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Get count after
            count_after = requests.get(f"{self.base_url}/contact/count", timeout=10).json()["count"]
            print(f"Count after: {count_after}")
            
            data = response.json()
            passed = (
                response.status_code == 200 and
                data.get("success") is True and
                "id" in data and
                "message" in data and
                count_after == count_before + 1
            )
            
            details = f"Status: {response.status_code}, Response: {data}, Count incremented: {count_after == count_before + 1}"
            self.log_test("Valid Contact Submission", passed, details)
            return passed
        except Exception as e:
            self.log_test("Valid Contact Submission", False, f"Exception: {str(e)}")
            return False

    def test_contact_invalid_email(self):
        """Test POST /api/contact with invalid email returns 422"""
        print("=" * 60)
        print("TEST: Invalid Email Validation")
        print("=" * 60)
        try:
            payload = {
                "name": "Test User",
                "email": "not-an-email",
                "message": "This should fail validation."
            }
            response = requests.post(
                f"{self.base_url}/contact",
                json=payload,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            passed = response.status_code == 422
            details = f"Status: {response.status_code}, Expected: 422"
            self.log_test("Invalid Email Validation", passed, details)
            return passed
        except Exception as e:
            self.log_test("Invalid Email Validation", False, f"Exception: {str(e)}")
            return False

    def test_contact_empty_name(self):
        """Test POST /api/contact with empty name returns 422"""
        print("=" * 60)
        print("TEST: Empty Name Validation")
        print("=" * 60)
        try:
            payload = {
                "name": "",
                "email": "test@example.com",
                "message": "This should fail validation."
            }
            response = requests.post(
                f"{self.base_url}/contact",
                json=payload,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            passed = response.status_code == 422
            details = f"Status: {response.status_code}, Expected: 422"
            self.log_test("Empty Name Validation", passed, details)
            return passed
        except Exception as e:
            self.log_test("Empty Name Validation", False, f"Exception: {str(e)}")
            return False

    def test_contact_empty_message(self):
        """Test POST /api/contact with empty message returns 422"""
        print("=" * 60)
        print("TEST: Empty Message Validation")
        print("=" * 60)
        try:
            payload = {
                "name": "Test User",
                "email": "test@example.com",
                "message": ""
            }
            response = requests.post(
                f"{self.base_url}/contact",
                json=payload,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            passed = response.status_code == 422
            details = f"Status: {response.status_code}, Expected: 422"
            self.log_test("Empty Message Validation", passed, details)
            return passed
        except Exception as e:
            self.log_test("Empty Message Validation", False, f"Exception: {str(e)}")
            return False

    def test_contact_honeypot(self):
        """Test POST /api/contact with honeypot field - should accept but NOT increment count"""
        print("=" * 60)
        print("TEST: Honeypot Field (Bot Detection)")
        print("=" * 60)
        try:
            # Get initial count
            count_before = requests.get(f"{self.base_url}/contact/count", timeout=10).json()["count"]
            print(f"Initial count: {count_before}")
            
            # Submit with honeypot field filled
            payload = {
                "name": "Bot User",
                "email": "bot@example.com",
                "message": "This is a bot message.",
                "website": "http://spam.com"  # Honeypot field
            }
            response = requests.post(
                f"{self.base_url}/contact",
                json=payload,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Get count after
            count_after = requests.get(f"{self.base_url}/contact/count", timeout=10).json()["count"]
            print(f"Count after: {count_after}")
            
            data = response.json()
            passed = (
                response.status_code == 200 and
                data.get("success") is True and
                count_after == count_before  # Count should NOT increment
            )
            
            details = f"Status: {response.status_code}, Response: {data}, Count unchanged: {count_after == count_before}"
            self.log_test("Honeypot Field", passed, details)
            return passed
        except Exception as e:
            self.log_test("Honeypot Field", False, f"Exception: {str(e)}")
            return False

    def test_contact_count_endpoint(self):
        """Test GET /api/contact/count returns numeric count"""
        print("=" * 60)
        print("TEST: Contact Count Endpoint")
        print("=" * 60)
        try:
            response = requests.get(f"{self.base_url}/contact/count", timeout=10)
            data = response.json()
            
            passed = (
                response.status_code == 200 and
                "count" in data and
                isinstance(data["count"], int) and
                data["count"] >= 0
            )
            
            details = f"Status: {response.status_code}, Count: {data.get('count')}, Type: {type(data.get('count'))}"
            self.log_test("Contact Count Endpoint", passed, details)
            return passed
        except Exception as e:
            self.log_test("Contact Count Endpoint", False, f"Exception: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all backend tests"""
        print("\n" + "=" * 60)
        print("PORTFOLIO BACKEND API TEST SUITE")
        print(f"Testing: {self.base_url}")
        print(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 60 + "\n")

        # Run all tests
        self.test_health_check()
        self.test_contact_count_endpoint()
        self.test_contact_valid_submission()
        self.test_contact_invalid_email()
        self.test_contact_empty_name()
        self.test_contact_empty_message()
        self.test_contact_honeypot()

        # Print summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed} ✅")
        print(f"Failed: {self.tests_failed} ❌")
        print(f"Success Rate: {(self.tests_passed / self.tests_run * 100):.1f}%")
        
        if self.failures:
            print("\n" + "=" * 60)
            print("FAILED TESTS:")
            print("=" * 60)
            for failure in self.failures:
                print(f"❌ {failure['test']}")
                print(f"   {failure['details']}")
        
        print("\n" + "=" * 60)
        print(f"Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print("=" * 60 + "\n")

        return self.tests_failed == 0

def main():
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())
