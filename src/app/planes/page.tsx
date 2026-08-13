'use client';

import React from 'react';
import Link from 'next/link';

const plans = [
  {
    tag: 'Plan 01',
    name: 'Presencia',
    price: 'Desde $350',
    period: 'pago único',
    accent: false,
    idealFor: 'Emprendedores y negocios que buscan establecer su primera huella digital con una web profesional e informativa.',
    features: [
      'Diseño web profesional a medida (One-Page o hasta 5 secciones internas).',
      'Formulario de contacto funcional conectado a tu correo.',
      'Optimización SEO básica (títulos, meta-descripciones).',
      'Versión mobile 100% adaptada y fluida.',
      'Dominio + hosting por el primer año incluido.',
    ],
    waLink: `https://wa.me/584246801808?text=${encodeURIComponent('Hola Juan, me interesa el Plan Presencia (desde $350). ¿Podemos hablar?')}`,
  },
  {
    tag: 'Plan 02',
    name: 'Crecimiento',
    price: 'Desde $750',
    period: 'pago único',
    accent: true,
    idealFor: 'Negocios establecidos que buscan automatizar ventas, atraer clientes de forma activa y gestionar su propio contenido.',
    features: [
      'Todo lo del Plan Presencia.',
      'Páginas ilimitadas (según necesidad).',
      'Blog, portafolio o catálogo de productos integrado.',
      'Panel de administración para gestionar contenido fácilmente.',
      'Integración avanzada con WhatsApp, CRMs o redes sociales.',
      'Analytics y métricas de visitas (Google Analytics).',
      'Soporte prioritario por 30 días post-lanzamiento.',
    ],
    waLink: `https://wa.me/584246801808?text=${encodeURIComponent('Hola Juan, me interesa el Plan Crecimiento (desde $750). ¿Podemos hablar?')}`,
  },
];

export default function PlanesPage() {
  return (
    <main className="bg-ink min-h-screen text-light pt-32 pb-24 px-4 sm:px-6 md:px-10 lg:px-14 font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <Link href="/" className="inline-flex items-center text-neon hover:text-light transition-colors mb-10 font-mono text-sm uppercase tracking-widest">
            ← Volver al inicio
          </Link>
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tight leading-none uppercase mb-6 text-light">
            Detalles y <span className="text-neon">Mantenimiento</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Información detallada sobre los planes, los servicios de mantenimiento y nuestro marco legal para que todo esté claro desde el principio.
          </p>
        </div>

        {/* Planes Detailed Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase mb-12 text-light">Planes en detalle</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 group [will-change:transform,opacity]
                  ${plan.accent
                    ? 'border-neon/40 bg-gradient-to-br from-[#0d0d0c] via-[#0d140d] to-[#0d0d0c] shadow-[0_0_60px_rgba(200,255,0,0.10)]'
                    : 'border-border-subtle bg-elevated-dark'
                  }`}
              >
                {/* Neon top line for accent card */}
                {plan.accent && (
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-neon to-transparent" />
                )}

                {/* Recommended badge */}
                {plan.accent && (
                  <div className="absolute top-8 right-8">
                    <span className="text-sm font-mono font-bold uppercase tracking-[0.2em] bg-neon text-ink px-4 py-2 rounded-full">
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-8 md:p-10">
                  <span className={`text-xs md:text-sm font-mono uppercase tracking-[0.2em] font-bold mb-4 block
                    ${plan.accent ? 'text-neon' : 'text-warm/50'}`}
                  >
                    {plan.tag}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-light mb-3">
                    {plan.name}
                  </h3>
                  <p className={`font-sans text-lg leading-snug mb-8 ${plan.accent ? 'text-white' : 'text-warm/60'}`}>
                    {plan.idealFor}
                  </p>

                  <div className={`w-full h-px mb-8 ${plan.accent ? 'bg-neon/20' : 'bg-border-subtle'}`} />

                  <div className="mb-8">
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
                      <li key={i} className="flex items-start gap-4">
                        <span className={`mt-1.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black
                          ${plan.accent ? 'bg-neon text-ink' : 'bg-elevated text-warm'}`}
                        >
                          ✓
                        </span>
                        <span className={`font-sans text-lg leading-snug
                          ${plan.accent ? 'text-light/90' : 'text-warm/70'}`}
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
                    className={`block w-full py-4 rounded-2xl font-sans font-bold text-lg uppercase tracking-wider text-center transition-all duration-300 active:scale-[0.98]
                      ${plan.accent
                        ? 'bg-neon text-ink hover:bg-neon/90 hover:shadow-[0_0_40px_rgba(200,255,0,0.35)]'
                        : 'bg-elevated text-light border-2 border-border-subtle hover:border-warm/30 hover:bg-elevated-dark'
                      }`}
                  >
                    Solicitar este plan →
                  </a>
                </div>

                {/* Neon radial glow on hover for accent card */}
                {plan.accent && (
                  <div
                    className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(800px circle at 50% 0%, rgba(200,255,0,0.06), transparent 70%)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Mantenimiento Web Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase mb-12 text-light">Mantenimiento y Hosting</h2>
          <div className="bg-elevated border border-neon/20 p-8 md:p-12 rounded-[2.5rem] text-warm/80 space-y-6 shadow-[0_0_60px_rgba(200,255,0,0.07),inset_0_0_40px_rgba(200,255,0,0.03)]">
            {/* Neon top line */}
            <div className="absolute" style={{ display: 'none' }} />
            <div className="relative">
              <div className="absolute -top-8 md:-top-12 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neon/60 to-transparent rounded-full" />
            </div>
            <p className="text-lg">
              El servicio de <strong className="text-neon">Hosting Gestionado y Mantenimiento Recurrente</strong> asegura que tu sitio web funcione de manera óptima las 24 horas del día.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              {[
                { num: '01', title: 'Disponibilidad (Uptime)', desc: 'Garantía de un nivel de disponibilidad del servidor del 99.5% anual.' },
                { num: '02', title: 'Seguridad SSL', desc: 'Renovaciones automáticas de certificados de seguridad (candado verde) para proteger a tus usuarios.' },
                { num: '03', title: 'Monitoreo Anti-Malware', desc: 'Protección anti-malware constante y monitoreo de la salud del sitio web.' },
                { num: '04', title: 'Respaldos Periódicos', desc: 'Copias de seguridad (backups) periódicas de la base de datos y archivos.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-5">
                  <span className="text-neon font-display text-2xl font-black flex-shrink-0 drop-shadow-[0_0_8px_rgba(200,255,0,0.6)]">{item.num}</span>
                  <div>
                    <h4 className="text-light font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-warm/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Links Section */}
        <section className="pt-12 border-t border-border-subtle">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase mb-4 text-light">Marco Legal</h2>
          <p className="text-white/70 mb-12 text-lg max-w-2xl">
            Consulta nuestra documentación legal completa. Toda relación comercial está regida por los términos y condiciones acordados y nuestra política de privacidad.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/terminos" className="group bg-elevated border border-border-subtle p-8 rounded-[2rem] flex flex-col gap-4 hover:border-neon/40 transition-all duration-300">
              <span className="text-warm/50 font-mono text-xs uppercase tracking-[0.2em]">Legal</span>
              <h3 className="font-display text-2xl font-black uppercase text-light group-hover:text-neon transition-colors">Bases Legales y Términos de Servicio</h3>
              <p className="text-warm/60 text-base leading-relaxed flex-1">
                Marco legal, identificación de partes, alcance contractual, esquema de pagos, garantías técnicas y servicios de alojamiento.
              </p>
              <span className="text-neon font-mono text-sm uppercase tracking-widest flex items-center gap-2 mt-2">Leer términos <span className="transform group-hover:translate-x-1 transition-transform">→</span></span>
            </Link>

            <Link href="/privacidad" className="group bg-elevated border border-border-subtle p-8 rounded-[2rem] flex flex-col gap-4 hover:border-neon/40 transition-all duration-300">
              <span className="text-warm/50 font-mono text-xs uppercase tracking-[0.2em]">Legal</span>
              <h3 className="font-display text-2xl font-black uppercase text-light group-hover:text-neon transition-colors">Política de Privacidad</h3>
              <p className="text-warm/60 text-base leading-relaxed flex-1">
                Información sobre cómo recopilamos, usamos y protegemos tus datos personales, conforme al marco normativo venezolano e internacional (GDPR).
              </p>
              <span className="text-neon font-mono text-sm uppercase tracking-widest flex items-center gap-2 mt-2">Leer política <span className="transform group-hover:translate-x-1 transition-transform">→</span></span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
