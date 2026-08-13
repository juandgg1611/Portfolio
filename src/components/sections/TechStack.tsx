'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import AnimateDescription from '@/components/ui/AnimateDescription';

const STACK_SECTIONS = [
  {
    id: 'languages',
    title: 'LENGUAJES',
    technologies: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    id: 'frameworks',
    title: 'FRAMEWORKS',
    technologies: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Shadcn/UI', icon: 'https://ui.shadcn.com/favicon.ico' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'React Router', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Expo Go', icon: 'https://cdn.worldvectorlogo.com/logos/expo-1.svg' },
    ],
  },
  {
    id: 'libraries',
    title: 'LIBRERÍAS',
    technologies: [
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
      { name: 'Scikit-Learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
    ],
  },
  {
    id: 'tools',
    title: 'HERRAMIENTAS',
    technologies: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
    ],
  },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const headingText = 'Mi Stack Tecnológico';
  const descriptionText =
    'Tecnologías que uso para diseñar, construir y desplegar aplicaciones web completas.';

  useGSAP(
    () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const items = section.querySelectorAll('.tech-item');
        const title = titleRefs.current[index];

        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 70%', scrub: true },
          },
        );
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, stagger: 0.2, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 70%', scrub: true },
          },
        );
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (!img) return;
    gsap.to(img, { rotation: 360, scale: 1.1, duration: 0.6, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (!img) return;
    gsap.to(img, { rotation: 0, scale: 1, duration: 0.5, ease: 'power2.inOut' });
  };

  return (
    <section
      ref={containerRef}
      id="TechStack"
      className="bg-ink text-light py-24 md:py-32 rounded-b-4xl overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-14 hidden md:block">
          <AnimatedHeading
            text={headingText}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
          <AnimateDescription
            text={descriptionText}
            className="text-lg sm:text-xl md:text-2xl text-gray-soft font-sans leading-relaxed"
          />
        </div>

        <div className="mb-10 md:hidden">
          <AnimatedHeading
            text="Mi Stack"
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none uppercase mb-4"
          />
        </div>

        <div className="space-y-24">
          {STACK_SECTIONS.map((stack, index) => (
            <div
              key={stack.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12"
            >
              <h3
                ref={(el) => { titleRefs.current[index] = el; }}
                className="lg:w-1/3 text-4xl sm:text-5xl md:text-6xl font-bold text-neon tracking-tight font-display uppercase"
              >
                {stack.title}
              </h3>

              <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:-mt-2 xl:-mt-3">
                {stack.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-item flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-elevated-dark/60 overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center relative flex-shrink-0">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`w-full h-full object-contain ${
                          ['GitHub', 'Vercel'].includes(tech.name) ? 'invert opacity-90' : ''
                        } ${
                          ['Expo Go', 'Power BI', 'Shadcn/UI'].includes(tech.name) ? 'bg-white p-1.5 rounded-lg' : ''
                        }`}
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-mono font-bold text-cream min-w-0 flex-1 tracking-tight">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
