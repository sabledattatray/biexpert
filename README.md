<p align="center">
  <img src="public/screenshots/dashboard.png" alt="BI Expert Dashboard" width="800" />
</p>

<h1 align="center">📊 BI Expert</h1>

<p align="center">
  <strong>Elite Business Intelligence & MIS Automation for BFSI, Fintech, and Retail</strong>
</p>

<p align="center">
  <a href="https://biexpert.online"><img src="https://img.shields.io/badge/Live-biexpert.online-0057D9?style=for-the-badge&logo=vercel" alt="Live Site" /></a>
  <img src="https://img.shields.io/badge/Next.js-16.2.4-000000?style=for-the-badge&logo=nextdotjs" alt="Next.js Version" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind Version" />
  <img src="https://img.shields.io/badge/Prisma-7.8.0-2D3748?style=for-the-badge&logo=prisma" alt="Prisma Version" />
  <img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="MIT License" />
</p>

---

## 🌐 Overview

**BI Expert** is a bespoke, enterprise-grade Business Intelligence platform and data analytics consultancy system. Designed specifically for financial institutions (banks, NBFCs, and fintechs) in India and global clients, it replaces manual, error-prone 20-hour Excel MIS cycles with **1-click automated Power BI and Tableau dashboards**.

Architected with Next.js 16 (Turbopack), Tailwind CSS v4, Prisma, and PostgreSQL, the platform features a borderless floating glassmorphism design system inspired by premium fintech aesthetics. It serves as both a high-converting portfolio/sales engine and a functional administrative hub for client data, blogs, and lead management.

---

## 🏗️ System Architecture

The following diagram illustrates the flow of data from legacy sources, through the automated ETL/DW pipelines, to the client-facing presentation layer.

```mermaid
graph TD
    A[Excel MIS Sheets / APIs / POS Databases] -->|Automated ETL / Azure Data Factory| B[(PostgreSQL Data Warehouse)]
    B -->|Prisma Client / API Layers| C[Next.js App Router Backend]
    C -->|Secure Row-Level Security RLS| D[Client Presentation Layer]
    D -->|Interactive Dashboards| E[Executive Financial Oversight]
    D -->|POS sales Analytics| F[Regional Manager Operations]
```

---

## ✨ Features

| Feature | Description | Core Technology |
| :--- | :--- | :--- |
| **Interactive Dashboards** | Dynamic real-time playgrounds for Finance, Sales, Operations, and Risk. | Recharts, Framer Motion, SVGs |
| **MIS Automation** | Scheduled ingestion pipelines replacing manual spreadsheets. | Azure Data Factory, SQL Server |
| **Row-Level Security (RLS)** | Dynamic data masking based on regional access control. | SQL Views, NextAuth.js v5 |
| **CFO Lead Capture** | High-intent lead capture forms with prefilled templates. | React Suspense, Email Templates |
| **Premium Blog Engine** | 23+ SEO-optimized technical blogs with rich inline TipTap editor. | TipTap, Prisma Client |
| **Admin Console** | Detailed metrics, subscriber management, and config parameters. | NextJS Server Actions |

---

## ⚡ Tech Stack

*   **Frontend**: Next.js 16.2.4 (App Router), React 19.2.4, Tailwind CSS v4, Framer Motion.
*   **Database & ORM**: PostgreSQL, Prisma v7.8.0 (with pg-client).
*   **Authentication**: NextAuth.js v5 (Beta-31) with secure credentials & OAuth providers.
*   **UI System**: Glassmorphism tokens, custom Lucide SVGs, and responsive design systems.
*   **CMS / Editor**: TipTap Rich Text Editor for technical content writing.

---

## 🚀 Getting Started

### 📋 Prerequisites

*   **Node.js**: `v20.x` or higher
*   **PostgreSQL Database**: A running instance with database access
*   **npm** or **yarn**

### 🔧 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/sabledattatray/biexpert.git
    cd biexpert
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables Configuration**
    Create a `.env` file in the root directory and populate the variables:
    ```env
    # Database
    DATABASE_URL="postgresql://username:password@localhost:5432/biexpert?schema=public"

    # Authentication
    NEXTAUTH_SECRET="your_nextauth_secret_key"
    NEXTAUTH_URL="http://localhost:3000"

    # Google Auth (Optional)
    GOOGLE_CLIENT_ID="your_google_client_id"
    GOOGLE_CLIENT_SECRET="your_google_client_secret"
    ```

4.  **Database Migration**
    Apply database migrations and generate the Prisma client:
    ```bash
    npx prisma db push
    npx prisma generate
    ```

5.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Verification & Production Build

To compile the site into production-ready static pages and assets:

```bash
npm run build
```

This compiles:
*   ✅ Prisma client interfaces
*   ✅ Static page layouts and visual modules
*   ✅ Dynamic static params (`/blog/[slug]` and `/case-studies/[slug]`)
*   ✅ Fully responsive mobile interfaces with target tap areas >= 44x44px.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <a href="https://dattasable.com">Datta Sable</a> in Mumbai, India.
</p>
