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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Evolution of DAX in Enterprise BI</h2><p>Optimization is not just about writing shorter code; it's about understanding the engine.</p>`
  },
  {
    slug: "power-bi-fabric-integration-2026",
    title: "Microsoft Fabric & Power BI: The Unified Data Architecture",
    desc: "How Microsoft Fabric's OneLake is revolutionizing the Power BI ecosystem by eliminating data silos.",
    date: "May 20, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>OneLake: The OneDrive for Data</h2><p>Microsoft Fabric represents the single largest update to the data ecosystem.</p>`
  },
  {
    slug: "real-time-streaming-analytics-power-bi",
    title: "Real-Time Streaming Analytics: Sub-Second Dashboards",
    desc: "A comprehensive guide to building live-streaming dashboards in Power BI using Azure Stream Analytics.",
    date: "May 18, 2024",
    category: "power-bi",
    tag: "Power BI",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Why Real-Time Matters</h2><p>In high-frequency trading, a 4-hour data lag is an eternity.</p>`
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
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Power of OVER()</h2><p>Window functions are arguably the most powerful tool in the SQL developer's arsenal.</p>`
  },
  {
    slug: "sql-json-data-warehousing",
    title: "JSON in SQL Server: Bridging the Gap Between NoSQL and RDBMS",
    desc: "How to efficiently store, query, and index JSON data in SQL Server to handle semi-structured data.",
    date: "May 08, 2024",
    category: "sql",
    tag: "SQL Server",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Rise of JSON</h2><p>Modern applications speak JSON. Your warehouse must speak it too.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Preventing Clashes</h2><p>Consistency in object access patterns can eliminate circular wait conditions.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Automated Trust</h2><p>Machine learning models now learn the "normal" range of your data.</p>`
  },
  {
    slug: "power-automate-financial-reporting-workflow",
    title: "Automating the Financial Close: Power Automate Workflows",
    desc: "Reducing the month-end close by 5 days using automated reporting and cross-department alerts.",
    date: "May 19, 2024",
    category: "automation",
    tag: "Automation",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Speeding up Finance</h2><p>Trigger-based reporting ensures refreshes happen exactly when data is ready.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Self-Healing Grid</h2><p>If an API call fails, the system should retry and log, not just break.</p>`
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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The CDO's Mission</h2><p>Shifting from thinking about data as raw material to a primary business product.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Quantifying Value</h2><p>A rigorous framework for proving the value of data investments.</p>`
  },
  {
    slug: "scaling-data-culture-enterprise",
    title: "Scaling Data Culture: From Power Users to Data Champions",
    desc: "How to build a sustainable data-driven organization that thrives on self-service analytics.",
    date: "May 17, 2024",
    category: "strategy",
    tag: "Strategy",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Cultural Foundation</h2><p>The best technology fails without a team that knows the right questions.</p>`
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
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Insight Engines</h2><p>The market is moving toward proactive alerting over static visuals.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Regulatory Complexity</h2><p>Maintaining a global BI stack requires navigating country-specific privacy laws.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Decentralizing Data</h2><p>Data mesh is moving from a buzzword to a standard implementation pattern.</p>`
  },

  // ── VIDEOS CATEGORY ─────────────────────────────────────────────────────
  {
    slug: "video-building-c-suite-dashboard",
    title: "[Video] Building a C-Suite Dashboard from Scratch",
    desc: "Watch a full 45-minute walkthrough of transforming raw financial data into a board-ready dashboard.",
    date: "May 18, 2024",
    category: "videos",
    tag: "Video Tutorial",
    readTime: "45 min video",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>Dashboard Masterclass</h2><p>Full video transcript and resources included.</p>`
  },
  {
    slug: "video-sql-tuning-live",
    title: "[Video] Live SQL Tuning: From 10 Minutes to 10 Seconds",
    desc: "Watch as we live-tune a complex warehouse query using execution plans and indexing strategy.",
    date: "May 10, 2024",
    category: "videos",
    tag: "Video Tutorial",
    readTime: "30 min video",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2000&auto=format&fit=crop",
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Art of the Query</h2><p>Performance tuning magic happen live.</p>`
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
    author: { name: "Datta Sable", role: "Principal BI Architect", avatar: "/author.webp" },
    content: `<h2>The Fabric Roadmap</h2><p>The ultimate guide to unified data architecture.</p>`
  }
];
