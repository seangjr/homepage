export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'details',
      description: 'For project page',
      title: 'Details',
      type: 'string'
    },
    {
      name: 'projectLink',
      description: 'For project page',
      title: 'Project Link',
      type: 'string'
    },
    {
      name: 'tags',
      description: 'For project page',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string'}]
    },
    {
      name: 'dateStarted',
      description: 'For project page',
      title: 'Date started for project',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagesGallery',
      title: 'Images Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],

}
