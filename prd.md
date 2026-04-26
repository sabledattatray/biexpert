🧾 PRODUCT REQUIREMENTS DOCUMENT
Project: Vercel-Style Premium Website
1. 🎯 OBJECTIVE

Build a high-performance, visually premium, developer-focused website that matches:

Vercel-level speed (sub-second load)
Clean, minimal, futuristic UI
Fully responsive (mobile-first)
Dark/light theme
Scalable architecture
Integrated admin panel (content + analytics)
2. 🧱 TECH STACK (MANDATORY)
Core
Next.js 15 (App Router)
TypeScript
Tailwind CSS
ShadCN UI
Backend / Data
PostgreSQL
Prisma ORM
Auth
NextAuth or Clerk
CMS / Content
Sanity or custom CMS (admin panel)
Deployment
Vercel (Edge + Serverless)
3. 🧭 SITE STRUCTURE (MATCH VERCEL)
Public Pages
1. Homepage
Hero section (gradient + animated text)
Feature highlights
Code/demo preview
Logos (social proof)
Testimonials
CTA sections
2. Product Page
Feature breakdown
Tabs (Deploy / Preview / Scale)
Interactive UI blocks
Code snippets
3. Pricing Page
Tier cards (Free / Pro / Enterprise)
Feature comparison table
Toggle monthly/yearly
4. Docs Section
Sidebar navigation
Markdown rendering
Search (Algolia-style)
5. Blog
SEO optimized posts
Tags + categories
Author pages
6. About / Company
Mission
Team
Careers
7. Login / Signup
OAuth (Google, GitHub)
Email login
4. 🎨 DESIGN SYSTEM (CRITICAL)
Visual Style
Minimal, clean, futuristic
Black/white base + subtle gradients
Large typography
Soft shadows + blur
Components
Buttons (ghost, primary, gradient)
Cards (glassmorphism optional)
Navbars (sticky + blur)
Code blocks (syntax highlight)
Animations
Framer Motion
Smooth fade + slide transitions
Hover effects
5. 🌗 THEME SYSTEM
Dark mode (default)
Light mode
System preference detection

Implementation:

next-themes
CSS variables
6. ⚡ PERFORMANCE REQUIREMENTS

Must match Vercel-level performance:

Lighthouse score: 95+
First Contentful Paint < 1s
Fully optimized images
Edge caching

Techniques:

Static generation (SSG)
Server components
Dynamic imports
CDN via Vercel
7. 🔐 AUTHENTICATION SYSTEM
Features
Signup/Login
OAuth providers
Session management
Roles
User
Admin
8. 🧑‍💼 ADMIN PANEL (DETAILED)
Access
/admin
Protected route (admin only)
Dashboard
Metrics
Total users
Page views
Active sessions
Revenue (if applicable)
User Management
View users
Edit roles
Delete users
Content Management
Blog
Create/edit/delete posts
Markdown editor
SEO fields
Docs
Manage documentation pages
Sidebar structure editor
Pages
Edit homepage sections
Dynamic content blocks
Media Manager
Upload images
CDN storage
Image optimization
Analytics Panel
Traffic overview
Top pages
User behavior
Settings
Theme config
SEO defaults
API keys
9. 🧠 CMS ARCHITECTURE

Option A: Headless CMS (Sanity)
Option B: Custom admin panel (recommended for full control)

10. 🔌 API STRUCTURE

Using Next.js API routes:

/api/auth
/api/users
/api/posts
/api/docs
/api/admin
11. 📦 DATABASE SCHEMA
Users
id
name
email
role
createdAt
Posts
id
title
content
authorId
published
Docs
id
title
content
slug
12. 🚀 DEPLOYMENT (VERCEL MATCH)
Requirements
GitHub integration
Auto deploy on push
Preview deployments
Edge functions
Environment Variables
DATABASE_URL
AUTH_SECRET
API_KEYS
13. 🔍 SEO + MARKETING
Meta tags
Open Graph
Sitemap
Structured data
14. 🧪 TESTING
Unit tests (Jest)
E2E (Playwright)
Performance monitoring
15. 🔐 SECURITY
Rate limiting
CSRF protection
Secure headers
Auth validation
16. 📱 RESPONSIVENESS

Breakpoints:

Mobile (100%)
Tablet
Desktop
17. 📊 OPTIONAL ADVANCED FEATURES
Live preview deployments (like Vercel)
Git integration
CLI tool
AI assistant
18. 🧩 FOLDER STRUCTURE
/app
  /(marketing)
  /(dashboard)
  /admin
/components
/lib
/hooks
/prisma
/public
/styles
19. 🏁 SUCCESS CRITERIA

Your site must:

✅ Look visually similar to Vercel
✅ Load under 1 second
✅ Be fully responsive
✅ Have working admin panel
✅ Deploy seamlessly on Vercel

⚠️ REALITY CHECK

Matching Vercel “100%” is extremely hard because:

They use custom internal tooling
Heavy optimization at infra level
Dedicated design + engineering teams

But this PRD gets you very close (~90–95%) if executed properly.

---

20. 🗺️ IMPLEMENTATION ROADMAP

Phase 1: Foundation (Days 1-2)
- [ ] Initialize Next.js 15 project with Tailwind & TypeScript
- [ ] Setup ShadCN UI and custom design tokens (colors, spacing)
- [ ] Configure `next-themes` for Dark/Light mode
- [ ] Build Core Layout (Navbar, Footer, Main Container)

Phase 2: Branding & Hero (Days 3-4)
- [ ] Implement Hero section with Framer Motion animations
- [ ] Integrate premium typography (Inter/Geist)
- [ ] Create "BI Expert" specific content blocks (SQL, Power BI, Analytics highlights)
- [ ] Build responsive grid for feature highlights

Phase 3: Backend & Database (Days 5-7)
- [ ] Setup PostgreSQL database (Neon or local)
- [ ] Define Prisma Schema (Users, Posts, Projects, Services)
- [ ] Implement NextAuth/Clerk for secure authentication
- [ ] Create API routes for content fetching

Phase 4: Admin Panel (Days 8-10)
- [ ] Build `/admin` dashboard layout
- [ ] Implement Blog CRUD (Create, Read, Update, Delete)
- [ ] Setup Media Library for image uploads (Cloudinary/S3)
- [ ] Integrate Analytics dashboard (Recharts/Chart.js)

Phase 5: Polishing & SEO (Days 11-14)
- [ ] Implement Docs section with MDX support
- [ ] Full SEO audit (Meta tags, OpenGraph, JSON-LD)
- [ ] Performance optimization (Lighthouse 95+ score target)
- [ ] Final deployment to Vercel

21. 🏗️ COMPONENT ARCHITECTURE

Atoms
- `Button`: Custom variants (primary, shiny, ghost)
- `Input`: Underlined/Outlined focus states
- `Badge`: Glassmorphic category tags
- `Skeleton`: For loading states

Molecules
- `BlogCard`: Hover-glow effects + metadata
- `ProjectCard`: Video/Image hover preview
- `SearchInput`: Command-K style interface
- `ThemeToggle`: Smooth animated switch

Organisms
- `Navigation`: Sticky blur effect + mega-menu support
- `Hero`: Split-text animation + interactive background
- `Sidebar`: Expandable/Collapsible docs navigation
- `DashboardStats`: Grid of real-time metrics cards

22. 📊 DATA MODEL (EXPANDED)

```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  description String
  image       String?
  demoUrl     String?
  repoUrl     String?
  tags        String[]
  featured    Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model Service {
  id          String   @id @default(cuid())
  name        String
  description String
  icon        String?
  price       Float?
}

model Analytics {
  id        String   @id @default(cuid())
  path      String
  views     Int      @default(0)
  lastVisit DateTime @updatedAt
}
```

23. 📈 ANALYTICS & SEO STRATEGY

Analytics
- Use **PostHog** or **Umami** for privacy-focused, self-hosted style analytics.
- Track conversion events on "Contact" and "Download Resume" buttons.
- Heatmap tracking for Hero section interaction.

SEO
- Dynamic Sitemap generation (`sitemap.xml.ts`).
- Automated `robots.txt`.
- Canonical URLs for all blog posts.
- Image ALT text enforcement in Admin CMS.

24. 🧩 BI EXPERT NICHE CUSTOMIZATION

- **Power BI Embedding**: Add a dedicated section or page for interactive Power BI reports using the Power BI Client SDK.
- **Case Studies**: Detailed project pages with "Problem/Solution/Result" structure.
- **Skills Visualization**: Interactive radar charts or tech-stack grids for SQL, DAX, Python, and Tableau.
- **Consultation Booking**: Integration with Calendly or a custom booking form.

🚀 NEXT STEPS:
1. Confirm Tech Stack choices (Auth + Database).
2. Initialize the project repository.
3. Start Phase 1.