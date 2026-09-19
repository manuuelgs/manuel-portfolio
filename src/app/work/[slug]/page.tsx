import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';;

// Permite generar las rutas estáticas al compilar
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white text-black min-h-screen pt-28 md:pt-36 pb-24 selection:bg-black selection:text-white">
      {/* 1. HERO HEADER */}
      <header className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span>{project.index}</span>
            <span>{project.category}</span>
          </div>

          {/* Título gigante responsivo con control de quiebre */}
          <h1 className="font-sans text-5xl sm:text-7xl md:text-[9vw] leading-[0.88] tracking-tighter uppercase font-bold m-0 break-words">
            {project.title}
          </h1>

          <div className="flex justify-between items-end border-b border-black pb-6 mt-12 md:mt-16 font-mono text-xs md:text-sm uppercase tracking-wider">
            <span>{project.year}</span>
            <span>{project.location}</span>
          </div>
        </div>
      </header>

      {/* 2. HERO IMAGE - FULL WIDTH */}
      <section className="w-full mb-20 md:mb-32">
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-neutral-100">
          <Image
            src={project.heroImage}
            alt={`${project.title} Preview`}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. INFO SECTION (Client & Services en 1 fila en mobile, Overview abajo) */}
      <section className="px-6 md:px-12 mb-24 md:mb-36">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-12 border-b border-neutral-200 pb-16">
          {/* CLIENT */}
          <div className="col-span-1 md:col-span-3 font-mono">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Client
            </span>
            <p className="text-sm uppercase tracking-wide">{project.client}</p>
          </div>

          {/* SERVICES */}
          <div className="col-span-1 md:col-span-3 font-mono">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Services
            </span>
            <ul className="text-sm uppercase tracking-wide space-y-1">
              {project.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          {/* OVERVIEW */}
          <div className="col-span-2 md:col-span-6 font-sans">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Overview
            </span>
            <p className="text-base md:text-lg leading-relaxed text-neutral-800">
              {project.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 4. STORY 01 */}
      <section className="px-6 md:px-12 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 md:col-start-5">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
              {project.story01Title}
            </span>
            <p className="font-sans text-xl md:text-2xl leading-snug">
              {project.story01Text}
            </p>
          </div>
        </div>
      </section>

      {/* 5. MEDIA DETAILS (2 IMÁGENES FULL WIDTH SIN GAP EN MOBILE) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-24 md:mb-36">
        <div className="relative w-full aspect-[4/5] bg-neutral-200">
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ Detail 01 ]
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] bg-neutral-300">
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-neutral-500">
            [ Detail 02 ]
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE (Opcional si tiene link) */}
      {project.experienceUrl && (
        <section className="px-6 md:px-12 mb-24 md:mb-32">
          <div className="border-t border-black pt-12 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Live Experience
            </span>
            <Link
              href={project.experienceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-3xl md:text-5xl uppercase font-bold tracking-tight hover:opacity-50 transition-opacity inline-flex items-center gap-2"
            >
              {project.experienceLabel || 'Visit Project'} ↗
            </Link>
          </div>
        </section>
      )}

      {/* 7. CREDITS */}
      <footer className="px-6 md:px-12 border-t border-neutral-200 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 font-mono text-xs uppercase tracking-widest">
          {project.credits.design && (
            <div className="md:col-span-3">
              <span className="text-neutral-400 block mb-2">Design</span>
              <p>{project.credits.design}</p>
            </div>
          )}
          {project.credits.development && (
            <div className="md:col-span-3">
              <span className="text-neutral-400 block mb-2">Development</span>
              <p>{project.credits.development}</p>
            </div>
          )}
          {project.credits.agency && (
            <div className="md:col-span-3">
              <span className="text-neutral-400 block mb-2">Agency</span>
              <p>{project.credits.agency}</p>
            </div>
          )}
          <div className="md:col-span-3">
            <span className="text-neutral-400 block mb-2">Year</span>
            <p>{project.credits.year}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}