import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200 px-6 md:px-12 py-4 flex justify-between items-center font-mono text-xs uppercase tracking-widest">
      {/* Botón Home / Contador */}
      <Link href="/" className="hover:opacity-50 transition-opacity">
        00 / 08
      </Link>

      {/* Menú de Secciones */}
      <nav className="flex items-center gap-6 md:gap-8">
        <Link href="/#work" className="hover:opacity-50 transition-opacity">
          WORK
        </Link>
        <Link href="/#about" className="hover:opacity-50 transition-opacity">
          ABOUT
        </Link>
        <Link href="/#contact" className="hover:opacity-50 transition-opacity">
          CONTACT
        </Link>
      </nav>

      {/* Placeholder para Switch de Idioma y futuro botón de CV */}
      <div className="flex items-center gap-4">
        {/* Aquí conectaremos el switcher EN / ES */}
        <span className="cursor-pointer hover:opacity-50 transition-opacity">
          EN / ES
        </span>
      </div>
    </header>
  );
}