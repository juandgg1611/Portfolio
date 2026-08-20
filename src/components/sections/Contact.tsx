'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { MessageCircle, Calendar, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingText = 'Contacto';
  const descriptionText =
    '¿Tienes un proyecto en mente o simplemente quieres saludar? Escríbeme, estaré encantado de hablar contigo.';

  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setErrors({});
            setSubmitStatus(null);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateMessage = (text: string) => {
    const trimmed = text.trim();
    if (trimmed.length < 30) return false;
    const words = trimmed.split(/\s+/).filter(Boolean);
    return words.length >= 5;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (!validateMessage(formData.message))
      newErrors.message = 'Please enter a meaningful message (at least 30 characters, 5 words)';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      const data = await response.json();
      if (response.ok && data.success) {
        setFormData({ name: '', email: '', message: '' });
        router.push('/thank-you');
      } else {
        setSubmitStatus('error');
        if (data?.error) {
          setErrors({ server: data.error });
        }
      }
    } catch {
      clearTimeout(timeoutId);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting;

  return (
    <section ref={sectionRef} id="contact" className="bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="mb-10 md:mb-14">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-6"
          />
        </div>
        <div className="rounded-3xl bg-ink text-light p-8 sm:p-12 md:p-16 lg:p-20 border border-elevated-dark">
          <div className="max-w-2xl mb-12">
            <AnimateDescription
              text={descriptionText}
              className="text-base sm:text-lg text-gray-soft font-sans leading-relaxed"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl space-y-6 p-6 sm:p-8 rounded-2xl mx-auto bg-surface border border-white/[0.04]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-sm sm:text-base text-muted">
                Tu Nombre <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-xl bg-surface-mid text-cream placeholder-[#6a6a68] focus:outline-none transition-all duration-300 border-white/[0.08] focus:border-neon focus:ring-1 focus:ring-neon/30 ${
                  errors.name ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isDisabled}
              />
              {errors.name && <p className="text-red-400 text-xs sm:text-sm">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-sm sm:text-base text-muted">
                Tu Email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="tu@email.com"
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-xl bg-surface-mid text-cream placeholder-[#6a6a68] focus:outline-none transition-all duration-300 border-white/[0.08] focus:border-neon focus:ring-1 focus:ring-neon/30 ${
                  errors.email ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isDisabled}
              />
              {errors.email && <p className="text-red-400 text-xs sm:text-sm">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-sm sm:text-base text-muted">
                Mensaje <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                className={`w-full px-4 py-3 text-sm sm:text-base border rounded-xl bg-surface-mid text-cream placeholder-[#6a6a68] resize-none focus:outline-none transition-all duration-300 border-white/[0.08] focus:border-neon focus:ring-1 focus:ring-neon/30 ${
                  errors.message ? 'border-red-500 focus:border-red-500' : ''
                }`}
                disabled={isDisabled}
              />
              {errors.message && <p className="text-red-400 text-xs sm:text-sm">{errors.message}</p>}
              <p className="text-xs text-warm">{formData.message.length} / 30 caracteres mínimo</p>
            </div>

            <div role="status" aria-live="polite">
              {errors.server && (
                <div className="p-4 bg-red-900/20 border border-red-600/40 rounded-xl mb-4">
                  <p className="text-red-400 text-sm">{errors.server}</p>
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-600/40 rounded-xl mb-4">
                  <p className="text-green-400 text-sm">Mensaje enviado con éxito.</p>
                </div>
              )}

              {submitStatus === 'error' && !errors.server && (
                <div className="p-4 bg-red-900/20 border border-red-600/40 rounded-xl mb-4">
                  <p className="text-red-400 text-sm">Something went wrong. Please try again later.</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className="inline-block border-0 bg-transparent p-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatedButton
                topText={isDisabled ? 'ESPERA...' : 'ENVIAR MENSAJE'}
                bottomText={isDisabled ? 'PROCESANDO' : 'CONTINUAR →'}
                variant="primary"
                as="span"
                className={isDisabled ? 'pointer-events-none' : ''}
              />
            </button>
          </form>


          {/* ── Dual CTA Cards ── */}
          <div className="mt-16 pt-12 border-t border-elevated-dark">
            <div className="mb-8">
              <p className="text-neon font-mono text-xs uppercase tracking-[0.25em] mb-2">¿Prefieres algo más directo?</p>
              <p className="text-white/50 font-sans text-sm leading-relaxed max-w-md">
                Si no quieres llenar un formulario, aquí van las dos formas más rápidas de hablar conmigo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <CTACard
                type="whatsapp"
                href={`https://wa.me/584246801808?text=${encodeURIComponent('¡Hola Juan! 👋 Vi tu portafolio y me gustaría hablar sobre un proyecto. ¿Tienes un momento?')}`}
                icon={<MessageCircle size={22} strokeWidth={1.8} />}
                badge="Disponible"
                badgePulse
                label="Acción inmediata"
                title="Escribir por WhatsApp"
                description="Un mensaje y empezamos. Sin burocracia, sin esperas. Respondo en menos de 24 horas hábiles."
                cta="Abrir chat"
                meta="wa.me/juandgg"
                accentColor="#25D366"
                glowColor="37,211,102"
              />
              <CTACard
                type="calendly"
                href="https://calendly.com/juandgg11o"
                icon={<Calendar size={22} strokeWidth={1.8} />}
                badge="15 – 30 min"
                badgePulse={false}
                label="Sin presión"
                title="Agendar un café virtual"
                description="Elige el día y la hora. Una conversación corta puede ser el punto de partida de algo grande."
                cta="Ver disponibilidad"
                meta="Lun – Vie · 9am – 6pm VET"
                accentColor="#C8FF00"
                glowColor="200,255,0"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="email-copy-toast"
        role="status"
        aria-live="polite"
        className="fixed bottom-8 right-8 z-[9998] pointer-events-none"
        style={{
          background: '#C8FF00',
          color: '#0d0d0c',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.75rem 1.25rem',
          borderRadius: '9999px',
          opacity: 0,
          transform: 'translateY(8px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        ✓ Copiado al portapapeles
      </div>
    </section>
  );
};

/* ── Reusable interactive card ── */
interface CTACardProps {
  type: 'whatsapp' | 'calendly';
  href: string;
  icon: React.ReactNode;
  badge: string;
  badgePulse: boolean;
  label: string;
  title: string;
  description: string;
  cta: string;
  meta: string;
  accentColor: string;
  glowColor: string;
}

const CTACard: React.FC<CTACardProps> = ({
  href, icon, badge, badgePulse, label, title, description, cta, meta, accentColor, glowColor,
}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1200);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="relative flex flex-col gap-5 p-6 md:p-8 rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        background: hovered ? `rgba(${glowColor},0.06)` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `rgba(${glowColor},0.5)` : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 55px -10px rgba(${glowColor},0.35)` : '0 2px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* Ambient corner glow */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${glowColor},0.2) 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />

      {/* Top row: icon + badge */}
      <div className="flex items-center justify-between gap-3 relative z-10">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `rgba(${glowColor},0.15)`,
            border: `1px solid rgba(${glowColor},0.3)`,
            color: accentColor,
            transform: hovered ? 'scale(1.12) rotate(4deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {clicked
            ? <CheckCircle size={20} strokeWidth={2} style={{ color: accentColor }} />
            : icon}
        </div>

        <div className="flex items-center gap-1.5">
          {badgePulse && (
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: accentColor }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: accentColor }} />
            </span>
          )}
          {!badgePulse && <Clock size={12} style={{ color: accentColor }} />}
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: accentColor }}>
            {badge}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-1.5 relative z-10">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.22em]"
          style={{ color: `rgba(${glowColor},0.7)` }}
        >
          {label}
        </span>
        <h3 className="text-lg md:text-xl font-black text-light uppercase leading-tight">
          {title}
        </h3>
        <p className="text-white/50 font-sans text-sm leading-relaxed mt-0.5">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 mt-auto relative z-10">
        <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest truncate">
          {meta}
        </span>
        <span
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono font-bold text-xs uppercase tracking-widest"
          style={{
            background: accentColor,
            color: '#080807',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            boxShadow: hovered ? `0 0 18px rgba(${glowColor},0.6)` : 'none',
            transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {cta}
          <ArrowRight
            size={12}
            strokeWidth={2.5}
            style={{
              transform: hovered ? 'translateX(3px)' : 'translateX(0)',
              transition: 'transform 0.3s ease',
            }}
          />
        </span>
      </div>
    </a>
  );
};

export default Contact;

