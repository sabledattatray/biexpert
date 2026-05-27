import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Dynamic Blog post routes from database
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const publishedPosts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true }
    });
    
    blogRoutes = publishedPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating sitemap blog routes:", error);
    // Fallback if DB query fails during build
    const fallbackSlugs = [
      'mastering-dax-patterns-2026',
      'power-bi-fabric-integration-2026',
      'real-time-streaming-analytics-power-bi',
      'sql-server-window-functions-advanced',
      'sql-json-data-warehousing',
      'sql-deadlock-prevention-strategies',
      'ai-driven-data-quality-2026',
      'power-automate-financial-reporting-workflow',
      'self-healing-etl-pipelines',
      'measuring-bi-roi-financial-framework',
      'scaling-data-culture-enterprise',
      'gartner-magic-quadrant-2026-bi',
      'global-data-privacy-regulations-2026',
      'data-mesh-adoption-trends-2026'
    ];
    blogRoutes = fallbackSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  }

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

