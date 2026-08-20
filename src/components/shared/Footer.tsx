'use client';

import React, { useState, useEffect, useRef } from 'react';
import AnimatedLink from '@/components/ui/AnimateLink';
import { FaArrowUp } from 'react-icons/fa';
import { useHandleLinkClick } from '@/lib/navigation';
import { useLenis } from '@/components/providers/SmoothScrollProvider';
import Lenis from '@studio-freight/lenis';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const lenisRef = useLenis() as React.RefObject<Lenis | null> | null;
  const lenis = lenisRef?.current;

  useEffect(() => {
    setIsMounted(true);
    let interval: NodeJS.Timeout | number | undefined;

    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Caracas',
      });
      setCurrentTime(timeString);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          updateTime();
          interval = setInterval(updateTime, 30000);
        } else {
          if (interval) { clearInterval(interval); interval = undefined; }
        }
      },
      { threshold: 0 },
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleLinkClick = useHandleLinkClick();
  const links = [
    { name: 'Sobre mí', href: '/#about' },
    { name: 'Servicios', href: '/#services' },
    { name: 'Proyectos', href: '/#projects' },
    { name: 'Contacto', href: '/#contact' },
    { name: 'FAQ', href: '/faq', external: true },
    { name: 'Términos', href: '/terminos', external: true },
    { name: 'Privacidad', href: '/privacidad', external: true },
  ];

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative z-30 bg-cream px-6 sm:px-8 md:px-12 pt-20 pb-8 md:pt-32 md:pb-12 border-t border-warm/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-20 md:mb-32">
          
          {/* Brand & Intro */}
          <div className="flex-1 max-w-sm">
            <h2 className="text-warm font-display text-4xl md:text-5xl font-black uppercase leading-none tracking-tight mb-6">
              Juan Oberto
            </h2>
            <p className="text-warm/70 font-sans text-sm md:text-base leading-relaxed mb-8">
              Diseño y desarrollo web de alto rendimiento. Construyendo experiencias digitales memorables con un enfoque minimalista y premium.
            </p>
            <div className="inline-flex flex-col">
              <span className="text-warm/50 font-mono text-xs uppercase tracking-widest font-bold mb-3">
                Hora Local
              </span>
              <p className="text-warm text-sm font-sans font-medium bg-warm/5 inline-flex items-center px-4 py-2.5 rounded-xl border border-warm/10">
                <span className="w-2 h-2 rounded-full bg-forest mr-3 animate-pulse"></span>
                {isMounted && currentTime ? `${currentTime} VE` : 'Cargando...'}
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 w-full grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-warm/40 font-mono text-xs uppercase tracking-[0.2em] font-bold mb-6">
                Explorar
              </h3>
              <ul className="flex flex-col gap-4 text-warm text-sm sm:text-base font-sans font-semibold tracking-wide">
                {links.map((link) => (
                  <AnimatedLink key={link.href}>
                    {link.external ? (
                      <a href={link.href} className="hover:text-forest transition-colors flex items-center gap-2 group">
                        {link.name}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest">→</span>
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-forest transition-colors flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                      >
                        {link.name}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest">→</span>
                      </a>
                    )}
                  </AnimatedLink>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-warm/40 font-mono text-xs uppercase tracking-[0.2em] font-bold mb-6">
                Conectar
              </h3>
              <ul className="flex flex-col gap-4 text-warm text-sm sm:text-base font-sans font-semibold tracking-wide">
                <AnimatedLink>
                  <a href="https://www.linkedin.com/in/juan-oberto-7124bb30b/" target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors flex items-center gap-2 group">
                    LinkedIn
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest">↗</span>
                  </a>
                </AnimatedLink>
                <AnimatedLink>
                  <a href="https://www.instagram.com/juandv.16?igsh=ZWsxZDA3Z3Vyc2dr&igsi=ZWsxZDA3Z3Vyc2dr" target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors flex items-center gap-2 group">
                    Instagram
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest">↗</span>
                  </a>
                </AnimatedLink>
                <AnimatedLink>
                  <a href="https://github.com/juandgg1611" target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors flex items-center gap-2 group">
                    GitHub
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest">↗</span>
                  </a>
                </AnimatedLink>
                <AnimatedLink>
                  <a href="https://github.com/juandgg1611/Portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors flex items-center gap-2 group">
                    Código Fuente
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-forest">↗</span>
                  </a>
                </AnimatedLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-warm/50 font-sans text-xs sm:text-sm uppercase tracking-widest font-medium text-center md:text-left">
            © {new Date().getFullYear()} Juan Oberto. Todos los derechos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-warm/5 border border-warm/10 text-warm hover:text-forest hover:border-forest/30 hover:bg-forest/5 transition-all duration-300 focus:outline-none"
            aria-label="Volver arriba"
          >
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Volver arriba</span>
            <FaArrowUp className="w-3 h-3 transform group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
