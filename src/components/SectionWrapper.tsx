"use client";

import { ReactNode, useRef, useEffect, useState, memo } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep visible by default for instant rendering and SEO
    setIsVisible(true);
  }, []);

  return (
    <section id={id} className={`py-16 sm:py-24 relative overflow-hidden ${className}`}>
      <div
        ref={ref}
        className="transition-opacity duration-500 ease-out opacity-100"
      >
        {children}
      </div>
    </section>
  );
}

export default memo(SectionWrapper);
