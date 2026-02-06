"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <header className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-navbar-scrolled' : 'glass-navbar-transparent'}`} style={isScrolled ? {
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(60px) saturate(200%)',
        WebkitBackdropFilter: 'blur(60px) saturate(200%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: 'none'
      } : {}}>
      <div className="container header-inner">
        <a href="#top" className={`logo flex items-center space-x-3 transition-all duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white/80'}`} aria-label="NUVA home" onClick={handleLogoClick}>
          <span className={`logo-mark ${isAnimating ? 'logo-click-animate' : ''}`}>
            <Image 
              src="/images/alone-logo-d.png" 
              alt="NUVA Logo" 
              width={40} 
              height={40}
              priority
              className="logo-image"
            />
          </span>
          <span className="logo-text text-xl font-bold">NUVA</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#features" className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>Features</a>
          <a href="#how-it-works" className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>How it works</a>
          <a href="#about" className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>About</a>
          <a href="#contact" className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}>Contact</a>
        </nav>
        <a href="#cta" className={`btn btn-outline header-cta backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700' : 'bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50'}`}>Get early access</a>
      </div>
    </header>
  );
}
