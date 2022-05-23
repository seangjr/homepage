export default {
  name: 'blog',
  title: 'Blog',
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
      description: 'For blog page',
      title: 'Details',
      type: 'string'
    },
    {
      name: 'tags',
      description: 'For blog page',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string'}]
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
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
