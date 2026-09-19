"use client";

import { useState, useEffect } from "react";

const roles = [
  { 
    text: "Creative Director?", 
    className: "font-sans font-bold tracking-tighter text-black bg-transparent" 
  },
  { 
    text: "Designer?", 
    className: "font-sans italic font-normal tracking-tight text-black bg-transparent" 
  },
  { 
    text: "DEVELOPER?", 
    // Reducimos el tamaño relativo y agregamos padding/fondo negro
    className: "font-mono uppercase tracking-widest text-white bg-black px-3 py-1 md:px-4 md:py-2 text-[0.7em] md:text-[0.75em]" 
  }
];

export default function Contact() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i].text;

      // Lógica de borrar o escribir
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Velocidad: borra más rápido de lo que escribe (Ajustado para ser un poco más rápido)
      setTypingSpeed(isDeleting ? 30 : 70); 

      // Pausas al terminar de escribir la palabra o borrarla por completo
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Reducido de 2000ms a 1500ms para que no se quede tanto tiempo estático
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const currentRole = roles[loopNum % roles.length];

  return (
    // Ajustado py-16 y min-h-[60vh] para mobile
    <section className="px-6 md:px-12 py-16 md:py-32 flex flex-col justify-between min-h-[60vh] md:min-h-[80vh] bg-neutral-100" id="contact">
      
      {/* Ajustado mb-10 para mobile */}
      <div className="border-b border-black pb-4 mb-10 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          07 — CONTACT
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Reducimos el leading general a 1 */}
        <h2 className="text-5xl md:text-7xl lg:text-[7.5vw] leading-[1] flex flex-col items-start">
          
          {/* Quitamos el margin-bottom que separaba las líneas */}
          <span className="font-sans font-normal tracking-tight text-[0.65em] text-neutral-600">
            Need a
          </span>
          
          {/* Añadimos un pequeño margin-top negativo para juntarlas aún más */}
          <span className="h-[1.5em] flex items-center overflow-visible -mt-1 md:-mt-3">
            <span className={`transition-colors duration-200 ${currentRole.className}`}>
              {text}
            </span>
            <span className="animate-pulse ml-2 w-[4px] md:w-[6px] h-[0.9em] bg-black inline-block"></span>
          </span>
        </h2>
      </div>

      {/* Reducido el mt-24 a mt-12 en mobile para juntar la animación con los links */}
      <div className="mt-12 md:mt-0 pt-8 border-t border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs uppercase tracking-widest">
          
          <div className="flex flex-col gap-2">
            <span className="text-neutral-500">Email</span>
            <a 
              href="mailto:mgarciasand50@gmail.com" 
              className="text-black font-bold hover:opacity-50 transition-opacity"
            >
              mgarciasand50@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-neutral-500">Social</span>
            <a 
              href="https://instagram.com/manuuelgs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-bold hover:opacity-50 transition-opacity"
            >
              Instagram ↗
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-neutral-500">Direct</span>
            <a 
              href="https://wa.me/584226254574" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-bold hover:opacity-50 transition-opacity"
            >
              WhatsApp ↗
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}