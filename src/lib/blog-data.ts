export interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  content: string;
  date: string;
  category: string;
  tag: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const posts: BlogPost[] = [
  // ── POWER BI CATEGORY (5 Posts) ──────────────────────────────────────────
  {
    slug: "mastering-dax-patterns-2026",
    title: "Mastering Advanced DAX: High-Performance Patterns for 2026",
    desc: "A deep dive into optimized DAX calculations for billion-row datasets in the financial sector.",
    date: "May 12, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The Evolution of DAX in Enterprise BI</h2>
      <p>Data Analysis Expressions (DAX) has become the cornerstone of modern business intelligence. As datasets grow from millions to billions of rows, the difference between a 'working' measure and an 'optimized' measure can mean the difference between a sub-second response and a dashboard that hangs indefinitely.</p>

      <h3>1. Context Transition: The Silent Performance Killer</h3>
      <p>One of the most misunderstood concepts in DAX is context transition. When you use CALCULATE inside an iterator like SUMX, every row of the table triggers a context transition from row context to filter context. In large datasets, this can be catastrophic for performance.</p>
      
      <h3>2. Optimized Time Intelligence</h3>
      <p>Native time intelligence functions like SAMEPERIODLASTYEAR are convenient, but often lack the flexibility required for complex fiscal calendars. We recommend building custom time-intelligence measures using CALCULATE and FILTER for maximum control and performance.</p>

      <blockquote>"Optimization is not just about writing shorter code; it's about understanding how the Storage Engine and Formula Engine interact."</blockquote>

      <h3>3. Variable Usage (VAR/RETURN)</h3>
      <p>Always use variables to store results that are used multiple times in a measure. This prevents the DAX engine from calculating the same expression twice, significantly reducing processing time.</p>

      <h3>Conclusion</h3>
      <p>By implementing these high-performance patterns, we've helped BFSI clients reduce their report load times by over 80%. Stay tuned for our deep dive into the VertiPaq engine next week.</p>
    `
  },
  {
    slug: "deneb-custom-visuals",
    title: "Going Beyond Native: Custom Visuals with Deneb and Vega-Lite",
    desc: "Why standard bar charts aren't enough for executive decision making and how to build custom visual stories.",
    date: "May 05, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Deneb and custom visuals goes here...</p>`
  },
  {
    slug: "power-bi-security-bfsi",
    title: "Enterprise Security: Row-Level Security (RLS) in BFSI",
    desc: "Securing sensitive financial data using dynamic RLS and Active Directory integration.",
    date: "April 20, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about RLS goes here...</p>`
  },
  {
    slug: "power-bi-deployment-pipelines",
    title: "DevOps for BI: Mastering Power BI Deployment Pipelines",
    desc: "How to manage Development, Test, and Production environments for mission-critical dashboards.",
    date: "April 02, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about DevOps goes here...</p>`
  },
  {
    slug: "paginated-reports-modern-era",
    title: "The Return of Paginated Reports in the Modern BI Stack",
    desc: "Why pixel-perfect reports are still essential for financial compliance and regulatory filing.",
    date: "March 15, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about paginated reports goes here...</p>`
  },

  // ── SQL CATEGORY (5 Posts) ──────────────────────────────────────────────
  {
    slug: "sql-indexing-deep-dive",
    title: "SQL Indexing: The Ultimate Guide for Data Warehousing",
    desc: "Columnstore vs. Rowstore: Choosing the right indexing strategy for your BI warehouse.",
    date: "May 10, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about SQL Indexing goes here...</p>`
  },
  {
    slug: "azure-data-factory-best-practices",
    title: "Azure Data Factory: Design Patterns for Reliable ETL",
    desc: "Building idempotent, scalable data pipelines that can handle failure and automatic retries.",
    date: "May 01, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about ADF goes here...</p>`
  },
  {
    slug: "t-sql-optimization-techniques",
    title: "Advanced T-SQL: Query Optimization for Real-time Analytics",
    desc: "How to rewrite inefficient joins and subqueries to reduce execution time by 90%.",
    date: "April 18, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about T-SQL goes here...</p>`
  },
  {
    slug: "database-security-auditing",
    title: "Hardening Your Database: Security and Auditing Patterns",
    desc: "Protecting PII and financial data with encryption at rest and in transit.",
    date: "April 05, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about DB Security goes here...</p>`
  },
  {
    slug: "sql-server-migration-cloud",
    title: "SQL Migration: Moving On-Premise Warehouses to Azure SQL",
    desc: "A step-by-step framework for zero-downtime database migrations.",
    date: "March 20, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2064&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Migration goes here...</p>`
  },

  // ── AUTOMATION CATEGORY (5 Posts) ───────────────────────────────────────
  {
    slug: "end-of-manual-reporting",
    title: "The End of Manual Reporting: A Roadmap to Full Automation",
    desc: "How to eliminate 'Excel-hell' and transition your team to value-added analytics.",
    date: "May 14, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Automation Roadmap goes here...</p>`
  },
  {
    slug: "python-for-bi-automation",
    title: "Python for BI: Automating Complex Data Cleaning Tasks",
    desc: "Leveraging Pandas and Openpyxl to handle messy source data before it hits the warehouse.",
    date: "May 03, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Python for BI goes here...</p>`
  },
  {
    slug: "robotic-process-automation-reports",
    title: "RPA in Finance: Automating the Last Mile of Reporting",
    desc: "Using Power Automate to deliver reports via Teams, Email, and SharePoint automatically.",
    date: "April 22, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?q=80&w=2036&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about RPA goes here...</p>`
  },
  {
    slug: "building-self-healing-pipelines",
    title: "Self-Healing Data Pipelines: Automated Error Handling",
    desc: "Designing systems that detect data quality issues and alert the team before reports are sent.",
    date: "April 10, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Self-healing pipelines goes here...</p>`
  },
  {
    slug: "automated-data-validation-framework",
    title: "The Data Validation Framework: Ensuring 100% Accuracy",
    desc: "How to automate reconciliation between your source ERP and your BI dashboards.",
    date: "March 25, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1454165833767-129670c02755?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Validation Framework goes here...</p>`
  },

  // ── STRATEGY CATEGORY (5 Posts) ──────────────────────────────────────────
  {
    slug: "bi-maturity-model-2026",
    title: "The BI Maturity Model: Where Does Your Organisation Stand?",
    desc: "From descriptive to prescriptive analytics: A guide to leveling up your data culture.",
    date: "May 15, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Maturity Model goes here...</p>`
  },
  {
    slug: "data-governance-bfsi",
    title: "Data Governance for Modern BFSI: Balance and Control",
    desc: "How to enable self-service BI without compromising on data security or quality.",
    date: "May 06, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Data Governance goes here...</p>`
  },
  {
    slug: "choosing-the-right-bi-tool",
    title: "Power BI vs. Tableau vs. Looker: The 2026 Comparison",
    desc: "Choosing the right visualization stack for your specific business needs and budget.",
    date: "April 25, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about BI Tool Comparison goes here...</p>`
  },
  {
    slug: "building-data-literate-team",
    title: "Culture First: Building a Data-Literate Workforce",
    desc: "Why the best technology fails without a team that knows how to ask the right questions.",
    date: "April 12, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about Data Literacy goes here...</p>`
  },
  {
    slug: "roi-of-bi-investments",
    title: "Measuring the ROI of your BI Investments",
    desc: "How to translate dashboard projects into tangible financial outcomes and savings.",
    date: "March 28, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed content about BI ROI goes here...</p>`
  },

  // ── VIDEOS CATEGORY ─────────────────────────────────────────────────────
  {
    slug: "video-building-c-suite-dashboard",
    title: "[Video] Building a C-Suite Dashboard from Scratch",
    desc: "Watch a full 45-minute walkthrough of transforming raw financial data into a board-ready Power BI dashboard.",
    date: "May 18, 2024",
    category: "videos",
    tag: "Video Tutorial",
    readTime: "45 min video",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Detailed video transcript and resources go here...</p>`
  },

  // ── NEWS CATEGORY ───────────────────────────────────────────────────────
  {
    slug: "microsoft-fabric-2026-updates",
    title: "Microsoft Fabric 2026: What BI Leaders Need to Know",
    desc: "A summary of the latest Copilot integrations and OneLake performance enhancements announced this quarter.",
    date: "May 20, 2024",
    category: "news",
    tag: "Industry News",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Latest Microsoft Fabric news summary...</p>`
  }
];
