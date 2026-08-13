'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function ThankYouPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<SVGSVGElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start everything invisible
      gsap.set([iconRef.current, labelRef.current, titleRef.current, paraRef.current, btnsRef.current, statsRef.current], {
        opacity: 0,
        y: 28,
      });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.6 });
      gsap.set(checkRef.current, { strokeDasharray: 50, strokeDashoffset: 50 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Glow pulse in
      tl.to(glowRef.current, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 0)

      // 2. Icon circle scales in
      .fromTo(
        iconRef.current,
        { scale: 0.4, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.6)' },
        0.1,
      )

      // 3. Checkmark draws itself
      .to(checkRef.current, { strokeDashoffset: 0, duration: 0.45, ease: 'power2.out' }, 0.4)

      // 4. Label slides up
      .to(labelRef.current, { opacity: 1, y: 0, duration: 0.4 }, 0.65)

      // 5. Title
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.78)

      // 6. Paragraph
      .to(paraRef.current, { opacity: 1, y: 0, duration: 0.45 }, 0.9)

      // 7. Buttons
      .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.45 }, 1.02)

      // 8. Stats row
      .to(statsRef.current, { opacity: 1, y: 0, duration: 0.45 }, 1.14);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#080807] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#C8FF00 1px, transparent 1px), linear-gradient(90deg, #C8FF00 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Neon glow — animated */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(200,255,0,0.09) 0%, transparent 70%)',
        }}
      />

      <div ref={containerRef} className="relative z-10 max-w-xl">
        {/* Check icon */}
        <div className="mb-8 flex justify-center">
          <div
            ref={iconRef}
            className="w-20 h-20 rounded-full bg-neon flex items-center justify-center shadow-[0_0_50px_rgba(200,255,0,0.5)]"
          >
            <svg
              ref={checkRef}
              className="w-9 h-9 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Label */}
        <span ref={labelRef} className="text-neon font-mono text-xs uppercase tracking-[0.3em] opacity-70 block mb-4">
          Mensaje enviado
        </span>

        <h1 ref={titleRef} className="text-3xl md:text-5xl font-black uppercase text-light tracking-tight leading-tight mb-5">
          ¡Gracias por escribirme!
        </h1>

        <p ref={paraRef} className="text-white/60 font-sans text-lg leading-relaxed mb-10">
          Recibí tu mensaje correctamente. Me pondré en contacto contigo en{' '}
          <span className="text-neon font-semibold">menos de 24 horas</span>. Mientras tanto, puedes revisar mis proyectos.
        </p>

        {/* CTAs */}
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon text-ink font-mono font-bold text-sm uppercase tracking-widest rounded-full hover:bg-neon/90 transition-all duration-300 shadow-[0_0_30px_rgba(200,255,0,0.3)]"
          >
            Ver mis proyectos →
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-elevated-dark text-light border border-border-subtle font-mono font-bold text-sm uppercase tracking-widest rounded-full hover:border-neon/40 transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>

        {/* Quick stats */}
        <div ref={statsRef} className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
          {[
            { num: '< 24h', label: 'Tiempo de respuesta' },
            { num: '20+', label: 'Proyectos entregados' },
            { num: '100%', label: 'Clientes satisfechos' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-neon font-display text-2xl md:text-3xl font-black">{num}</div>
              <div className="text-white/40 font-mono text-[10px] uppercase tracking-widest mt-1 leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
