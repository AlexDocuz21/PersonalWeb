# plan.md — Animated Portfolio (React + Tailwind + Framer Motion) + Contact → MongoDB

## 1. Objectives
- Ship a **non-template**, award-feeling, dark/glass portfolio with premium motion and strong typography.
- Implement the 6 required sections (Hero, About, Projects, Skills, Journey, Contact) with **smooth scroll + reveal** and **micro-interactions**.
- Build a minimal backend to **store contact submissions silently in MongoDB**.
- Keep UX fast: responsive layout, accessible interactions, and animation performance safeguards.

## 2. Implementation Steps

### Phase 1: Skip POC (not applicable)
Rationale: No complex external integrations/auth; core is standard form→API→Mongo.

**User stories (Phase 1)**
1. As a user, I can load the site instantly without waiting on heavy assets.
2. As a user, I can navigate sections smoothly without jarring jumps.
3. As a user, I can view projects without broken links or missing media.
4. As a user, I can submit the contact form and see a clear success state.
5. As a user, I can use the site on mobile without layout/animation glitches.

### Phase 2: V1 App Development (design + full build)

#### 2.1 Design system + motion language
- Define tokens: dark base, gradient accents, glass panels (blur + border), glow rules.
- Typography scale + spacing system; consistent hierarchy across sections.
- Motion primitives: fade/slide reveals, hover lift/glow, gentle parallax, spring easing.
- Accessibility: reduced-motion support, focus rings, readable contrast.

#### 2.2 Frontend (React + Tailwind + Framer Motion)
- App shell with smooth section transitions + anchored navigation.
- Hero:
  - Animated gradient/grid/particles background (GPU-friendly).
  - Headline + subline + CTAs (View Work → Projects, Contact → Contact).
  - Optional cursor/mouse-follow highlight.
- About:
  - Render provided “About Me” content with human tone.
  - Scroll-triggered entrance; subtle depth.
- Projects:
  - Featured card: **Serafima.ro** with description + Live Preview button.
  - 3 additional placeholder projects (editable data model).
  - Interactive cards: scale, glow, tilt/magnet hover, smooth transitions.
- Skills:
  - Categories (Frontend/Backend/Tools) as animated pills or icon clusters.
  - Enter-viewport animations.
- Experience/Journey:
  - Minimal timeline with “continuously building…” framing.
  - Scroll reveal and subtle connector animations.
- Contact:
  - Minimal form (name/email/message) with premium focus states.
  - Submit states: idle → loading → success/error.
  - Social links: GitHub/LinkedIn/Email placeholders.

#### 2.3 Backend (FastAPI + Motor + MongoDB)
- Create `POST /api/contact`:
  - Validate payload (name, email, message).
  - Insert into MongoDB with timestamp + user agent metadata.
  - Return success response (no email sending).
- Add basic rate limiting guardrails (lightweight) or simple spam mitigation (honeypot field).
- Environment config: Mongo URI, DB name, collection.

#### 2.4 Wire-up + deployment readiness
- Frontend calls backend via relative `/api/...` (or configured base URL).
- Ensure CORS configuration for local dev.
- Add `.env` templates and minimal README run steps.

**User stories (Phase 2)**
1. As a user, I see a bold hero with a living background that feels premium, not distracting.
2. As a user, I can hover project cards and feel depth/glow feedback instantly.
3. As a user, I can click “View Work” and land smoothly on the Projects section.
4. As a user, I can submit the contact form and receive a clear success confirmation.
5. As a user, I can browse all sections comfortably on mobile with preserved visual quality.

**Phase 2 exit: 1 round E2E test (testing_agent_v3)**
- Validate: load, scroll, animations, form submit storing in Mongo, responsive breakpoints.

### Phase 3: Testing, polish, and hardening
- Fix issues from E2E test; ensure no console errors.
- Performance pass:
  - Reduce heavy effects on low-power devices.
  - Ensure animations use transforms/opacity; avoid layout thrash.
- UX polish:
  - Consistent hover/focus states.
  - Improve copy spacing and hierarchy.
  - Add subtle section separators/transition gradients.
- Reliability:
  - Backend input validation edge cases; error handling.
  - Confirm Mongo writes and timestamps.

**User stories (Phase 3)**
1. As a user, I never encounter broken animations or jitter while scrolling.
2. As a user, reduced-motion preference makes the site comfortable to use.
3. As a user, form errors are explained clearly without losing my typed message.
4. As a user, the site looks consistent across Chrome/Safari/Firefox.
5. As a user, I can tab through CTAs/links with visible focus and correct order.

**Phase 3 exit: 1 round E2E test (testing_agent_v3)**
- Re-validate all primary flows + regression checks.

### Phase 4: Feature expansion (optional, after V1)
- Add editable content via a single config file (projects/skills/links) or lightweight CMS later.
- Add image/video previews for projects (optimized).
- Add optional analytics, sitemap/SEO enhancements, OpenGraph.
- Add admin viewer for contact submissions (only if requested).

**User stories (Phase 4)**
1. As a user (owner), I can update projects/skills from one data file without touching layout code.
2. As a user, I can preview project media that loads quickly and looks crisp.
3. As a user, search engines display rich previews when my site is shared.
4. As a user, the portfolio remains fast even with additional visuals.
5. As a user (owner), I can optionally review stored contact messages in a secure way.

## 3. Next Actions
1. Create design tokens + motion spec (colors, glass, glow, easing, reduced-motion).
2. Implement FastAPI `POST /api/contact` + Mongo connection (Motor) + env wiring.
3. Implement React sections + shared components (AnimatedBackground, GlassCard, SectionReveal, Navbar).
4. Wire contact form → backend; verify inserts in Mongo.
5. Run testing_agent_v3; iterate on issues; finalize polish.

## 4. Success Criteria
- Visual: dark/glass aesthetic with intentional hierarchy; not a generic template.
- Motion: smooth scroll + reveals + micro-interactions; reduced-motion supported.
- Functionality: contact form reliably stores submissions in MongoDB with proper validation.
- Quality: responsive on mobile/desktop, no console errors, acceptable performance (no jank).