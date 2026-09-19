"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "branding",
    number: "02",
    title: "BRANDING",
    description: [
      "Visual identities",
      "Creative systems",
      "Brand strategy",
      "Art direction",
    ],
    media: ["BRANDING VIDEO"],
  },
  {
    id: "social",
    number: "03",
    title: "SOCIAL MEDIA",
    description: [
      "Content creation",
      "Campaigns",
      "Social systems",
      "Motion",
    ],
    media: ["SOCIAL VIDEO"],
  },
  {
    id: "untagged",
    number: "04",
    title: "UNTAGGED DESIGN",
    description: [
      "Print",
      "Events",
      "Posters",
      "Experimental work",
    ],
    media: ["UNTAGGED Video"],
  },
  {
    id: "web",
    number: "05",
    title: "WEB / DEV",
    description: [
      "Web design",
      "UX/UI",
      "Development",
      "Digital products",
    ],
    media: ["WEB Video"],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-service-id");
            const current = services.find((s) => s.id === id);
            if (current) {
              setActiveService(current);
            }
          }
        });
      },
      {
        root: null,
        // Usamos threshold 0.5 en lugar de rootMargin para que detecte perfecto el scroll horizontal en mobile
        rootMargin: "0px", 
        threshold: 0.5,
      }
    );

    const items = document.querySelectorAll(".service-item");
    items.forEach((item) => observerRef.current?.observe(item));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="services-section">
      <div className="services-content">
        
        {/* COLUMNA IZQUIERDA (Textos en Desktop / Carrusel en Mobile) */}
        <div className="services-left">
          {services.map((service) => (
            <article
              className="service-item"
              key={service.id}
              data-service-id={service.id} 
            >
              {/* Eliminamos el div service-mobile-visual de aquí para usar la ventana global */}

              <span className="mono">
                {service.number} — {service.title}
              </span>

              <ul>
                {service.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* COLUMNA DERECHA (Ventana sincronizada para Desktop Y Mobile) */}
        <div className="services-window">
          <div className="services-media-grid">
            {activeService.media.map((item) => (
              <div className="placeholder services-video" key={item}>
                <span className="mono">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Indicador de Swipe para Mobile (Manejado con utility classes de Tailwind) */}
      <div className="md:hidden flex justify-start mt-6 px-6 border-t border-black pt-4 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
        <span className="animate-pulse flex items-center gap-2">
          Swipe <span className="text-base leading-none">→</span>
        </span>
      </div>
    </section>
  );
}