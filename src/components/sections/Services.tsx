'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Desktop only: GSAP ScrollTrigger pin
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const allSections = servicesRef.current.filter(Boolean);
        const pinOffset = 50;
        allSections.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: `top ${pinOffset + index * 100}px`,
            endTrigger: allSections[allSections.length - 1],
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
          });
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  const headingText = 'Lo que hago';
  const descriptionText =
    "Me especializo en construir soluciones digitales completas: rápidas, confiables y orientadas a resultados. Ya sea para un negocio local, una startup o un equipo de producto.";

  const services = [
    {
      id: '01',
      title: 'Diseño Web',
      description:
        'Sitios web rápidos, modernos y adaptados a cualquier dispositivo. Diseño a medida que representa tu marca y convierte visitantes en clientes reales.',
      items: [
        'Landing pages y sitios corporativos',
        'Diseño responsive para móviles y desktop',
        'Animaciones e interacciones premium',
      ],
    },
    {
      id: '02',
      title: 'Backend & APIs',
      description:
        'Sistemas robustos que sostienen tu negocio: bases de datos, integraciones con plataformas de pago, paneles administrativos y lógica de negocio a prueba de escala.',
      items: [
        'APIs REST e integraciones con terceros',
        'Paneles de administración a medida',
        'Autenticación, pagos y notificaciones',
      ],
    },
    {
      id: '03',
      title: 'Apps Móviles Android',
      description:
        'Aplicaciones nativas para Android que llevan tu negocio directamente al bolsillo de tus clientes, con catálogos, notificaciones y experiencias fluidas.',
      items: [
        'Apps nativas Android',
        'Integración con tu sitio web o backend',
        'Publicación en Google Play Store',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-ink text-light py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 md:mb-20">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />

          <div className="grid md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-start-6 md:col-span-7 flex flex-col md:flex-row gap-3 md:gap-10">
              <span className="text-neon uppercase text-sm md:text-base font-bold tracking-[0.2em] whitespace-nowrap">
                (Servicios)
              </span>

              <AnimateDescription
                text={descriptionText}
                className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-soft font-sans leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-8 md:pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                servicesRef.current[index] = el;
              }}
              className="bg-ink pb-16 md:pb-32 sticky md:static"
              style={{
                zIndex: index + 1,
                top: `${80 + index * 48}px`, // mobile: sticky top below navbar + stacking offset
              }}
            >
              <div className="grid md:grid-cols-12 gap-4 items-center py-4 md:py-8 border-t border-border-subtle">
                <h3
                  className="font-display md:col-span-9 md:col-start-2 text-light font-bold text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-none"
                  style={{ transform: 'translateY(-0.1em)' }}
                >
                  {service.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-12 gap-4 md:gap-8 pt-4 md:pt-6">
                <div className="md:col-span-7 md:col-start-6 space-y-4 md:space-y-6">
                  <p className="text-gray-soft text-xl md:text-2xl leading-relaxed font-sans">
                    {service.description}
                  </p>

                  <div className="divide-y divide-border-subtle">
                    {service.items.map((item, i) => (
                      <div key={i} className="py-4 md:py-6 flex items-center gap-3 md:gap-4">
                        <span className="text-neon text-sm md:text-base font-mono font-bold">
                          0{i + 1}
                        </span>
                        <span className="text-xl md:text-2xl font-bold font-sans text-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
