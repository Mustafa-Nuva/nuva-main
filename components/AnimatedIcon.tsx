"use client";

import { useState, useRef, useEffect } from "react";

interface AnimatedIconProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedIcon({ children, delay = 0, className = "" }: AnimatedIconProps) {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={iconRef}
      className={`transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      } ${className}`}
      style={{
        animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
