"use client";

import { useEffect } from "react";
import LogoIntro from "@/components/LogoIntro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MedicalScrollAnimation from "@/components/MedicalScrollAnimation";
import WhatIsNuva from "@/components/WhatIsNuva";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import About from "@/components/About";
import AboutTheTeam from "@/components/AboutTheTeam";
import Safety from "@/components/Safety";
import Privacy from "@/components/Privacy";
import LanguageAccessibility from "@/components/LanguageAccessibility";
import FutureCapabilities from "@/components/FutureCapabilities";
import AccountPersonalization from "@/components/AccountPersonalization";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import InteractiveFeatures from "@/components/InteractiveFeature";
import TextReveal from "@/components/TextReveal";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.getAttribute("data-animate-delay");
            if (delay) {
              setTimeout(() => {
                target.classList.add("is-visible");
              }, Number(delay));
            } else {
              target.classList.add("is-visible");
            }
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LogoIntro />
      <div className="page-shell">
        <Header />
        <main id="top" className="pt-20">
          <Hero />
          <MedicalScrollAnimation />
          <StatsSection />
          <WhatIsNuva />
          <InteractiveFeatures />
          <UseCases />
          <Features />
          <About />
          <AboutTheTeam />
          <Safety />
          <Privacy />
          <LanguageAccessibility />
          <FutureCapabilities />
          <AccountPersonalization />
          <HowItWorks />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
