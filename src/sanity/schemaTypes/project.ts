import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title', // Genera la URL automáticamente basado en el título
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Ej: BRANDING, EDITORIAL, WEB...',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Ej: 2026',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true, // ¡Magia! Te permite encuadrar la imagen visualmente en el panel
      },
    }),
  ],
})