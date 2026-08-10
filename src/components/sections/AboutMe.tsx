'use client';

import React, { useRef, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import Image from 'next/image';
import AnimateDescription from '@/components/ui/AnimateDescription';
import AnimatedHeading from '@/components/ui/AnimateHeading';

const About = () => {
  const headingText = 'Sobre Mí';
  const descriptionText =
    'Soy un ingeniero de software impulsado por la pasión de construir experiencias digitales limpias, intuitivas y confiables.';
  const bio =
    'Construyo aplicaciones web que combinan interfaces frontend cuidadosamente diseñadas con sistemas backend robustos. Para mí, el software es más que código en una pantalla; se trata de hacer que la tecnología se sienta fluida y genuinamente útil para las personas.';

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const glareRef   = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number | null>(null);

  // 3D tilt + glare on mouse move
  useEffect(() => {
    const card  = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const STRENGTH = 12; // max degrees of tilt
    const GLARE_SIZE = 300;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let glareX = 50, glareY = 50;
    let targetGlareX = 50, targetGlareY = 50;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;  // 0..1
      const py = (e.clientY - rect.top)  / rect.height; // 0..1

      targetX = (py - 0.5) * -STRENGTH * 2;
      targetY = (px - 0.5) *  STRENGTH * 2;
      targetGlareX = px * 100;
      targetGlareY = py * 100;

      gsap.to(glare, { opacity: 0.18, duration: 0.3 });
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      targetGlareX = 50;
      targetGlareY = 50;
      gsap.to(card,  { rotateX: 0, rotateY: 0, scale: 1, duration: 0.9, ease: 'elastic.out(1,0.5)' });
      gsap.to(glare, { opacity: 0, duration: 0.5 });
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      glareX   += (targetGlareX - glareX) * 0.08;
      glareY   += (targetGlareY - glareY) * 0.08;

      card.style.transform = `perspective(900px) rotateX(${currentX}deg) rotateY(${currentY}deg) scale3d(1.02,1.02,1.02)`;
      glare.style.background = `radial-gradient(${GLARE_SIZE}px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22), transparent)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        '.about-image-wrapper',
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power4.out', force3D: true,
          scrollTrigger: { trigger: '.about-image-wrapper', start: 'top 85%', toggleActions: 'play none none reverse' },
        },
      );
      gsap.fromTo(
        '.about-bio-para',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-bio-para', start: 'top 85%', toggleActions: 'play none none reverse' },
        },
      );
      gsap.fromTo(
        '.about-label',
        { opacity: 0, letterSpacing: '0.5em' },
        {
          opacity: 1, letterSpacing: '0.3em', duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-label', start: 'top 88%', toggleActions: 'play none none reverse' },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div className="bg-cream">
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen bg-ink text-light py-24 md:py-32 rounded-t-4xl overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 md:mb-20">
            <AnimatedHeading
              text={headingText}
              className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-4"
            />
            <AnimateDescription
              text={descriptionText}
              className="text-xl sm:text-2xl text-gray-soft font-sans"
            />
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-12 pb-20 items-center">

            {/* ── IMAGE CARD with 3D tilt ── */}
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div
                ref={cardRef}
                className="about-image-wrapper relative group w-full max-w-[350px] md:max-w-[380px] h-[360px] md:h-[480px] bg-elevated-dark rounded-2xl overflow-hidden border border-border-subtler shadow-2xl [will-change:transform,opacity]"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                  transition: 'box-shadow 0.4s ease',
                }}
                onMouseEnter={() => {
                  if (cardRef.current)
                    cardRef.current.style.boxShadow = '0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(4,120,87,0.15)';
                }}
                onMouseLeave={() => {
                  if (cardRef.current)
                    cardRef.current.style.boxShadow = '';
                }}
              >
                {/* Photo */}
                <Image
                  src="/back.jpg"
                  alt="Mi escritorio de trabajo"
                  fill
                  sizes="(max-width: 768px) 420px, 460px"
                  className="object-cover"
                  priority
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" />

                {/* Glare overlay */}
                <div
                  ref={glareRef}
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{ opacity: 0, mixBlendMode: 'overlay' }}
                />

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon opacity-80" />
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-neon opacity-40" />

                {/* Bottom tag */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-cream/60">
                    Juan Oberto · Desarrollador Web
                  </span>
                </div>
              </div>
            </div>

            {/* ── TEXT ── */}
            <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-center space-y-8">
              <span className="about-label text-lg sm:text-xl text-neon uppercase tracking-[0.3em] font-medium text-center md:text-left inline-block">
                (SOBRE MÍ)
              </span>
              <p className="about-bio-para text-light/85 text-xl sm:text-2xl md:text-2xl leading-relaxed font-sans">
                {bio}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
