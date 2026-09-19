import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function SelectedWork() {
  // Exactamente los primeros 3 proyectos
  const featured = projects.slice(0, 3);

  return (
    <section className="selected-work px-6 md:px-12 pt-8 pb-24" id="work">
      
      {/* Heading con línea y Animación Swipe en Mobile */}
      <div className="flex justify-between items-end border-b border-black pb-4 mb-8 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          01 — SELECTED WORK
        </span>
        
        {/* Indicador de Deslizar (Solo Mobile) */}
        <span className="md:hidden font-mono text-[10px] uppercase tracking-widest text-neutral-400 animate-pulse flex items-center gap-2">
          Swipe <span className="text-base leading-none">→</span>
        </span>
      </div>

      {/* Grid de proyectos (Carrusel en Mobile / Grid 3 columnas en Desktop) */}
      <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:grid-cols-3 md:gap-8 pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
        {featured.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.slug}
            // En mobile: ocupa 85vw para asomar el siguiente proyecto y hace snap al centro
            className="group block min-w-[85vw] md:min-w-0 snap-center md:snap-align-none"
          >
            <article className="flex flex-col">
              <div className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
                {project.heroImage ? (
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-neutral-400">
                    [ NO PREVIEW ]
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 border-t border-black pt-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  {project.category}
                </span>

                <div className="flex justify-between items-baseline gap-4 mt-1">
                  <h2 className="font-sans text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-neutral-400 shrink-0">
                    {project.year.split('/')[0]}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* CTA para ver todos los proyectos (Estático) */}
      <div className="border-t border-black pt-8 flex justify-between items-center mt-8 md:mt-20 font-mono text-xs uppercase tracking-widest">
        <span className="text-neutral-400 hidden sm:inline">
          Index / All Projects ({projects.length.toString().padStart(2, '0')})
        </span>
        <span className="text-neutral-400 sm:hidden">
          Projects ({projects.length.toString().padStart(2, '0')})
        </span>
        <Link 
          href="/work" 
          className="font-bold hover:opacity-50 transition-opacity flex items-center gap-2"
        >
          [ View all ↗ ]
        </Link>
      </div>
    </section>
  );
}