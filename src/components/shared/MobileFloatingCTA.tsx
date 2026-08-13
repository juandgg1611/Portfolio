'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Only show on the home page
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      // Show after scrolling past 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  if (!isHome) return null;

  return (
    <div
      className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[9000] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <Link
        href="/#contact"
        className="flex items-center gap-3 px-7 py-4 rounded-full bg-ink text-neon font-mono font-bold text-sm uppercase tracking-widest shadow-[0_4px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(200,255,0,0.15)] border border-neon/20 active:scale-95 transition-transform duration-150"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          const section = document.getElementById('contact');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
        </span>
        Hablemos →
      </Link>
    </div>
  );
}
