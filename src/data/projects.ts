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
  gallery?: string[];
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
    index: '01 / 03',
    category: 'Web Design / Dev',
    title: 'Gatapretadesign.com',
    year: '2026',
    location: 'Caracas, VE',
    heroImage: '/projects/gatapreta-hero.png',
    client: 'Gatapreta Design',
    services: ['Web Design', 'WordPress Dev', 'Custom PHP / JS'],
    overview:
      "The challenge was To develop a hyper-customized website featuring unconventional interactive mechanics—such as draggable navigation menus—without sacrificing backend usability. The core challenge was reconciling a highly unique and complex frontend experience with the client's requirement to manage all content autonomously within a simple, familiar environment like WordPress and Elementor.",
    story01Title: 'The execution',
    story01Text:
      'To achieve this perfect balance between bespoke design and effortless self-management, I engineered a suite of entirely custom WordPress plugins and Elementor widgets. Writing PHP and JavaScript from scratch, I successfully encapsulated advanced technical features—including Swiper-based testimonial systems, draggable UI elements, and precise CSS animations—into intuitive, user-friendly modules. The result is a robust web architecture where visual innovation seamlessly coexists with simplified content administration.',
    mediaDetail1: '/projects/gatapreta/photoshop.png',
  mediaDetail2: '/projects/gatapreta/phone.png',
      gallery: [
      '/projects/gatapreta/servicios.mp4',
      '/projects/gatapreta/menu.mp4',
    ],
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
    index: '02 / 03',
    category: 'Visual',
    title: 'CCS Meat Co',
    year: '2024 / 2025',
    location: 'Caracas, VE',
    heroImage: '/projects/ccsmeat/heroccs.png', 
    client: 'CCS Meat Co',
    services: ['Graphic Design', 'Art Direction',],
    overview:
      "CCS Meat Co. stands as the city's premier steakhouse, redefining the traditional dining experience by targeting a younger demographic. The brand's identity strikes a perfect balance, blending a fresh, carefree, and jovial personality with the refined elegance expected from a high-end culinary destination.",
    story01Title: 'Role',
    story01Text:
      'Acting as a versatile design partner, I translated their unique voice into a cohesive and highly engaging visual experience across all touchpoints. My ongoing work encompassed a comprehensive range of brand collateral, including large-scale billboards, physical and digital menus, custom apparel, placemats, stickers, and dynamic social media assets, ensuring a consistent and stylish aesthetic at every level of the customer journey.',
    mediaDetail1: '/projects/ccsmeat/carne.jpg',
    mediaDetail2: '/projects/ccsmeat/menu.png',
    credits: {
      design: 'Manuel Garcia',
      agency: '3 Agencia Creativa',
      year: '2023 / 2024',
    },
  },
  {
    slug: 'bom-creative-studios',
    index: '03 / 03',
    category: 'Branding',
    title: 'Bom Creative Studios',
    year: '2023',
    location: 'Caracas, VE',
    heroImage: '/projects/bom/hero.png', // Placeholder temporal
    client: 'Bom Creative Studios',
    services: ['Branding', 'Visual Identity',],
    overview:
      'A digital marketing agency needed to evolve from a basic founder-made logo to a highly professional identity. The objective was to build a brand completely from scratch without relying on past references, with the only strict constraint being the mandatory use of the color purple.',
    story01Title: 'THE SOLUTION',
    story01Text:
      'I conceptualized a dynamic visual system based on circular geometry to symbolize constant energy and content viralization. Championing purple to reflect innovation, I introduced vibrant yellow and lemonade green accents, supported by solid Helvetica Neue typography to deliver a modern, bold, and strategic brand presence.',
    gallery: [
      '/projects/bom/1.png',
      '/projects/bom/3.jpg',
      '/projects/bom/6.jpg',

    ],
      credits: {
      design: 'Manuel Garcia Sandoval',
      year: '2023',
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