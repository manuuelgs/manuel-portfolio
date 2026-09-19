import SelectedWork from "@/components/selectedwork";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="portfolio">

      

      <section className="relative min-h-[60vh] md:min-h-[90vh] flex flex-col justify-center md:justify-between px-6 md:px-12 pt-28 md:pt-32 pb-8">
  <div>
    <h1 className="font-sans text-[14vw] md:text-[11.5vw] leading-[0.82] tracking-tighter uppercase font-bold select-none flex flex-col">
      <span>MANUEL</span>
      <span>GARCIA</span>
      <span>SANDOVAL</span>
    </h1>
  </div>

  {/* En mobile (mt-12) lo acerca al nombre. En desktop (md:mt-auto) lo empuja abajo */}
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-black mt-12 md:mt-auto pt-6 font-mono text-xs uppercase tracking-widest">
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span>Graphic Designer / Creative / Developer</span>
      <span className="text-neutral-300 hidden md:inline">—</span>
      <a 
        href="/cv"
        target="_blank" 
        rel="noopener noreferrer"
        className="font-bold underline underline-offset-4 hover:opacity-50 transition-opacity"
      >
        [ View Experience ↗ ]
      </a>
    </div>
    <div>
      <span>Caracas / Venezuela</span>
    </div>
  </div>
</section>

      <SelectedWork />
      <Services />

  

<About />

<Contact />

    </main>
  );
}