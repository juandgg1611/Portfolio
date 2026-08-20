import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

export default function FAQPage() {
  return (
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

          {/* ── MEGA CTA BAR ── */}
          <div className="mt-20 relative overflow-hidden rounded-3xl" style={{
            background: 'linear-gradient(135deg, #C8FF00 0%, #a0cc00 50%, #7aab00 100%)',
            boxShadow: '0 30px 80px rgba(200,255,0,0.35), 0 0 0 1px rgba(200,255,0,0.2)',
          }}>
            {/* Diagonal stripe texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.07) 12px, rgba(0,0,0,0.07) 24px)',
            }} />
            {/* Glow orb */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
            }} />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 px-10 py-10 md:px-16 md:py-14">
              <div>
                <p className="font-mono text-ink/60 text-xs uppercase tracking-[0.25em] mb-2">¿Aún tienes dudas?</p>
                <h2 className="font-display font-black uppercase text-ink leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  Cuéntame tu proyecto.<br />Te respondo hoy.
                </h2>
              </div>
              <Link
                href="/contacto"
                className="flex-shrink-0 group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:gap-5"
                style={{
                  background: '#080807',
                  color: '#C8FF00',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}
              >
                Hablemos ahora
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
