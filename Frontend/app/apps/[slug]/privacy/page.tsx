import { client } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { ArrowLeft, Calendar, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  appStoreUrl?: string
  privacyPolicy?: unknown[]
}

interface PageProps {
  params: {
    slug: string
  }
}

async function getProject(slug: string): Promise<Project | null> {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      appStoreUrl,
      privacyPolicy
    }`
    const project = await client.fetch(query, { slug })
    return project
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = await getProject(slug)
  
  if (!project) {
    return {
      title: 'Privacy Policy Not Found',
    }
  }

  return {
    title: `${project.title} Privacy Policy`,
    description: `Privacy policy for ${project.title} app`,
  }
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project || !project.privacyPolicy || project.privacyPolicy.length === 0) {
    notFound()
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Ana Sayfa
              </Link>
            </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date().toLocaleDateString('tr-TR')}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title} Privacy Policy
            </h1>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium">App:</span>
                <span className="ml-2">{project.title}</span>
              </div>
              {project.appStoreUrl && (
                <a 
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={16} className="mr-1" />
                  App Store&apos;da Görüntüle
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700">
              <PortableText value={project.privacyPolicy as any} />
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                İletişim
              </h3>
              <p className="text-gray-700 mb-4">
                Bu gizlilik politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="flex items-center text-blue-600">
                <Mail size={16} className="mr-2" />
                <a 
                  href="mailto:efemesudiyeli@icloud.com"
                  className="hover:text-blue-800 transition-colors"
                >
                  efemesudiyeli@icloud.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
