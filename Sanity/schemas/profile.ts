import { defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., iOS Developer, Mobile App Developer',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short description under the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
      rows: 4,
      description: 'Detailed about text for the right side card',
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights to show as bullet points',
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {
                list: [
                  { title: 'Blue', value: 'blue' },
                  { title: 'Green', value: 'green' },
                  { title: 'Purple', value: 'purple' },
                  { title: 'Orange', value: 'orange' },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'cv',
      title: 'CV/Resume',
      type: 'file',
      description: 'Upload your CV/Resume file (PDF recommended)',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage',
    },
  },
})
