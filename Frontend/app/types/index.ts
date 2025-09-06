export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanityFile {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
    url?: string
    originalFilename?: string
  }
}

export interface Profile {
  _id: string
  name: string
  title: string
  subtitle: string
  profileImage?: SanityImage
  aboutText?: string
  highlights?: string[]
  cv?: SanityFile
  stats?: Array<{
    number: string
    label: string
    color: 'blue' | 'green' | 'purple' | 'orange'
  }>
  socialLinks?: {
    github?: string
    linkedin?: string
    email?: string
  }
}

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: SanityImage
  bio?: unknown[]
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  content?: unknown[]
  coverImage?: SanityImage
  publishedAt: string
  _updatedAt?: string
  tags?: string[]
  author?: Author
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  longDescription?: unknown[]
  image?: SanityImage
  technologies?: string[]
  githubUrl?: string
  appStoreUrl?: string
  featured: boolean
  order?: number
  privacyPolicy?: unknown[]
}

export interface Skill {
  _id: string
  name: string
  category: 'ios' | 'frontend'
  icon?: string
  asset?: SanityImage
  order: number
}

