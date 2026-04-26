import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://biexpert.in';

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
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
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
