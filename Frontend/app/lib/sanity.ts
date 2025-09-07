import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImage, Post, Profile, SanityFile } from '../types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

export function fileUrl(source: SanityFile): string {
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${source.asset._ref.replace('file-', '').replace('-pdf', '.pdf').replace('-doc', '.doc').replace('-docx', '.docx')}`
}

// Blog queries
export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    publishedAt,
    tags,
    author->{
      _id,
      name,
      slug,
      image
    }
  }`
  
  return await client.fetch(query)
}

export async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    publishedAt,
    _updatedAt,
    tags,
    author->{
      _id,
      name,
      slug,
      image
    }
  }`
  
  const params = { slug }
  return await client.fetch(query, params)
}

// Profile queries
export async function getProfile(): Promise<Profile | null> {
  const query = `*[_type == "profile"][0] {
    _id,
    name,
    title,
    subtitle,
    profileImage,
    aboutText,
    highlights,
    cv,
    stats,
    socialLinks
  }`
  return await client.fetch(query)
}
