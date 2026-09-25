'use client';

import { useEffect, useState, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // Velocidade do movimento (ex: -0.05 a 0.1)
  className?: string;
}

export default function ParallaxElement({ children, speed = 0.05, className = '' }: ParallaxProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}