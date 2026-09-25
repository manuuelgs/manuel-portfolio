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
        source: 'title',
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
      name: 'role',
      title: 'Your Role',
      type: 'string',
      description: 'Ej: Creative Developer, Web Development, Brand Designer...',
    }),
    defineField({
      name: 'collaborators',
      title: 'Design by / Collaborators',
      type: 'string',
      description: 'Créditos de diseño u otros participantes',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text', // Usa 'text' para áreas de texto grandes (párrafos)
      description: 'Explica el desafío técnico, los plugins custom que usaste, etc.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array', // Esto te permite subir múltiples imágenes
      of: [{ type: 'image', options: { hotspot: true } }],
      options: {
        layout: 'grid', // Para que en el panel se vean como una cuadrícula visual
      },
    }),
  ],
})