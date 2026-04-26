import React from "react";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const postsToSync = [
  {
    slug: "mastering-dax-patterns-2026",
    title: "Mastering Advanced DAX: High-Performance Patterns for 2026",
    content: "<h2>The Evolution of DAX in Enterprise BI</h2><p>Optimization is not just about writing shorter code; it's about understanding the engine.</p>",
    published: true
  },
  {
    slug: "power-bi-fabric-integration-2026",
    title: "Microsoft Fabric & Power BI: The Unified Data Architecture",
    content: "<h2>OneLake: The OneDrive for Data</h2><p>Microsoft Fabric represents the single largest update to the data ecosystem.</p>",
    published: true
  },
  {
    slug: "real-time-streaming-analytics-power-bi",
    title: "Real-Time Streaming Analytics: Sub-Second Dashboards",
    content: "<h2>Why Real-Time Matters</h2><p>In high-frequency trading, a 4-hour data lag is an eternity.</p>",
    published: true
  },
  {
    slug: "sql-server-window-functions-advanced",
    title: "SQL Window Functions: Solving Complex Analytical Challenges",
    content: "<h2>The Power of OVER()</h2><p>Window functions are arguably the most powerful tool in the SQL developer's arsenal.</p>",
    published: true
  },
  {
    slug: "sql-json-data-warehousing",
    title: "JSON in SQL Server: Bridging the Gap Between NoSQL and RDBMS",
    content: "<h2>The Rise of JSON</h2><p>Modern applications speak JSON. Your warehouse must speak it too.</p>",
    published: true
  },
  {
    slug: "sql-deadlock-prevention-strategies",
    title: "SQL Deadlock Prevention: Maintaining High Availability",
    content: "<h2>Preventing Clashes</h2><p>Consistency in object access patterns can eliminate circular wait conditions.</p>",
    published: true
  },
  {
    slug: "ai-driven-data-quality-2026",
    title: "AI-Driven Data Quality: The Future of Trust in Analytics",
    content: "<h2>Automated Trust</h2><p>Machine learning models now learn the 'normal' range of your data.</p>",
    published: true
  },
  {
    slug: "power-automate-financial-reporting-workflow",
    title: "Automating the Financial Close: Power Automate Workflows",
    content: "<h2>Speeding up Finance</h2><p>Trigger-based reporting ensures refreshes happen exactly when data is ready.</p>",
    published: true
  },
  {
    slug: "self-healing-etl-pipelines",
    title: "Self-Healing ETL: Automated Error Recovery in Data Engineering",
    content: "<h2>The Self-Healing Grid</h2><p>If an API call fails, the system should retry and log, not just break.</p>",
    published: true
  },
  {
    slug: "cdo-playbook-2026-strategy",
    title: "The 2026 CDO Playbook: Leading with a Data-First Mindset",
    content: "<h2>The CDO's Mission</h2><p>Shifting from thinking about data as raw material to a primary business product.</p>",
    published: true
  },
  {
    slug: "measuring-bi-roi-financial-framework",
    title: "The Financial Framework for Measuring BI ROI",
    content: "<h2>Quantifying Value</h2><p>A rigorous framework for proving the value of data investments.</p>",
    published: true
  },
  {
    slug: "scaling-data-culture-enterprise",
    title: "Scaling Data Culture: From Power Users to Data Champions",
    content: "<h2>The Cultural Foundation</h2><p>The best technology fails without a team that knows the right questions.</p>",
    published: true
  },
  {
    slug: "gartner-magic-quadrant-2026-bi",
    title: "Gartner Magic Quadrant 2026: The Rise of AI-Native Platforms",
    content: "<h2>Insight Engines</h2><p>The market is moving toward proactive alerting over static visuals.</p>",
    published: true
  },
  {
    slug: "global-data-privacy-regulations-2026",
    title: "Global Data Privacy in 2026: Navigating the New Landscape",
    content: "<h2>Regulatory Complexity</h2><p>Maintaining a global BI stack requires navigating country-specific privacy laws.</p>",
    published: true
  },
  {
    slug: "data-mesh-adoption-trends-2026",
    title: "Data Mesh in 2026: From Hype to Enterprise Reality",
    content: "<h2>Decentralizing Data</h2><p>Data mesh is moving from a buzzword to a standard implementation pattern.</p>",
    published: true
  }
];

export default async function SeedPage() {
  try {
    // 1. Find or create admin user
    let admin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (!admin) {
      admin = await prisma.user.create({
        data: {
          name: "Datta Sable",
          email: "admin@biexpert.com",
          role: 'ADMIN'
        }
      });
    }

    const adminId = admin.id;

    // 2. Sync posts
    for (const p of postsToSync) {
      await prisma.post.upsert({
        where: { slug: p.slug },
        update: {
          title: p.title,
          content: p.content,
          published: p.published,
          authorId: adminId
        },
        create: {
          slug: p.slug,
          title: p.title,
          content: p.content,
          published: p.published,
          authorId: adminId
        }
      });
    }

    console.log("Seed Complete!");
    redirect("/admin/content");
    return null;
  } catch (error: any) {
    console.error("SEED ERROR:", error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-10">
        <div className="max-w-2xl w-full bg-rose-500/10 border border-rose-500/20 p-8">
           <h1 className="text-2xl font-bold uppercase tracking-tighter text-rose-500 mb-4">Activation Error</h1>
           <pre className="text-xs text-muted-foreground whitespace-pre-wrap bg-background p-4 border border-border">
             {error.message}
           </pre>
           <button 
             onClick={() => window.location.reload()}
             className="mt-6 px-6 py-2 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest"
           >
             Retry Activation
           </button>
        </div>
      </div>
    );
  }
}
