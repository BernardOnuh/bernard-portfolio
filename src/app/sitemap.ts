import { MetadataRoute } from 'next'

const siteUrl = 'https://www.bernardblockchain.xyz'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.9 },
    { path: '/experience', priority: 0.8 },
    { path: '/projects', priority: 0.8 },
    { path: '/blog', priority: 0.9 },
    { path: '/speaking', priority: 0.7 },
    { path: '/resume', priority: 0.7 },
  ]

  const blogPosts = [
    { slug: 'finding-my-purpose', date: '2026-03-06' },
    { slug: 'how-i-won-my-first-hackathon', date: '2026-02-10' },
    { slug: 'my-first-tech-event', date: '2026-02-10' },
    { slug: 'first-freelance-job', date: '2026-02-10' },
    { slug: 'contributing-to-ecosystems', date: '2026-02-10' },
  ]

  return [
    ...pages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    })),
    ...blogPosts.map(({ slug, date }) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified: new Date(date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
