import { ReactNode, memo } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

export default memo(SectionWrapper);
