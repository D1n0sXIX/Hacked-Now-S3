// components/AnimatedSection.jsx
"use client"
import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ 
  children, 
  backgroundColor = 'transparent',
  className = '' 
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Se activa cuando el 30% está visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`snap-start snap-always min-h-screen flex items-center justify-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ 
        backgroundColor,
        transition: 'background-color 0.8s ease, opacity 1s ease, transform 1s ease'
      }}
    >
      {children}
    </section>
  );
}
