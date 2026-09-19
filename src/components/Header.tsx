"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // Estado para controlar el idioma seleccionado
  const [lang, setLang] = useState("EN");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 px-6 md:px-12 py-4 flex justify-between items-center font-mono text-xs uppercase tracking-widest text-black dark:text-white transition-colors">
      
      {/* Botón Home / Iniciales */}
      <Link href="/" className="hover:opacity-50 transition-opacity font-bold">
        MGS
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

      {/* Switch de Idioma Minimalista */}
      <div className="flex items-center">
        <button 
          onClick={() => setLang("EN")}
          className={`px-2 py-1 transition-colors ${
            lang === "EN" 
              ? "bg-black text-white dark:bg-white dark:text-black" // Fondo negro (o blanco en dark mode) si está activo
              : "text-neutral-500 hover:text-black dark:hover:text-white" // Texto gris si está inactivo
          }`}
        >
          EN
        </button>
        <span className="text-neutral-300 dark:text-neutral-700">/</span>
        <button 
          onClick={() => setLang("ES")}
          className={`px-2 py-1 transition-colors ${
            lang === "ES" 
              ? "bg-black text-white dark:bg-white dark:text-black" 
              : "text-neutral-500 hover:text-black dark:hover:text-white"
          }`}
        >
          ES
        </button>
      </div>
      
    </header>
  );
}