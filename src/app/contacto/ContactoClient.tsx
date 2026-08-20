'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';
import {
  MessageCircle,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Clock,
  CheckCircle,
  Zap,
  Coffee,
  ChevronLeft,
} from 'lucide-react';

const WHATSAPP_NUMBER = '584246801808';
const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola Juan! 👋 Vi tu portafolio y me gustaría hablar sobre un proyecto. ¿Tienes un momento?'
);
const CALENDLY_URL = 'https://calendly.com/juandgg11o';

// Availability schedule data
const SCHEDULE = [
  { day: 'Lun', slots: [1, 1, 1, 1, 0, 1, 1, 1, 1] },
  { day: 'Mar', slots: [1, 1, 0, 1, 1, 1, 0, 1, 1] },
  { day: 'Mié', slots: [1, 0, 1, 1, 1, 1, 1, 0, 1] },
  { day: 'Jue', slots: [0, 1, 1, 1, 0, 1, 1, 1, 1] },
  { day: 'Vie', slots: [1, 1, 1, 0, 1, 1, 0, 1, 0] },
];
const HOURS = ['9am', '10', '11', '12pm', '1', '2', '3', '4', '5'];

export default function ContactoClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const waRef = useRef<HTMLAnchorElement>(null);
  const calRef = useRef<HTMLAnchorElement>(null);
  const [waHovered, setWaHovered] = useState(false);
  const [calHovered, setCalHovered] = useState(false);
  const [waClicked, setWaClicked] = useState(false);
  const [calClicked, setCalClicked] = useState(false);
  const [activeCell, setActiveCell] = useState<{ day: number; slot: number } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.35 }
      );

      // Grid cells stagger
      const cells = gridRef.current?.querySelectorAll('.avail-cell');
      if (cells) {
        gsap.fromTo(
          cells,
          { opacity: 0, scale: 0.4 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: 'back.out(1.7)',
            stagger: { amount: 0.8, from: 'random' },
            delay: 0.6,
          }
        );
      }

      // Cards scroll-in
      if (waRef.current) {
        gsap.fromTo(
          waRef.current,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: waRef.current,
              start: 'top 85%',
            },
          }
        );
      }
      if (calRef.current) {
        gsap.fromTo(
          calRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: calRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-ink min-h-screen text-light overflow-x-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Background noise grid decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(200,255,0,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
          }}
        />

        {/* Neon glow orb top-right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(200,255,0,0.08) 0%, transparent 65%)',
          }}
        />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-neon transition-colors mb-14 font-mono text-xs uppercase tracking-widest group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Portafolio
          </Link>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            
            {/* Left: Title */}
            <div className="flex-1">
              <span className="text-neon font-mono text-xs uppercase tracking-[0.3em] block mb-6">
                Contáctame
              </span>
              <h1
                ref={titleRef}
                className="font-display font-black uppercase leading-none text-light"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', opacity: 0 }}
              >
                Hable<span className="text-neon">mos</span>
              </h1>
              <p
                ref={subtitleRef}
                className="mt-6 text-white/55 font-sans text-lg sm:text-xl leading-relaxed max-w-lg"
                style={{ opacity: 0 }}
              >
                Sin formularios eternos. Elige la forma que mejor te vaya — un mensaje rápido o una llamada con café de por medio.
              </p>
              {/* Response time pill */}
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
                </span>
                <span className="font-mono text-xs text-white/50 uppercase tracking-widest">
                  Respondo en &lt; 24h
                </span>
              </div>
            </div>

            {/* Right: Availability Grid — Enlarged */}
            <div ref={gridRef} className="flex-shrink-0 w-full lg:w-auto">
              <p className="text-white/35 font-mono text-xs uppercase tracking-[0.2em] mb-5">
                Disponibilidad semanal · Zona horaria VET (UTC-4)
              </p>

              {/* Hour labels */}
              <div className="flex gap-2 mb-2 pl-14">
                {HOURS.map((h) => (
                  <div key={h} className="w-10 text-center text-white/30 font-mono text-xs">{h}</div>
                ))}
              </div>

              {/* Grid rows */}
              <div className="flex flex-col gap-2">
                {SCHEDULE.map((row, di) => (
                  <div key={row.day} className="flex items-center gap-2">
                    <span className="w-12 text-white/35 font-mono text-xs uppercase">{row.day}</span>
                    {row.slots.map((available, si) => (
                      <button
                        key={si}
                        className="avail-cell w-10 h-10 rounded-lg transition-all duration-200 cursor-pointer"
                        style={{
                          background: activeCell?.day === di && activeCell?.slot === si
                            ? '#C8FF00'
                            : available
                              ? 'rgba(200,255,0,0.18)'
                              : 'rgba(255,255,255,0.04)',
                          border: activeCell?.day === di && activeCell?.slot === si
                            ? '1px solid #C8FF00'
                            : available
                              ? '1px solid rgba(200,255,0,0.3)'
                              : '1px solid rgba(255,255,255,0.06)',
                          transform: activeCell?.day === di && activeCell?.slot === si ? 'scale(1.15)' : 'scale(1)',
                          boxShadow: activeCell?.day === di && activeCell?.slot === si
                            ? '0 0 16px rgba(200,255,0,0.5)' : 'none',
                        }}
                        onMouseEnter={() => available && setActiveCell({ day: di, slot: si })}
                        onMouseLeave={() => setActiveCell(null)}
                        title={available ? `Disponible ${row.day} ${HOURS[si]}` : 'Ocupado'}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Tooltip label */}
              <div className="flex items-center justify-between mt-5">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ background: 'rgba(200,255,0,0.18)', border: '1px solid rgba(200,255,0,0.3)' }} />
                    <span className="text-white/30 font-mono text-xs uppercase">Disponible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />
                    <span className="text-white/30 font-mono text-xs uppercase">Ocupado</span>
                  </div>
                </div>
                {activeCell && (
                  <span className="font-mono text-xs text-neon uppercase tracking-widest">
                    {SCHEDULE[activeCell.day].day} · {HOURS[activeCell.slot]}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── OPTIONS ── */}
      <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-[1300px] mx-auto">

          <p className="text-white/25 font-mono text-xs uppercase tracking-[0.25em] mb-12">
            Elige tu canal
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">

            {/* ── WhatsApp Card ── */}
            <a
              ref={waRef}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
              onClick={() => { setWaClicked(true); setTimeout(() => setWaClicked(false), 1500); }}
              className="group relative flex flex-col gap-8 p-8 md:p-10 xl:p-12 rounded-3xl overflow-hidden"
              style={{
                opacity: 0, // set by GSAP
                background: waHovered ? 'rgba(37,211,102,0.07)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${waHovered ? 'rgba(37,211,102,0.5)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: waHovered ? '0 0 80px -15px rgba(37,211,102,0.4)' : '0 2px 30px rgba(0,0,0,0.3)',
                transform: waHovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Glow orb */}
              <div
                className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(37,211,102,0.22) 0%, transparent 70%)',
                  opacity: waHovered ? 1 : 0,
                  transition: 'opacity 0.7s ease',
                }}
              />

              {/* Top badge */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#25D366' }} />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#25D366' }} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#25D366' }}>
                    Disponible ahora
                  </span>
                </div>
                <span className="font-mono text-xs text-white/25 uppercase tracking-widest">01</span>
              </div>

              {/* Icon */}
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: waHovered ? 'rgba(37,211,102,0.2)' : 'rgba(37,211,102,0.1)',
                    border: '1px solid rgba(37,211,102,0.3)',
                    color: '#25D366',
                    transform: waHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)',
                    transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  {waClicked
                    ? <CheckCircle size={28} strokeWidth={1.8} />
                    : <MessageCircle size={28} strokeWidth={1.8} />}
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-3" style={{ color: 'rgba(37,211,102,0.7)' }}>
                  Acción inmediata · Sin compromiso
                </span>
                <h2 className="font-display font-black uppercase text-light leading-none mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  Escribir por<br />
                  <span style={{ color: '#25D366' }}>WhatsApp</span>
                </h2>
                <p className="text-white/50 font-sans text-base leading-relaxed max-w-sm">
                  Un mensaje y empezamos. Cuéntame tu idea — te respondo con honestidad qué se puede hacer, cuánto tarda y cuánto cuesta.
                </p>
              </div>

              {/* Pre-message preview */}
              <div
                className="relative z-10 p-4 rounded-xl"
                style={{
                  background: 'rgba(37,211,102,0.06)',
                  border: '1px solid rgba(37,211,102,0.15)',
                }}
              >
                <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-2">Mensaje predeterminado</p>
                <p className="text-white/60 font-sans text-sm italic leading-relaxed">
                  &quot;¡Hola Juan! 👋 Vi tu portafolio y me gustaría hablar sobre un proyecto. ¿Tienes un momento?&quot;
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-auto relative z-10">
                <div className="flex items-center gap-2">
                  <Zap size={14} style={{ color: 'rgba(37,211,102,0.6)' }} />
                  <span className="text-white/30 font-mono text-xs">Respuesta &lt; 24h</span>
                </div>
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-sm uppercase tracking-widest"
                  style={{
                    background: '#25D366',
                    color: '#080807',
                    transform: waHovered ? 'scale(1.06)' : 'scale(1)',
                    boxShadow: waHovered ? '0 0 24px rgba(37,211,102,0.6)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  Abrir chat
                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    style={{
                      transform: waHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </span>
              </div>
            </a>

            {/* ── Calendly Card ── */}
            <a
              ref={calRef}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCalHovered(true)}
              onMouseLeave={() => setCalHovered(false)}
              onClick={() => { setCalClicked(true); setTimeout(() => setCalClicked(false), 1500); }}
              className="group relative flex flex-col gap-8 p-8 md:p-10 xl:p-12 rounded-3xl overflow-hidden"
              style={{
                opacity: 0, // set by GSAP
                background: calHovered ? 'rgba(200,255,0,0.05)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${calHovered ? 'rgba(200,255,0,0.5)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: calHovered ? '0 0 80px -15px rgba(200,255,0,0.35)' : '0 2px 30px rgba(0,0,0,0.3)',
                transform: calHovered ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.45s cubic-bezier(0.34,1.56,0.64,1)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Glow orb */}
              <div
                className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(200,255,0,0.18) 0%, transparent 70%)',
                  opacity: calHovered ? 1 : 0,
                  transition: 'opacity 0.7s ease',
                }}
              />

              {/* Top badge */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-neon" />
                  <span className="font-mono text-xs uppercase tracking-widest text-neon">
                    15 – 30 min · Lun–Vie
                  </span>
                </div>
                <span className="font-mono text-xs text-white/25 uppercase tracking-widest">02</span>
              </div>

              {/* Icon */}
              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: calHovered ? 'rgba(200,255,0,0.18)' : 'rgba(200,255,0,0.08)',
                    border: '1px solid rgba(200,255,0,0.25)',
                    color: '#C8FF00',
                    transform: calHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)',
                    transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  {calClicked
                    ? <CheckCircle size={28} strokeWidth={1.8} />
                    : <Coffee size={28} strokeWidth={1.8} />}
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-3 text-neon/70">
                  Videollamada · Sin presión
                </span>
                <h2 className="font-display font-black uppercase text-light leading-none mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  Café virtual<br />
                  <span className="text-neon">en tu horario</span>
                </h2>
                <p className="text-white/50 font-sans text-base leading-relaxed max-w-sm">
                  Elige el día y la hora que mejor te venga. Una charla de 15 minutos puede ahorrarte semanas de dudas y definir el rumbo de tu proyecto.
                </p>
              </div>

              {/* Mini schedule chips */}
              <div className="relative z-10">
                <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-3">Disponibilidad típica</p>
                <div className="flex flex-wrap gap-2">
                  {['9:00am', '10:30am', '12:00pm', '2:00pm', '4:00pm'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full font-mono text-xs"
                      style={{
                        background: 'rgba(200,255,0,0.08)',
                        border: '1px solid rgba(200,255,0,0.2)',
                        color: 'rgba(200,255,0,0.7)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full font-mono text-xs text-white/25"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    +más
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-auto relative z-10">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-neon/50" />
                  <span className="text-white/30 font-mono text-xs">calendly.com/juandgg11o</span>
                </div>
                <span
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-sm uppercase tracking-widest bg-neon text-ink"
                  style={{
                    transform: calHovered ? 'scale(1.06)' : 'scale(1)',
                    boxShadow: calHovered ? '0 0 24px rgba(200,255,0,0.55)' : 'none',
                    transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  Ver horarios
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                    style={{
                      transform: calHovered ? 'translate(3px,-3px)' : 'translate(0,0)',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </span>
              </div>
            </a>

          </div>

          {/* Bottom strip */}
          <div className="mt-16 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 font-mono text-xs uppercase tracking-[0.2em]">
              Sin spam · Sin costos ocultos · 100% gratis consultarnos
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-white/30 hover:text-neon font-mono text-xs uppercase tracking-widest transition-colors duration-300"
            >
              Leer las FAQ
              <ArrowRight size={12} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
