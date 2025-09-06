import { Profile, Project, Post } from '../types'

interface StructuredDataProps {
  type: 'person' | 'website' | 'article' | 'project'
  data: Profile | Post | Project | null
  url?: string
}

export default function StructuredData({ type, data, url }: StructuredDataProps) {
  if (!data) return null

  const baseUrl = 'https://efemesudiyeli.dev'
  const currentUrl = url || baseUrl

  let structuredData: Record<string, unknown> = {}

  switch (type) {
    case 'person':
      const profile = data as Profile
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.title,
        description: profile.subtitle,
        url: currentUrl,
        sameAs: [
          profile.socialLinks?.github,
          profile.socialLinks?.linkedin,
        ].filter(Boolean),
        knowsAbout: [
          'iOS Development',
          'Swift',
          'SwiftUI',
          'UIKit',
          'Mobile App Development',
          'Xcode',
          'App Store',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'iOS Developer',
          description: 'Mobile application developer specializing in iOS platform',
        },
      }
      break

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Efe Mesudiyeli - iOS Developer Portfolio',
        description: 'iOS Developer Efe Mesudiyeli\'nin portfolyo sitesi. Swift, SwiftUI ve UIKit ile geliştirilmiş mobil uygulamalar, projeler ve blog yazıları.',
        url: currentUrl,
        author: {
          '@type': 'Person',
          name: 'Efe Mesudiyeli',
        },
        inLanguage: 'tr-TR',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }
      break

    case 'article':
      const post = data as Post
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage ? `${baseUrl}${post.coverImage}` : undefined,
        datePublished: new Date(post.publishedAt).toISOString(),
        dateModified: post._updatedAt ? new Date(post._updatedAt).toISOString() : new Date(post.publishedAt).toISOString(),
        author: {
          '@type': 'Person',
          name: post.author?.name || 'Efe Mesudiyeli',
        },
        publisher: {
          '@type': 'Person',
          name: 'Efe Mesudiyeli',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
        articleSection: 'Technology',
        keywords: post.tags?.join(', ') || 'iOS, Swift, SwiftUI, Mobile Development',
        inLanguage: 'tr-TR',
      }
      break

    case 'project':
      const project = data as Project
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        image: project.image ? `${baseUrl}${project.image}` : undefined,
        applicationCategory: 'MobileApplication',
        operatingSystem: 'iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        author: {
          '@type': 'Person',
          name: 'Efe Mesudiyeli',
        },
        url: project.appStoreUrl,
        downloadUrl: project.appStoreUrl,
        screenshot: project.image ? `${baseUrl}${project.image}` : undefined,
      }
      break

    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}
