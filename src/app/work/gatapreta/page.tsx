import Image from 'next/image';
import Link from 'next/link';

export default function GatapretaProject() {
  return (
    <main className="bg-white text-black min-h-screen pt-28 md:pt-36 pb-24 selection:bg-black selection:text-white">
      {/* 1. HERO HEADER (Con padding editorial) */}
      <header className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
            <span>01 / 04</span>
            <span>Web Design / Dev</span>
          </div>

          <h1 className="font-sans text-5xl sm:text-7xl md:text-[9vw] leading-[0.9] tracking-tighter uppercase font-regular break-words">
  Gatapreta<br></br>design.com
</h1>

          <div className="flex justify-between items-end border-b border-black pb-6 mt-12 md:mt-16 font-mono text-xs md:text-sm uppercase tracking-wider">
            <span>2026</span>
            <span>Lisboa, POR</span>
          </div>
        </div>
      </header>

      {/* 2. HERO IMAGE - FULL WIDTH (De borde a borde sin px) */}
      <section className="w-full mb-20 md:mb-32">
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-neutral-100">
          <Image
            src="/projects/gatapreta-hero.png"
            alt="Gatapreta Design Interface"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. INFO SECTION (Client & Services en una fila en mobile, Description abajo) */}
      <section className="px-6 md:px-12 mb-24 md:mb-36">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-12 border-b border-neutral-200 pb-16">
          {/* CLIENT: Columna 1 en mobile */}
          <div className="col-span-1 md:col-span-3 font-mono">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Client
            </span>
            <p className="text-sm uppercase tracking-wide">Gatapreta Design</p>
          </div>

          {/* SERVICES: Columna 2 en mobile (al lado de Client) */}
          <div className="col-span-1 md:col-span-3 font-mono">
            <span className="text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Services
            </span>
            <ul className="text-sm uppercase tracking-wide space-y-1">
              <li>Web Design</li>
              <li>WordPress Dev</li>
              <li>Custom PHP / JS</li>
            </ul>
          </div>

          {/* DESCRIPTION: Col-span-2 en mobile (pasa abajo de ambos) */}
          <div className="col-span-2 md:col-span-6 font-sans">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              Overview
            </span>
            <p className="text-base md:text-lg leading-relaxed text-neutral-800">
              Gatapreta needed a digital platform that could communicate the personality of the brand while creating a simple and intuitive experience for users. The architecture combines a robust backend with custom interactive elements to reflect their creative ethos.
            </p>
          </div>
        </div>
      </section>

      {/* 4. STORY 01 (Editorial) */}
      <section className="px-6 md:px-12 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 md:col-start-5">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
              01 / Concept & Flow
            </span>
            <p className="font-sans text-xl md:text-2xl leading-snug">
              The project focused on balancing visual expression and usability, building a digital experience where every interaction felt intentional.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MEDIA FLEXIBLE (2 IMÁGENES) - FULL WIDTH Y GAP 0 EN MOBILE */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-24 md:mb-36">
        <div className="relative w-full aspect-[4/5] bg-neutral-200">
          {/* Placeholder o Imagen 1 */}
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-neutral-400">
            [ Detail 01 ]
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] bg-neutral-300">
          {/* Placeholder o Imagen 2 (pegada en mobile) */}
          <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-neutral-500">
            [ Detail 02 ]
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE (Web / Dev project link) */}
      <section className="px-6 md:px-12 mb-24 md:mb-32">
        <div className="border-t border-black pt-12 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Live Experience
          </span>
          <Link
            href="https://gatapretadesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-3xl md:text-5xl uppercase font-bold tracking-tight hover:opacity-50 transition-opacity inline-flex items-center gap-2"
          >
            Visit Website ↗
          </Link>
        </div>
      </section>

      {/* 7. CREDITS */}
      <footer className="px-6 md:px-12 border-t border-neutral-200 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 font-mono text-xs uppercase tracking-widest">
          <div className="md:col-span-3">
            <span className="text-neutral-400 block mb-2">Design</span>
            <p>Manuel Garcia</p>
          </div>
          <div className="md:col-span-3">
            <span className="text-neutral-400 block mb-2">Development</span>
            <p>Manuel Garcia</p>
          </div>
          <div className="md:col-span-3">
            <span className="text-neutral-400 block mb-2">Year</span>
            <p>2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}