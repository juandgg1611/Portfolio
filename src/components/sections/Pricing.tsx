'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';
import Link from 'next/link';

const plans = [
  {
    id: 'presencia',
    tag: 'Plan 01',
    name: 'Presencia',
    tagline: 'Tu negocio en internet, bien hecho.',
    price: 'Desde $350',
    period: 'pago único',
    accent: false,
    features: [
      'Diseño web profesional a medida',
      'Hasta 5 secciones o páginas',
      'Formulario de contacto funcional',
      'Optimización SEO básica',
      'Versión mobile 100% adaptada',
      'Dominio + hosting primer año incluido',
    ],
    cta: 'Solicitar presupuesto',
    waLink: `https://wa.me/584246801808?text=${encodeURIComponent('Hola Juan, me interesa el Plan Presencia (desde $350). ¿Podemos hablar?')}`,
  },
  {
    id: 'crecimiento',
    tag: 'Plan 02',
    name: 'Crecimiento',
    tagline: 'Capta más clientes. Vende más. Crece.',
    price: 'Desde $750',
    period: 'pago único',
    accent: true,
    features: [
      'Páginas ilimitadas',
      'Blog o catálogo de productos',
      'Integración con WhatsApp y redes',
      'Panel para gestionar contenido',
      'Analytics y métricas de visitas',
      'SEO avanzado + velocidad',
      'Soporte prioritario 30 días',
    ],
    cta: 'Quiero este plan',
    waLink: `https://wa.me/584246801808?text=${encodeURIComponent('Hola Juan, me interesa el Plan Crecimiento (desde $750). ¿Podemos hablar?')}`,
  },
];

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.pricing-cards-container',
          start: 'top 88%',
          end: 'top 55%',
          scrub: 0.25,
        },
      });

      // Both cards animate simultaneously in opposite directions
      tl.fromTo(
        '.plan-card:nth-child(1)',
        { x: -280, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'none', force3D: true }
      ).fromTo(
        '.plan-card:nth-child(2)',
        { x: 280, opacity: 0, scale: 0.92 },
        { x: 0, opacity: 1, scale: 1, ease: 'none', force3D: true },
        0 // start at the exact same time as card 1
      );
    },
    { scope: pricingRef },
  );

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  void handleContact;

  return (
    <section
      id="pricing"
      ref={pricingRef}
      className="bg-ink text-light py-24 md:py-40 pb-10 md:pb-14 overflow-hidden border-t border-border-subtle"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-16 md:mb-32">
          <AnimatedHeading
            text="Planes"
            className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tight leading-none uppercase mb-8"
          />

          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-start-5 md:col-span-8 flex flex-col md:flex-row gap-6 md:gap-16">
              <span className="text-neon uppercase text-lg md:text-xl font-bold tracking-[0.2em] whitespace-nowrap pt-2">
                (Inversión)
              </span>
              <AnimateDescription
                text="Inversión clara, sin sorpresas. Elige el plan que se adapta a tu etapa y tus objetivos. Contáctame si necesitas algo personalizado."
                className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-soft font-sans leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="pricing-cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch pb-4 md:pb-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card relative flex flex-col rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 group [will-change:transform,opacity]
                ${plan.accent
                  ? 'border-neon/40 bg-gradient-to-br from-[#0d0d0c] via-[#0d140d] to-[#0d0d0c]'
                  : 'border-border-subtle bg-elevated-dark'
                }`}
            >
              {plan.accent && (
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-neon to-transparent" />
              )}
              {plan.accent && (
                <div className="absolute top-8 right-8">
                  <span className="text-sm font-mono font-bold uppercase tracking-[0.2em] bg-neon text-ink px-4 py-2 rounded-full">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1 p-8 md:p-10">
                <div className="mb-10">
                  <span className={`text-xs md:text-sm font-mono uppercase tracking-[0.2em] font-bold mb-4 block
                    ${plan.accent ? 'text-neon' : 'text-warm/50'}`}
                  >
                    {plan.tag}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-light mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-warm/60 font-sans text-lg sm:text-xl leading-snug max-w-md">
                    {plan.tagline}
                  </p>
                </div>

                <div className={`w-full h-px mb-10 ${plan.accent ? 'bg-neon/30' : 'bg-border-subtle'}`} />

                <div className="mb-12">
                  <span className={`font-display text-4xl md:text-5xl font-black leading-none tracking-tight
                    ${plan.accent ? 'text-neon' : 'text-light'}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-warm/40 font-mono text-sm uppercase tracking-widest mt-3 block">
                    {plan.period}
                  </span>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className={`mt-1.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black
                        ${plan.accent ? 'bg-neon text-ink' : 'bg-elevated text-warm'}`}
                      >
                        ✓
                      </span>
                      <span className={`font-sans text-lg sm:text-xl leading-snug
                        ${plan.accent ? 'text-light/90' : 'text-light/70'}`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-2xl font-sans font-bold text-lg uppercase tracking-wider text-center transition-all duration-300
                    ${plan.accent
                      ? 'bg-neon text-ink hover:bg-neon/90 hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] active:scale-[0.98]'
                      : 'bg-elevated text-light border-2 border-border-subtle hover:border-warm/30 hover:bg-elevated-dark active:scale-[0.98]'
                    }`}
                >
                  {plan.cta} →
                </a>
              </div>

              {plan.accent && (
                <div
                  className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'radial-gradient(800px circle at 50% 0%, rgba(200,255,0,0.05), transparent 70%)' }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/planes" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-neon text-neon font-sans font-bold uppercase tracking-widest text-sm md:text-base rounded-full overflow-hidden transition-all duration-300 hover:bg-neon hover:text-ink hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]">
            <span>Ver detalles de los planes</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        <p className="text-center text-warm/30 font-mono text-sm uppercase tracking-widest mt-12">
          * Los precios varían según la complejidad. Contáctame para un presupuesto exacto.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
