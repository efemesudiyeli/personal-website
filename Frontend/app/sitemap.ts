import { MetadataRoute } from 'next'
import { client } from './lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://efemesudiyeli.dev'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  let blogPosts: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      slug,
      publishedAt,
      _updatedAt
    }`)
    
    blogPosts = posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post._updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // Blog posts could not be fetched for sitemap
  }

  // Projects (for privacy policy pages)
  let projectPages: MetadataRoute.Sitemap = []
  try {
    const projects = await client.fetch(`*[_type == "project" && defined(slug)] {
      slug,
      _updatedAt
    }`)
    
    projectPages = projects.map((project: any) => ({
      url: `${baseUrl}/apps/${project.slug.current}/privacy`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }))
  } catch {
    // Projects could not be fetched for sitemap
  }

  return [...staticPages, ...blogPosts, ...projectPages]
}
