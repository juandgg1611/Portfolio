import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description:
    'Respuestas a las preguntas más comunes sobre servicios de desarrollo web, precios, tiempos de entrega, mantenimiento y más.',
};

const faqs = [
  {
    num: '01',
    q: '¿Cuánto cuesta un sitio web profesional?',
    a: 'El precio varía según la complejidad del proyecto. Un sitio web de presentación (landing page premium) parte desde $250 USD, mientras que un e-commerce o aplicación web con funciones avanzadas puede ir desde $600 USD en adelante. Todos los proyectos cuentan con cotización personalizada y sin compromiso.',
  },
  {
    num: '02',
    q: '¿Cuánto tiempo tarda en estar listo mi sitio web?',
    a: 'Una landing page bien desarrollada tarda entre 1 y 2 semanas. Un proyecto más complejo (e-commerce, plataforma con panel de administración, app web) puede tardar entre 3 y 6 semanas. El tiempo depende también de la rapidez con la que el cliente entregue los materiales necesarios como textos, logos e imágenes.',
  },
  {
    num: '03',
    q: '¿Qué necesito tener listo antes de comenzar?',
    a: 'Lo ideal es que tengas: tu logotipo en buena resolución, textos o descripciones de tu negocio, imágenes o fotos que quieras usar, y el nombre del dominio que prefieres. Si no tienes todo esto, podemos orientarte durante el proceso sin ningún problema.',
  },
  {
    num: '04',
    q: '¿Puedo solicitar cambios después de que el sitio esté listo?',
    a: 'Sí. Cada proyecto incluye una ronda de revisiones antes de la entrega final. Luego del lanzamiento, los cambios menores dentro de los primeros 30 días están cubiertos por la garantía técnica. Cambios mayores o nuevas funcionalidades se cotizan como un anexo adicional al contrato.',
  },
  {
    num: '05',
    q: '¿El sitio web funcionará bien en celular?',
    a: 'Absolutamente. Todos los proyectos se desarrollan con diseño 100% responsivo (mobile-first), lo que garantiza que tu sitio se vea y funcione perfectamente en celulares, tablets y computadoras de cualquier tamaño y resolución.',
  },
  {
    num: '06',
    q: '¿El sitio web aparecerá en Google?',
    a: 'Todos los sitios que desarrollo incluyen optimización SEO técnica básica: estructura correcta de títulos, meta descriptions, sitemap, velocidad de carga y accesibilidad. Esto les da una base sólida para posicionarse en buscadores. Para campañas SEO avanzadas o publicidad en Google, existe un servicio adicional de optimización.',
  },
  {
    num: '07',
    q: '¿Qué pasa si necesito mantenimiento o el sitio tiene un problema?',
    a: 'Ofrezco planes de Hosting Gestionado y Mantenimiento mensual que incluyen disponibilidad del servidor del 99.5%, renovación automática de certificados SSL, monitoreo anti-malware y copias de seguridad periódicas. Si ocurre un problema técnico propio del desarrollo, está cubierto por la garantía de 30 días posterior al lanzamiento.',
  },
];

const CALENDLY_URL = 'https://calendly.com/juandgg11o';
const WHATSAPP_NUMBER = '584246801808';
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola Juan! 👋 Estaba leyendo tus FAQs y me quedé con una duda. ¿Podemos hablar sobre mi proyecto?'
);

export default function FAQPage() {
  return (
    <>
      {/* Hover glow styles — pure CSS, no JS needed */}
      <style>{`
        .card-wa {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 4px 30px rgba(0,0,0,0.2);
          transition: border-color .5s, background .5s, box-shadow .5s, transform .4s;
        }
        .card-wa:hover {
          border-color: rgba(37,211,102,0.45);
          background: rgba(37,211,102,0.05);
          box-shadow: 0 0 70px -12px rgba(37,211,102,0.35), 0 4px 30px rgba(0,0,0,0.3);
          transform: translateY(-6px);
        }
        .card-wa:hover .card-glow { opacity: 1; }
        .card-wa:hover .card-icon { transform: scale(1.1) rotate(3deg); }
        .card-wa:hover .card-btn-wa { box-shadow: 0 0 24px rgba(37,211,102,0.55); }
        .card-wa:hover .card-arrow { transform: translateX(4px); }

        .card-cal {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow: 0 4px 30px rgba(0,0,0,0.2);
          transition: border-color .5s, background .5s, box-shadow .5s, transform .4s;
        }
        .card-cal:hover {
          border-color: rgba(200,255,0,0.45);
          background: rgba(200,255,0,0.04);
          box-shadow: 0 0 70px -12px rgba(200,255,0,0.28), 0 4px 30px rgba(0,0,0,0.3);
          transform: translateY(-6px);
        }
        .card-cal:hover .card-glow { opacity: 1; }
        .card-cal:hover .card-icon { transform: scale(1.1) rotate(3deg); }
        .card-cal:hover .card-btn-cal { box-shadow: 0 0 24px rgba(200,255,0,0.45); }
        .card-cal:hover .card-arrow { transform: translateX(4px); }

        .card-glow {
          opacity: 0;
          transition: opacity .7s;
        }
        .card-icon {
          transition: transform .3s;
        }
        .card-arrow {
          transition: transform .3s;
          display: inline-block;
        }
      `}</style>

      <main className="bg-ink min-h-screen text-light pt-32 pb-32 px-4 sm:px-6 md:px-10 lg:px-14 font-sans">
        <div className="max-w-[1200px] mx-auto">

          <Link
            href="/"
            className="inline-flex items-center text-neon hover:text-light transition-colors mb-10 font-mono text-sm uppercase tracking-widest group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300 inline-block mr-2">←</span>
            Volver al Portafolio
          </Link>

          {/* Header */}
          <div className="mb-16">
            <span className="text-warm/50 font-mono text-sm uppercase tracking-[0.2em] block mb-4">Soporte</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-6 text-light">
              Preguntas<br /><span className="text-neon">Frecuentes</span>
            </h1>
            <p className="text-white/70 font-sans text-lg sm:text-xl leading-relaxed max-w-2xl">
              Todo lo que necesitas saber antes de comenzar tu proyecto. Si tu pregunta no aparece aquí, estoy a un mensaje de distancia.
            </p>
          </div>

          {/* FAQ List */}
          <div className="prose prose-invert max-w-none">
            <div className="divide-y divide-border-subtle">
              {faqs.map((faq) => (
                <div key={faq.num} className="py-10">
                  <div className="mb-3 overflow-hidden">
                    <strong className="section-label text-sm md:text-base font-mono uppercase tracking-[0.2em] text-neon block">
                      {faq.num}
                    </strong>
                  </div>
                  <div className="w-full h-px bg-border-subtler mb-5" />
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-light mb-5 leading-tight">
                    {faq.q}
                  </h2>
                  <p className="text-white/70 text-lg sm:text-xl leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── MEGA CTA SECTION ── */}
          <div className="mt-28 pt-20 border-t border-white/10">

            {/* Section header */}
            <div className="text-center mb-14">
              <span className="text-neon font-mono text-xs uppercase tracking-[0.3em] block mb-5">¿Seguimos hablando?</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-none text-light mb-5">
                Tu idea merece<br />
                <span className="text-neon">una conversación real</span>
              </h2>
              <p className="text-white/55 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Sin formularios eternos. Sin esperas. Escríbeme ahora mismo o elige el momento perfecto para hablar.
              </p>
            </div>

            {/* Dual CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

              {/* ── WhatsApp Card ── */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-wa relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col gap-7"
                style={{ backdropFilter: 'blur(16px)' }}
              >
                {/* Ambient glow */}
                <div
                  className="card-glow absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.2) 0%, transparent 70%)' }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="card-icon w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(37,211,102,0.14)', border: '1px solid rgba(37,211,102,0.28)' }}
                  >
                    💬
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#25D366' }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#25D366' }} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#25D366' }}>Disponible ahora</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: '#25D366' }}>Acción inmediata</span>
                  <h3 className="text-2xl sm:text-[1.85rem] font-black text-light uppercase leading-tight">
                    Rompe el hielo<br />en WhatsApp 💬
                  </h3>
                  <p className="text-white/55 font-sans text-base leading-relaxed mt-1">
                    Un mensaje, sin compromisos. Cuéntame tu idea y te digo exactamente qué podemos hacer juntos — sin costos ocultos.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-1 gap-4">
                  <span className="text-white/35 font-mono text-xs">Respondo en &lt; 24h hábiles</span>
                  <span
                    className="card-btn-wa flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-sm uppercase tracking-widest transition-all duration-300"
                    style={{ background: '#25D366', color: '#080807' }}
                  >
                    Escribir ahora
                    <span className="card-arrow">→</span>
                  </span>
                </div>
              </a>

              {/* ── Calendly Card ── */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-cal relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col gap-7"
                style={{ backdropFilter: 'blur(16px)' }}
              >
                {/* Ambient glow */}
                <div
                  className="card-glow absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(200,255,0,0.17) 0%, transparent 70%)' }}
                />

                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="card-icon w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.22)' }}
                  >
                    📅
                  </div>
                  <div className="flex flex-col items-end mt-1">
                    <span className="font-mono text-xs text-white/35 uppercase tracking-widest">Duración</span>
                    <span className="font-mono text-xs font-bold text-neon">15 – 30 min</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-2">
                  <span className="text-neon font-mono text-xs uppercase tracking-[0.22em]">Sin presión</span>
                  <h3 className="text-2xl sm:text-[1.85rem] font-black text-light uppercase leading-tight">
                    Agendemos un<br />café virtual ☕
                  </h3>
                  <p className="text-white/55 font-sans text-base leading-relaxed mt-1">
                    Elige el día y la hora que mejor te venga. Una conversación de 15 minutos puede definir el rumbo de tu proyecto.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-1 gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/35 font-mono text-xs uppercase tracking-widest">Disponibilidad</span>
                    <span className="text-neon font-mono text-xs font-bold">Lun – Vie · 9am – 6pm VET</span>
                  </div>
                  <span className="card-btn-cal flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-sm uppercase tracking-widest bg-neon text-ink transition-all duration-300">
                    Ver horarios
                    <span className="card-arrow">→</span>
                  </span>
                </div>
              </a>

            </div>

            {/* Micro bottom text */}
            <p className="text-center text-white/25 font-mono text-xs uppercase tracking-[0.2em] mt-12">
              Sin spam · Sin compromisos · 100% gratis consultarnos
            </p>

          </div>
        </div>
      </main>
    </>
  );
}
