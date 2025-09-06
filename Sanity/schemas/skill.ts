import { defineType } from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'iOS Development', value: 'ios' },
          { title: 'Frontend Web Development', value: 'frontend' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon URL',
      type: 'url',
      description: 'GitHub raw URL for the skill icon',
    },
    {
      name: 'asset',
      title: 'Icon Asset',
      type: 'image',
      description: 'Upload custom icon (for SwiftUI, etc.)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order for sorting skills (lower number = higher priority)',
      validation: (Rule) => Rule.required().min(0),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
