import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { getPosts } from '../lib/sanity'
import { urlFor } from '../lib/sanity'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog - iOS Geliştirme Yazıları',
  description: 'iOS geliştirme, Swift, SwiftUI ve mobil teknolojiler hakkında düşüncelerim ve deneyimlerim. En güncel iOS geliştirme ipuçları ve teknik yazılar.',
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
    'Efe Mesudiyeli Blog'
  ],
  openGraph: {
    title: 'Blog - iOS Geliştirme Yazıları | Efe Mesudiyeli',
    description: 'iOS geliştirme, Swift, SwiftUI ve mobil teknolojiler hakkında düşüncelerim ve deneyimlerim.',
    type: 'website',
    url: 'https://efemesudiyeli.dev/blog',
  },
  twitter: {
    title: 'Blog - iOS Geliştirme Yazıları | Efe Mesudiyeli',
    description: 'iOS geliştirme, Swift, SwiftUI ve mobil teknolojiler hakkında düşüncelerim ve deneyimlerim.',
  },
  alternates: {
    canonical: 'https://efemesudiyeli.dev/blog',
  },
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="border-b border-gray-200" style={{ paddingTop: '120px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            iOS geliştirme, Swift ve mobil teknolojiler hakkında düşüncelerim
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group cursor-pointer border-b border-gray-100 pb-6 last:border-b-0 hover-lift transition-all duration-500 hover:bg-gray-50/50 hover:border-blue-200 rounded-xl px-4 py-4 bg-indigo-50/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="flex gap-4">
                    {/* Author Profile */}
                    <div className="flex-shrink-0">
                      {post.author?.image ? (
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={urlFor(post.author.image).width(100).height(100).url()}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {post.author?.name?.charAt(0).toUpperCase() || 'E'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <span className="font-medium text-gray-900">{post.author?.name || 'Efe Mesudiyeli'}</span>
                            <span>·</span>
                            <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR', { month: 'short', day: 'numeric' })}</span>
                          </div>

                          <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight mb-2 line-clamp-2">
                            {post.title}
                          </h2>

                          {post.excerpt && (
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>
                          )}

                          <div className="flex items-center text-sm text-gray-500">
                            <span className="flex items-center justify-center gap-2">
                              <Clock size={12} className="flex-shrink-0" />
                              <span className="leading-none">5 dk okuma süresi</span>
                            </span>
                          </div>
                        </div>

                        {/* Cover Image */}
                        {post.coverImage && (
                          <div className="flex-shrink-0 w-20 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-46 lg:h-28 my-auto">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                              <Image
                                src={urlFor(post.coverImage).width(200).height(150).url()}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Henüz blog yazısı yok
              </h3>
              <p className="text-gray-500">
                Yakında iOS geliştirme, Swift ve mobil teknolojiler hakkında yazılar paylaşacağım.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}
