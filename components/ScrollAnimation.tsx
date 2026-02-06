"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const total = windowHeight + elementHeight;
      const current = windowHeight - rect.top;
      
      const progress = Math.max(0, Math.min(1, current / total));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transformations based on scroll (Clean, no rotation)
  const scale = 0.8 + (scrollProgress * 0.4); // Scale from 0.8 to 1.2
  const opacity = Math.min(1, scrollProgress * 1.5); // Smooth fade in
  const translateY = (1 - scrollProgress) * 120; // Smooth upward movement
  const logoOpacity = 0.3 + (scrollProgress * 2); // Logo starts visible, becomes fully opaque quickly

  return (
    <div ref={containerRef} className="scroll-animation-container">
      <div className="scroll-animation-content">
        {/* Medical AI Brain - Professional Animation */}
        <div 
          className="medical-brain-container"
          style={{
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity: opacity
          }}
        >
          {/* Animated particles/cells */}
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
          <div className="particle particle-9"></div>
          <div className="particle particle-10"></div>
          <div className="particle particle-11"></div>
          <div className="particle particle-12"></div>
          
          {/* NUVA Logo */}
          <div className="brain-image-wrapper" style={{ opacity: logoOpacity }}>
            <Image
              src="/images/alone-logo-d.png"
              alt="NUVA Logo"
              width={400}
              height={400}
              className="brain-image"
              priority
            />
          </div>
        </div>

        {/* Animated text that moves with scroll */}
        <div 
          className="scroll-text"
          style={{
            transform: `translateY(${translateY * 0.3}px)`,
            opacity: Math.min(1, scrollProgress * 1.8)
          }}
        >
          <h3>Transforming Healthcare with AI</h3>
          <p>Advanced medical intelligence for better health outcomes</p>
        </div>
      </div>
    </div>
  );
}
