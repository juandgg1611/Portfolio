'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import { useTransitionState } from 'next-transition-router';
import dynamic from 'next/dynamic';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { safeSessionStorage } from '@/utils/storage';

const HeroChartBackground = dynamic(() => import('@/components/canvas/HeroChartBackground'), {
  ssr: false,
});

const RoleTicker = () => {
  const roles = [
    'Desarrollador Full Stack',
    'Ingeniero React & Next.js',
    'Especialista UI/UX Premium',
    'Disponible para Proyectos',
  ];
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      const wrapper = containerRef.current;
      if (!wrapper) return;
      const currentWord = wrapper.querySelector('.ticker-word-current');
      const nextWord = wrapper.querySelector('.ticker-word-next');
      if (currentWord && nextWord) {
        gsap.set(nextWord, { yPercent: 100 });
        gsap.to(currentWord, {
          yPercent: -100,
          duration: 0.4,
          ease: 'power3.out',
        });
        gsap.to(nextWord, {
          yPercent: 0,
          duration: 0.4,
          ease: 'power3.out',
          onComplete: () => {
            setCurrentIdx((prev) => (prev + 1) % roles.length);
            gsap.set(currentWord, { yPercent: 0 });
          },
        });
      }
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length, reduced]);

  const nextIdx = (currentIdx + 1) % roles.length;
  return (
    <div className="relative h-8 overflow-hidden mb-8 flex justify-center items-center select-none">
      <div
        ref={containerRef}
        className="relative h-8 w-96 text-center font-mono text-base uppercase tracking-widest text-forest"
      >
        <div className="ticker-word-current absolute inset-0 flex items-center justify-center">
          {roles[currentIdx]}
        </div>
        <div className="ticker-word-next absolute inset-0 flex items-center justify-center translate-y-full">
          {roles[nextIdx]}
        </div>
      </div>
    </div>
  );
};

const HomeBanner = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const availRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerContentRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [preloaderComplete, setPreloaderComplete] = useState<boolean>(false);
  const { isReady } = useTransitionState();
  const reduced = useReducedMotion();

  const splitText = (text: string) =>
    text.split('').map((char, idx) => (
      <span
        key={idx}
        className="letter-wrapper inline-block relative overflow-hidden"
        style={{ display: 'inline-block', ['--idx' as any]: idx }}
      >
        <span className="letter-original block">{char === ' ' ? '\u00A0' : char}</span>
        <span aria-hidden="true" className="letter-duplicate block absolute top-full left-0 w-full select-none">
          {char === ' ' ? '\u00A0' : char}
        </span>
      </span>
    ));

  useEffect(() => {
    if (reduced) {
      gsap.set(sectionRef.current, { opacity: 1 });
      return;
    }
    if (sectionRef.current) gsap.set(sectionRef.current, { opacity: 0 });
    if (nameRef.current) {
      gsap.set(nameRef.current.querySelectorAll('.letter-wrapper'), { y: '100%', opacity: 0 });
      gsap.set(nameRef.current.querySelectorAll('.letter-original, .letter-duplicate'), { y: '0%' });
    }
    [availRef, paragraphRef, tickerRef, buttonsRef, statsRef].forEach((ref) => {
      if (ref.current) gsap.set(ref.current, { y: 40, opacity: 0 });
    });
  }, [reduced]);

  useEffect(() => {
    const hasShownPreloader = safeSessionStorage.getItem('preloader-shown');
    if (hasShownPreloader) {
      setPreloaderComplete(true);
    } else {
      const handler = () => setPreloaderComplete(true);
      window.addEventListener('preloaderComplete', handler);
      return () => window.removeEventListener('preloaderComplete', handler);
    }
  }, []);

  useEffect(() => {
    if (!preloaderComplete || !isReady) return;
    if (reduced) {
      gsap.set(sectionRef.current, { opacity: 1 });
      return;
    }

    const timer = setTimeout(() => {
      gsap.to(sectionRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      if (nameRef.current) {
        gsap.set(nameRef.current.querySelectorAll('.letter-original, .letter-duplicate'), { y: '0%' });
      }
      const letters = nameRef.current?.querySelectorAll('.letter-wrapper');
      if (letters?.length) {
        gsap.to(letters, {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          delay: 0.3,
        });
      }
      const tl = gsap.timeline({ delay: 1.1, ease: 'power3.out' });
      [availRef, paragraphRef, tickerRef, buttonsRef, statsRef].forEach((ref) => {
        if (ref.current) {
          tl.to(ref.current, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4');
        }
      });
      // Count-up animation for stats
      setTimeout(() => {
        document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
          const target = parseInt(el.dataset.count ?? '0');
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(ease * target).toString();
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }, 1800);
    }, 100);
    return () => clearTimeout(timer);
  }, [preloaderComplete, isReady, reduced]);

  const handleMouseEnter = () => {
    if (reduced || !nameRef.current) return;
    const isDesktop = window.innerWidth >= 768;
    const selector = isDesktop ? '[data-hero-name="desktop"] .letter-wrapper' : '[data-hero-name="mobile"] .letter-wrapper';
    const letters = nameRef.current.querySelectorAll(selector);
    letters.forEach((wrapper, idx) => {
      const original = wrapper.querySelector('.letter-original');
      const duplicate = wrapper.querySelector('.letter-duplicate');
      if (original && duplicate) {
        gsap.to(original, {
          y: '-100%',
          duration: 0.45,
          ease: 'power2.out',
          delay: idx * 0.03,
          overwrite: 'auto',
        });
        gsap.to(duplicate, {
          y: '-100%',
          duration: 0.45,
          ease: 'power2.out',
          delay: idx * 0.03,
          overwrite: 'auto',
        });
      }
    });
  };

  const handleMouseLeave = () => {
    if (reduced || !nameRef.current) return;
    const isDesktop = window.innerWidth >= 768;
    const selector = isDesktop ? '[data-hero-name="desktop"] .letter-wrapper' : '[data-hero-name="mobile"] .letter-wrapper';
    const letters = nameRef.current.querySelectorAll(selector);
    letters.forEach((wrapper, idx) => {
      const original = wrapper.querySelector('.letter-original');
      const duplicate = wrapper.querySelector('.letter-duplicate');
      if (original && duplicate) {
        gsap.to(original, {
          y: '0%',
          duration: 0.45,
          ease: 'power2.out',
          delay: idx * 0.03,
          overwrite: 'auto',
        });
        gsap.to(duplicate, {
          y: '0%',
          duration: 0.45,
          ease: 'power2.out',
          delay: idx * 0.03,
          overwrite: 'auto',
        });
      }
    });
  };

  // Mouse spotlight
  useEffect(() => {
    if (reduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      spotlightRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
      spotlightRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
      gsap.to(spotlightRef.current, { opacity: 1, duration: 0.5, overwrite: 'auto' });
    };
    const handleMouseLeave = () => {
      gsap.to(spotlightRef.current, { opacity: 0, duration: 0.8, overwrite: 'auto' });
    };
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [reduced]);

  useGSAP(
    () => {
      if (reduced || !sectionRef.current || !innerContentRef.current) return;
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to(innerContentRef.current, { y: '-15vh', ease: 'none' }),
      });
      return () => trigger.kill();
    },
    { scope: sectionRef, dependencies: [reduced] },
  );

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(section, { offset: 0, duration: 1.2 });
    } else {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 sm:px-8 md:px-12 lg:px-16 pt-28 pb-8 md:pt-20 md:pb-0 bg-cream flex items-center relative overflow-hidden"
      style={{ opacity: reduced ? 1 : 0 }}
    >
      <HeroChartBackground />

      {!reduced && (
        <div
          ref={spotlightRef}
          className="absolute inset-0 pointer-events-none z-[1] opacity-0"
          style={{
            background: 'radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), rgba(4, 120, 87, 0.08), transparent 85%)',
            willChange: 'opacity',
          }}
        />
      )}

      <div ref={innerContentRef} className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          <h1
            ref={nameRef}
            aria-label="Juan Oberto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="name-heading font-display text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[11rem] whitespace-nowrap select-none font-bold leading-none uppercase cursor-pointer overflow-hidden mb-6"
          >
            <span aria-hidden="true" data-hero-name="mobile" className="block md:hidden">
              <span className="block">{splitText('Juan')}</span>
              <span className="block">{splitText('Oberto')}</span>
            </span>
            <span aria-hidden="true" data-hero-name="desktop" className="hidden md:block">
              {splitText('Juan Oberto')}
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center py-1 md:py-3 px-4 sm:px-6">
          <div className="max-w-xl text-center">

            {/* Availability badge */}
            <div ref={availRef} className="flex justify-center mb-7">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-forest/30 bg-forest/5 text-forest text-sm font-mono font-semibold uppercase tracking-widest">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-forest"></span>
                </span>
                Disponible para proyectos
              </span>
            </div>

            <p
              ref={paragraphRef}
              className="text-warm font-sans text-lg sm:text-xl md:text-2xl leading-relaxed mb-9 md:mb-12"
            >
              Creo sitios web ultrarrápidos, interactivos y orientados a resultados para negocios locales. Tu presencia digital merece ser <span className="font-semibold text-forest">extraordinaria.</span>
            </p>

            <div ref={tickerRef}>
              <RoleTicker />
            </div>

            <div ref={buttonsRef} className="flex flex-row justify-center items-center gap-2 sm:gap-4 flex-wrap max-w-full px-2">
              <AnimatedButton
                onClick={() => handleScroll('projects')}
                topText="PROYECTOS"
                bottomText="VER TRABAJO →"
                variant="dark"
              />
              <AnimatedButton
                onClick={() => handleScroll('contact')}
                topText="CONTACTO"
                bottomText="HABLEMOS →"
                variant="light"
              />
              <AnimatedButton
                onClick={() => window.open('/CV_Juan_Oberto.pdf', '_blank')}
                topText="MI CV"
                bottomText="DESCARGAR →"
                variant="outline"
              />
            </div>

            {/* Results strip — the real WOW for business owners */}
            <div ref={statsRef} className="mt-12 pt-8 border-t border-warm/15">
              <div className="grid grid-cols-3 gap-6 sm:gap-10">
                {[
                  { count: 20, suffix: '+', label: 'Proyectos entregados' },
                  { count: 100, suffix: '%', label: 'Clientes satisfechos' },
                  { count: 5, suffix: '★', label: 'Valoración promedio' },
                ].map(({ count, suffix, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-ink leading-none">
                      <span data-count={count}>0</span>{suffix}
                    </div>
                    <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-warm/60 mt-2 leading-tight">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
