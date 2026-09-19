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
    // Configura el observador para que se active cuando el elemento pase por el centro de la pantalla
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
        rootMargin: "-40% 0px -40% 0px", // Margen que crea una "línea imaginaria" en el centro del viewport
        threshold: 0,
      }
    );

    // Selecciona y observa todos los artículos de servicio
    const items = document.querySelectorAll(".service-item");
    items.forEach((item) => observerRef.current?.observe(item));

    return () => {
      // Limpieza del observador al desmontar
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="services-section">
      <div className="services-content">
        
        {/* COLUMNA IZQUIERDA (Textos en Desktop / Todo intercalado en Mobile) */}
        <div className="services-left">
          {services.map((service) => (
            <article
              className="service-item"
              key={service.id}
              data-service-id={service.id} // Identificador para el IntersectionObserver
            >
              {/* Video intercalado exclusivo para mobile */}
              <div className="service-mobile-visual">
                <div className="placeholder services-video">
                  <span className="mono">{service.media}</span>
                </div>
              </div>

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

        {/* COLUMNA DERECHA (Ventana sincronizada exclusiva para Desktop) */}
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
    </section>
  );
}