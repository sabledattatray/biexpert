import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://biexpert.online';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/case-studies',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog post routes
  const blogSlugs = [
    'mastering-dax-patterns-2026',
    'tableau-vs-power-bi-2026',
    'sql-json-data-warehousing',
    'mis-automation-framework',
    'bfsi-real-time-analytics',
    'fintech-etl-pipelines',
    'retail-predictive-analytics',
    'bi-expert-digital-transformation',
    'power-bi-fabric-integration',
    'sql-performance-tuning-finance',
    'scaling-data-culture-enterprise',
    'real-time-streaming-power-bi',
    'data-quality-framework-mis',
    'self-healing-etl-robustness',
    'measuring-bi-roi-framework',
    'power-bi-fabric-integration-2026',
    'real-time-streaming-analytics-power-bi',
    'sql-server-window-functions-advanced',
    'sql-deadlock-prevention-strategies',
    'ai-driven-data-quality-2026',
    'power-automate-financial-reporting-workflow',
    'self-healing-etl-pipelines',
    'cdo-playbook-2026-strategy',
    'measuring-bi-roi-financial-framework',
    'gartner-magic-quadrant-2026-bi',
    'global-data-privacy-regulations-2026',
    'data-mesh-adoption-trends-2026',
    'news-bi-expert-q2-2026-update',
    'video-master-power-bi-pagination',
    'python-for-power-bi-automation',
    'python-sql-data-pipelines-scale',
    'python-eda-guide-bi-professionals',
  ];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Case Study routes
  const caseStudyRoutes = ['hdfc', 'retail', 'hospital'].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Service routes
  const serviceRoutes = [
    'dashboard-design', 'predictive-analytics', 'report-automation',
    'sql-architecture', 'etl-pipelines', 'real-time-streaming'
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Solution routes
  const solutionRoutes = ['bfsi', 'mis-automation'].map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes, 
    ...blogRoutes, 
    ...caseStudyRoutes, 
    ...serviceRoutes, 
    ...solutionRoutes
  ];
}
