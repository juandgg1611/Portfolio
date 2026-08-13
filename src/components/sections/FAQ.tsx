'use client';

import { useState, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import Link from 'next/link';

const faqs = [
  {
    q: '¿Cuánto cuesta un sitio web profesional?',
    a: 'El precio varía según la complejidad del proyecto. Un sitio web de presentación (landing page premium) parte desde $250 USD, mientras que un e-commerce o aplicación web con funciones avanzadas puede ir desde $600 USD en adelante. Todos los proyectos cuentan con cotización personalizada y sin compromiso.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar listo mi sitio web?',
    a: 'Una landing page bien desarrollada tarda entre 1 y 2 semanas. Un proyecto más complejo (e-commerce, plataforma con panel de administración, app web) puede tardar entre 3 y 6 semanas. El tiempo depende también de la rapidez con la que el cliente entregue los materiales necesarios (textos, logos, imágenes).',
  },
  {
    q: '¿Qué necesito tener listo antes de comenzar?',
    a: 'Lo ideal es que tengas: tu logotipo en buena resolución, textos o descripciones de tu negocio, imágenes o fotos que quieras usar, y el nombre del dominio que prefieres. Si no tienes todo esto, podemos orientarte durante el proceso.',
  },
  {
    q: '¿Puedo solicitar cambios después de que el sitio esté listo?',
    a: 'Sí. Cada proyecto incluye una ronda de revisiones antes de la entrega final. Luego del lanzamiento, los cambios menores dentro de los primeros 30 días están cubiertos por la garantía técnica. Cambios mayores o nuevas funcionalidades se cotizan como un anexo adicional.',
  },
  {
    q: '¿El sitio web funcionará bien en celular?',
    a: 'Absolutamente. Todos mis proyectos se desarrollan con diseño 100% responsivo (mobile-first), lo que garantiza que tu sitio se vea y funcione perfectamente en celulares, tablets y computadoras de cualquier tamaño.',
  },
  {
    q: '¿El sitio web aparecerá en Google?',
    a: 'Todos los sitios que desarrollo incluyen optimización SEO técnica básica: estructura correcta de títulos, meta descriptions, sitemap, velocidad de carga y accesibilidad. Esto les da una base sólida para posicionarse en buscadores. Para campañas SEO avanzadas o publicidad en Google, existe un servicio adicional de optimización.',
  },
  {
    q: '¿Qué pasa si necesito mantenimiento o el sitio tiene un problema?',
    a: 'Ofrezco planes de Hosting Gestionado y Mantenimiento mensual que incluyen: disponibilidad del servidor del 99.5%, renovación automática de certificados SSL, monitoreo anti-malware y copias de seguridad periódicas. Si ocurre un problema técnico propio del desarrollo, está cubierto por la garantía de 30 días posterior al lanzamiento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = sectionRef.current?.querySelectorAll('.faq-item');
      if (!items?.length) return;
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
        },
      );
    },
    { scope: sectionRef },
  );

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-cream py-24 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="text-forest font-mono text-xs uppercase tracking-[0.3em] font-bold block mb-4">
            FAQ
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-none tracking-tight text-ink mb-5">
            Preguntas<br />
            <span className="text-warm/40">frecuentes</span>
          </h2>
          <p className="text-warm/70 font-sans text-lg max-w-xl leading-relaxed">
            Todo lo que necesitas saber antes de comenzar tu proyecto. Si tienes alguna otra pregunta, estoy a un mensaje de distancia.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-warm/15">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                aria-expanded={openIndex === i}
              >
                <div className="flex items-start gap-5">
                  <span className="text-forest font-mono text-sm font-black flex-shrink-0 mt-0.5 opacity-60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg md:text-xl font-bold text-ink group-hover:text-forest transition-colors duration-200 leading-snug">
                    {faq.q}
                  </span>
                </div>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-warm/20 flex items-center justify-center text-warm/60 group-hover:border-forest/40 group-hover:text-forest transition-all duration-300 mt-0.5 ${
                    openIndex === i ? 'bg-forest text-ink border-forest rotate-45' : ''
                  }`}
                  style={{ transition: 'transform 0.3s ease, background 0.3s ease' }}
                >
                  <span className="text-sm font-bold leading-none">+</span>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: openIndex === i ? '400px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                }}
              >
                <p className="pl-12 pb-8 text-warm/70 font-sans text-base md:text-lg leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 pt-10 border-t border-warm/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-warm/60 font-sans text-base">
            ¿Tu pregunta no está aquí?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-cream font-mono font-bold text-sm uppercase tracking-widest hover:bg-ink/80 transition-colors duration-300"
          >
            Escríbeme directamente →
          </Link>
        </div>
      </div>
    </section>
  );
}
