import React, { Suspense } from "react";
import SolutionClientPage from "./SolutionClientPage";

export async function generateStaticParams() {
  return [
    { slug: 'bfsi' },
    { slug: 'mis-automation' },
    { slug: 'retail' },
    { slug: 'healthcare' },
    { slug: 'sql-architecture' },
    { slug: 'dashboard-design' },
    { slug: 'fintech' },
    { slug: 'enterprise-bi' },
    { slug: 'compliance' }
  ];
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SolutionClientPage slug={resolvedParams.slug} />
    </Suspense>
  );
}
