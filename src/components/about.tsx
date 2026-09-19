import Image from 'next/image';

export default function About() {
  return (
    <section className="relative border-b border-black bg-white" id="about">
      
      {/* ENCABEZADO */}
      <div className="px-6 md:px-12 pt-16 md:pt-24 pb-4 border-b border-black mb-0 md:mb-16 relative z-20 bg-white md:bg-transparent">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          06 — ABOUT
        </span>
      </div>

      <div className="relative flex flex-col md:grid md:grid-cols-12 md:gap-12 lg:gap-16 md:px-12 md:pb-24">
        
        {/* COLUMNA IZQUIERDA / FONDO EN MOBILE */}
        <div className="absolute top-0 left-0 md:relative md:col-span-5 w-full h-[75vh] md:h-auto md:aspect-[3/4] z-0">
          <Image
            src="/manu-bw.png"
            alt="Manuel Garcia Sandoval"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-top grayscale" 
          />
          {/* DEGRADADO INVERTIDO Y RECORTADO: Solo ocupa el 60% inferior de la foto */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-white via-white/90 to-transparent md:hidden z-10"></div>
        </div>

        {/* COLUMNA DERECHA / TEXTO Y UBICACIÓN */}
        <div className="relative z-10 px-6 md:px-0 pt-[50vh] pb-16 md:pb-0 md:pt-4 md:col-span-7 flex flex-col justify-between">
          
          <div className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.05] tracking-tight text-black">
            <p className="mb-6 md:mb-8">
              Creative Designer, Art Director and Web Developer with more than 7 years of experience creating brand identities, digital interfaces and web applications.
            </p>
            <p>
              I combine strategic design, modern web development and AI-assisted workflows to build efficient, scalable digital experiences.
            </p>
          </div>

          {/* UBICACIÓN COMPARTIDA (Mobile y Desktop) */}
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 mt-16 md:mt-24 border-t border-black pt-4 md:border-none md:pt-0">
            <span className="block mb-1">BASED IN</span>
            <span className="text-black">CARACAS / VENEZUELA</span>
          </div>
          
        </div>

      </div>
    </section>
  );
}