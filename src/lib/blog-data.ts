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
  // ── POWER BI CATEGORY ───────────────────────────────────────────────────
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
      <p>One of the most misunderstood concepts in DAX is context transition. When you use CALCULATE inside an iterator like SUMX, every row of the table triggers a context transition from row context to filter context.</p>
      <h3>2. Optimized Time Intelligence</h3>
      <p>We recommend building custom time-intelligence measures using CALCULATE and FILTER for maximum control and performance over native functions.</p>
    `
  },
  {
    slug: "power-bi-fabric-integration-2026",
    title: "Microsoft Fabric & Power BI: The Unified Data Architecture",
    desc: "How Microsoft Fabric's OneLake is revolutionizing the Power BI ecosystem by eliminating data silos and enabling real-time analytics.",
    date: "May 20, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The Paradigm Shift: From Data Silos to OneLake</h2>
      <p>Microsoft Fabric represents the single largest update to the Microsoft data ecosystem since the launch of Power BI in 2015.</p>
      <h3>1. OneLake: The OneDrive for Data</h3>
      <p>OneLake is the logical equivalent of OneDrive for your organization's data. Every Fabric tenant automatically has a OneLake.</p>
    `
  },
  {
    slug: "real-time-streaming-analytics-power-bi",
    title: "Real-Time Streaming Analytics: Sub-Second Dashboards",
    desc: "A comprehensive guide to building live-streaming dashboards in Power BI using Azure Stream Analytics.",
    date: "May 18, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1518186239751-1710508ecf4a?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>Why Real-Time Matters in 2026</h2>
      <p>In the world of high-frequency trading and logistics, a 4-hour data lag is an eternity.</p>
    `
  },

  // ── SQL CATEGORY ────────────────────────────────────────────────────────
  {
    slug: "sql-server-window-functions-advanced",
    title: "SQL Window Functions: Solving Complex Analytical Challenges",
    desc: "Beyond SUM and COUNT: How to use ROW_NUMBER, LEAD, LAG, and NTILE for advanced time-series analysis.",
    date: "May 12, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2042&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The Power of OVER()</h2>
      <p>Window functions are arguably the most powerful tool in the SQL developer's arsenal.</p>
    `
  },
  {
    slug: "sql-json-data-warehousing",
    title: "JSON in SQL Server: Bridging the Gap Between NoSQL and RDBMS",
    desc: "How to efficiently store, query, and index JSON data in SQL Server to handle semi-structured data from modern APIs.",
    date: "May 08, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The Rise of Semi-Structured Data</h2>
      <p>Modern applications speak JSON. Your data warehouse must handle it natively.</p>
    `
  },
  {
    slug: "sql-deadlock-prevention-strategies",
    title: "SQL Deadlock Prevention: Maintaining High Availability",
    desc: "Identifying and resolving deadlocks in high-concurrency SQL Server environments for BI availability.",
    date: "May 04, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>Preventing the 1205 Error</h2>
      <p>Nothing ruins a BI developer's day like a "Transaction was deadlocked" error.</p>
    `
  },

  // ── AUTOMATION CATEGORY ─────────────────────────────────────────────────
  {
    slug: "ai-driven-data-quality-2026",
    title: "AI-Driven Data Quality: The Future of Trust in Analytics",
    desc: "How machine learning models are automatically detecting and correcting data anomalies in 2026.",
    date: "May 22, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The Crisis of Trust in Data</h2>
      <p>Bad data costs businesses trillions. In 2026, manual validation is dead.</p>
    `
  },
  {
    slug: "power-automate-financial-reporting-workflow",
    title: "Automating the Financial Close: Power Automate Workflows",
    desc: "Reducing the month-end close by 5 days using automated reporting and cross-department alerts.",
    date: "May 19, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1454165833767-129670c02755?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>Flipping the 80/20 Ratio</h2>
      <p>Finance teams should spend time on analysis, not data gathering.</p>
    `
  },
  {
    slug: "self-healing-etl-pipelines",
    title: "Self-Healing ETL: Automated Error Recovery in Data Engineering",
    desc: "Building pipelines that don't just fail, but automatically recover and notify stakeholders.",
    date: "May 15, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The End of 3 AM Pager Alerts</h2>
      <p>Self-healing systems detect data quality issues and alert the team before reports are sent.</p>
    `
  },

  // ── STRATEGY CATEGORY ───────────────────────────────────────────────────
  {
    slug: "cdo-playbook-2026-strategy",
    title: "The 2026 CDO Playbook: Leading with a Data-First Mindset",
    desc: "What the modern Chief Data Officer needs to focus on in an era of decentralized data and AI.",
    date: "May 25, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>The Evolving Role of the CDO</h2>
      <p>The CDO is no longer just a custodian; they are a growth driver.</p>
    `
  },
  {
    slug: "measuring-bi-roi-financial-framework",
    title: "The Financial Framework for Measuring BI ROI",
    desc: "How to put a dollar value on your dashboards. A guide to calculating productivity gains.",
    date: "May 21, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>Stop Guessing, Start Measuring</h2>
      <p>Prove the value of your data investments with a rigorous financial framework.</p>
    `
  },
  {
    slug: "scaling-data-culture-enterprise",
    title: "Scaling Data Culture: From Power Users to Data Champions",
    desc: "How to build a sustainable data-driven organization that thrives on self-service analytics.",
    date: "May 17, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-152202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `
      <h2>Culture Eats Strategy for Breakfast</h2>
      <p>The best tools fail if the culture isn't data-literate.</p>
    `
  },

  // ── NEWS CATEGORY ───────────────────────────────────────────────────────
  {
    slug: "gartner-magic-quadrant-2026-bi",
    title: "Gartner Magic Quadrant 2026: The Rise of AI-Native Platforms",
    desc: "Analyzing the latest shifts in the BI landscape and the dominance of AI-native insights.",
    date: "May 24, 2024",
    category: "news",
    tag: "Industry News",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<h2>The Death of Static Dashboards</h2>`
  },
  {
    slug: "global-data-privacy-regulations-2026",
    title: "Global Data Privacy in 2026: Navigating the New Landscape",
    desc: "What BI leaders need to know about the latest privacy laws and cross-border analytics.",
    date: "May 23, 2024",
    category: "news",
    tag: "Industry News",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<h2>Beyond GDPR: The New Wave</h2>`
  },
  {
    slug: "data-mesh-adoption-trends-2026",
    title: "Data Mesh in 2026: From Hype to Enterprise Reality",
    desc: "How global organizations are successfully implementing decentralized data architectures.",
    date: "May 21, 2024",
    category: "news",
    tag: "Industry News",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<h2>Decentralizing the Warehouse</h2>`
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
    content: `<p>Full video tutorial transcript available inside.</p>`
  },
  {
    slug: "video-sql-tuning-live",
    title: "[Video] Live SQL Tuning: From 10 Minutes to 10 Seconds",
    desc: "Watch as we live-tune a complex warehouse query using execution plans and indexing strategy.",
    date: "May 10, 2024",
    category: "videos",
    tag: "Video Tutorial",
    readTime: "30 min video",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>Watch the performance tuning magic happen live.</p>`
  },
  {
    slug: "video-fabric-end-to-end",
    title: "[Video] End-to-End Microsoft Fabric Implementation",
    desc: "A complete guide to setting up OneLake, Data Factory, and Power BI in the new Fabric ecosystem.",
    date: "May 05, 2024",
    category: "videos",
    tag: "Video Tutorial",
    readTime: "60 min video",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.jpg" },
    content: `<p>The ultimate guide to Microsoft Fabric architecture.</p>`
  }
];
