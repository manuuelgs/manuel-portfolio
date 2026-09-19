import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function WorkArchivePage() {
  return (
    <main className="bg-white text-black min-h-screen pt-32 pb-24 px-6 md:px-12">
      <header className="border-b border-black pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
            Archive
          </span>
          <h1 className="font-sans text-5xl md:text-8xl font-bold uppercase tracking-tighter">
            All Works
          </h1>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          Total: {projects.length.toString().padStart(2, '0')}
        </span>
      </header>

      {/* Grilla completa */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {projects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.slug}
            className="group block"
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

              <div className="border-t border-black pt-4 flex flex-col gap-1">
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  {project.category}
                </span>
                <div className="flex justify-between items-baseline gap-4 mt-1">
                  <h2 className="font-sans text-xl font-bold uppercase tracking-tight group-hover:opacity-60 transition-opacity">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-neutral-400 shrink-0">
                    {project.year}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}