import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { getPost } from '../../lib/sanity'
import { urlFor } from '../../lib/sanity'
import { calculateReadingTime } from '../../lib/reading-time'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import StructuredData from '../../components/StructuredData'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.',
    }
  }

  const title = `${post.title} | efemesudiyeli.dev`
  const description = post.excerpt || `${post.title} - iOS geliştirme, Swift ve mobil teknolojiler hakkında blog yazısı.`
  const publishedDate = new Date(post.publishedAt).toISOString()
  const modifiedDate = post._updatedAt ? new Date(post._updatedAt).toISOString() : publishedDate

  const metadata: Metadata = {
    title,
    description,
    keywords: [
      'iOS Blog',
      'Swift Blog',
      'SwiftUI Blog',
      'iOS Geliştirme',
      'Mobil Uygulama Geliştirme',
      'iOS Tutorial',
      'Swift Tutorial',
      'iOS Tips',
      'Mobile Development Blog',
      'Efe Mesudiyeli Blog',
      ...(post.tags || [])
    ],
    authors: [{ name: post.author?.name || 'Efe Mesudiyeli' }],
    creator: post.author?.name || 'Efe Mesudiyeli',
    publisher: 'Efe Mesudiyeli',
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: `https://efemesudiyeli.dev/blog/${slug}`,
      siteName: 'efemesudiyeli.dev',
      locale: 'tr_TR',
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: [post.author?.name || 'Efe Mesudiyeli'],
      tags: post.tags || [],
      images: post.coverImage ? [
        {
          url: urlFor(post.coverImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
      creator: '@efemesudiyeli',
    },
    alternates: {
      canonical: `https://efemesudiyeli.dev/blog/${slug}`,
    },
    other: {
      'article:author': post.author?.name || 'Efe Mesudiyeli',
      'article:published_time': publishedDate,
      'article:modified_time': modifiedDate,
      'article:section': 'Technology',
      'article:tag': (post.tags || []).join(','),
    },
  }

  return metadata
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="article" data={post} url={`https://efemesudiyeli.dev/blog/${slug}`} />
      <Navigation />
      
      {/* Header */}
      <div className="border-b border-gray-200" style={{ paddingTop: '120px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Blog&apos;a Dön
          </Link>
        </div>
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="w-full h-56 md:h-[300px] relative">
          <Image
            src={urlFor(post.coverImage).width(1200).height(600).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              {post.author?.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {post.author?.name?.charAt(0).toUpperCase() || 'E'}
                  </span>
                </div>
              )}
              <div>
                <div className="font-medium text-gray-900">{post.author?.name || 'Efe Mesudiyeli'}</div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span>·</span>
                  <span>{calculateReadingTime(post.content)} dk okuma</span>
                </div>
              </div>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-gray max-w-none prose-ul:list-disc prose-ol:list-decimal prose-ul:ml-6 prose-ol:ml-6 prose-li:marker:text-gray-700 prose-li:text-gray-800">
          {post.content ? (
            <PortableText
              value={post.content as any}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="my-8">
                      <Image
                        src={urlFor(value).width(800).height(600).url()}
                        alt={value.alt || 'Blog image'}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                      {value.caption && (
                        <p className="text-sm text-gray-500 mt-2 text-center italic">
                          {value.caption}
                        </p>
                      )}
                    </div>
                  ),
                },
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3 leading-tight">
                      {children}
                    </h3>
                  ),
                  normal: ({ children }) => (
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-800">{children}</em>
                  ),
                },
              }}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Bu blog yazısı için içerik bulunamadı.
              </p>
            </div>
          )}
        </div>
      </article>
      
      <Footer />
    </div>
  )
}
