import React, { Suspense } from "react";
import ServiceClientPage from "./ServiceClientPage";

export async function generateStaticParams() {
  return [
    { slug: 'dashboard-design' },
    { slug: 'predictive-analytics' },
    { slug: 'report-automation' },
    { slug: 'sql-architecture' },
    { slug: 'etl-pipelines' },
    { slug: 'real-time-streaming' }
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceClientPage slug={resolvedParams.slug} />
    </Suspense>
  );
}
