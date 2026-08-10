import React from 'react';
import About from './AboutMe';
import Services from './Services';
import Pricing from './Pricing';
import TechStack from './TechStack';
import SectionDivider from '@/components/ui/SectionDivider';

interface ReuniteBlackProps {
  techStackRef: React.RefObject<HTMLDivElement | null> | any;
}

const ReuniteBlack: React.FC<ReuniteBlackProps> = ({ techStackRef }) => {
  return (
    <>
      <About />
      <SectionDivider variant="number" label="Lo que hago" index={1} />
      <Services />
      <SectionDivider variant="number" label="Planes" index={2} />
      <Pricing />
      <SectionDivider variant="number" label="Mi Stack" index={3} />

      <div ref={techStackRef}>
        <TechStack />
      </div>
    </>
  );
};

export default ReuniteBlack;
