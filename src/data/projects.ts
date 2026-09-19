export interface Project {
  slug: string;
  index: string; // ej: "01 / 04"
  category: string;
  title: string;
  year: string;
  location: string;
  heroImage: string;
  client: string;
  services: string[];
  overview: string;
  story01Title: string;
  story01Text: string;
  mediaDetail1?: string;
  mediaDetail2?: string;
  experienceUrl?: string;
  experienceLabel?: string;
  credits: {
    design?: string;
    development?: string;
    agency?: string;
    year: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'gatapreta',
    index: '01 / 04',
    category: 'Web Design / Dev',
    title: 'Gatapreta',
    year: '2026',
    location: 'Caracas, VE',
    heroImage: '/projects/gatapreta-hero.png',
    client: 'Gatapreta Design',
    services: ['Web Design', 'WordPress Dev', 'Custom PHP / JS'],
    overview:
      'Gatapreta needed a digital platform that could communicate the personality of the brand while creating a simple and intuitive experience for users. The architecture combines a robust backend with custom interactive elements to reflect their creative ethos.',
    story01Title: '01 / Concept & Flow',
    story01Text:
      'The project focused on balancing visual expression and usability, building a digital experience where every interaction felt intentional.',
    experienceUrl: 'https://gatapretadesign.com',
    experienceLabel: 'Visit Website',
    credits: {
      design: 'Manuel Garcia',
      development: 'Manuel Garcia',
      year: '2026',
    },
  },
  {
    slug: 'ccs-meat-co',
    index: '02 / 04',
    category: 'Visual',
    title: 'CCS Meat Co',
    year: '2024 / 2025',
    location: 'Caracas, VE',
    heroImage: '/projects/gatapreta-hero.png', // Placeholder temporal
    client: 'CCS Meat Co',
    services: ['Visual Identity', 'Art Direction', 'Packaging'],
    overview:
      'Crafting an uncompromising, raw visual identity for a modern butcher house, elevating traditional craftsmanship into an editorial brand experience.',
    story01Title: '01 / Identity & Texture',
    story01Text:
      'A system defined by bold typography and functional minimalism, focusing on tactile qualities and direct brand communication.',
    credits: {
      design: 'Manuel Garcia',
      year: '2024 / 2025',
    },
  },
  {
    slug: 'bom-creative-studios',
    index: '03 / 04',
    category: 'Branding',
    title: 'Bom Creative Studios',
    year: '2024',
    location: 'Caracas, VE',
    heroImage: '/projects/gatapreta-hero.png', // Placeholder temporal
    client: 'Bom Studios',
    services: ['Brand Strategy', 'Visual System', 'Editorial Design'],
    overview:
      'A comprehensive brand architecture for a creative collective, balancing high-impact aesthetics with modular utility across multiple mediums.',
    story01Title: '01 / Systematic Identity',
    story01Text:
      'Constructing a flexible visual vocabulary that acts as a canvas for both client presentations and cultural experiments.',
    credits: {
      design: 'Manuel Garcia',
      year: '2024',
    },
  },
  {
    slug: 'mvp-restaurants',
    index: '04 / 04',
    category: 'Dev',
    title: 'MVP for Restaurants',
    year: '2026',
    location: 'Caracas, VE',
    heroImage: '/projects/gatapreta-hero.png', // Placeholder temporal
    client: 'Internal Project',
    services: ['Full-stack Dev', 'Next.js App Router', 'Zustand State'],
    overview:
      'A multi-tenant digital menu and ordering interface built for high-demand restaurant workflows, featuring real-time state management and zero-friction interactions.',
    story01Title: '01 / Architecture & Speed',
    story01Text:
      'Eliminating friction between menu exploration and checkout, designed with a focus on instantaneous UI feedback and operational simplicity.',
    experienceUrl: '#',
    experienceLabel: 'View Architecture',
    credits: {
      design: 'Manuel Garcia',
      development: 'Manuel Garcia',
      year: '2026',
    },
  },
];