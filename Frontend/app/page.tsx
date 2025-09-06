import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import { Project, Skill, Profile } from './types'
import { client } from './lib/sanity'
import type { Metadata } from 'next'

async function getProfile(): Promise<Profile | null> {
  try {
    const query = `*[_type == "profile"][0]`
    const profile = await client.fetch(query)
    return profile
  } catch {
    return null
  }
}

async function getProjects(): Promise<Project[]> {
  try {
    const query = `*[_type == "project"] | order(order asc)`
    const projects = await client.fetch(query)
    return projects
  } catch {
    return []
  }
}

async function getSkills(): Promise<Skill[]> {
  try {
    const query = `*[_type == "skill"] | order(category asc, name asc)`
    const skills = await client.fetch(query)
    return skills
  } catch {
    return []
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile()
  const projects = await getProjects()
  
  const name = profile?.name || 'Efe Mesudiyeli'
  const title = profile?.title || 'iOS Developer'
  const subtitle = profile?.subtitle || 'Swift ve SwiftUI ile güzel, kullanıcı dostu iOS uygulamaları geliştiriyorum'
  const aboutText = profile?.aboutText || 'iOS geliştirme konusunda tutkulu bir yazılım geliştiriciyim.'
  
  const projectCount = projects.length
  const skills = ['Swift', 'SwiftUI', 'UIKit', 'iOS Development', 'Mobile Apps']
  
  const titleText = `${name} - ${title} | iOS Developer Portfolio`
  const description = `${subtitle} ${aboutText} ${projectCount}+ proje ile ${skills.join(', ')} konularında uzman.`
  
  return {
    title: titleText,
    description: description,
    keywords: [
      'iOS Developer',
      'Swift',
      'SwiftUI', 
      'UIKit',
      'Mobile Development',
      'iOS Apps',
      'App Store',
      'Portfolio',
      name,
      ...skills
    ],
    authors: [{ name: name }],
    creator: name,
    publisher: name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: 'https://efemesudiyeli.dev',
      siteName: `${name} - iOS Developer Portfolio`,
      title: titleText,
      description: description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${name} - iOS Developer Portfolio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleText,
      description: description,
      images: ['/og-image.jpg'],
      creator: '@efemesudiyeli',
    },
    alternates: {
      canonical: 'https://efemesudiyeli.dev',
    },
    category: 'technology',
    classification: 'Portfolio Website',
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': name,
    },
  }
}

export default async function Home() {
  const profile = await getProfile()
  const projects = await getProjects()
  const skills = await getSkills()

  // Default profile if none exists
  const defaultProfile: Profile = {
    _id: 'default',
    name: 'iOS Developer',
    title: 'iOS Developer',
    subtitle: 'Swift ve SwiftUI ile güzel, kullanıcı dostu iOS uygulamaları geliştiriyorum',
    aboutText: 'iOS geliştirme konusunda tutkulu bir yazılım geliştiriciyim. Kullanıcı deneyimini ön planda tutarak, modern teknolojilerle yenilikçi mobil uygulamalar geliştiriyorum.',
    highlights: [
      '5+ yıl iOS geliştirme deneyimi',
      '20+ App Store\'da yayınlanmış uygulama',
      'Swift, SwiftUI, UIKit uzmanı'
    ],
    stats: [
      { number: '50+', label: 'Proje', color: 'blue' },
      { number: '5+', label: 'Yıl Deneyim', color: 'green' }
    ],
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'contact@example.com'
    }
  }

  return (
    <div className="min-h-screen">
      <StructuredData type="person" data={profile || defaultProfile} />
      <StructuredData type="website" data={profile || defaultProfile} />
      <Navigation />
      <Hero profile={profile || defaultProfile} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  )
}
