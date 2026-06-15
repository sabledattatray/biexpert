import React, { Suspense } from "react";
import CaseStudyClientPage from "./CaseStudyClientPage";

export async function generateStaticParams() {
  return [
    { slug: 'hdfc' },
    { slug: 'retail' },
    { slug: 'retail-chain' },
    { slug: 'hospital' },
    { slug: 'roi' },
    { slug: 'automation' },
    { slug: 'executive' }
  ];
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseStudyClientPage slug={resolvedParams.slug} />
    </Suspense>
  );
}
