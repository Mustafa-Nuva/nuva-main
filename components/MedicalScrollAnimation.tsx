"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MedicalScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slice1Ref = useRef<HTMLDivElement>(null);
  const slice2Ref = useRef<HTMLDivElement>(null);
  const slice3Ref = useRef<HTMLDivElement>(null);
  const slice4Ref = useRef<HTMLDivElement>(null);
  const slice5Ref = useRef<HTMLDivElement>(null);
  const slice6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create infinite timeline for sequential pulse and reassembly
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5
      });

      // Slice 1 pulses
      tl.to(slice1Ref.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "power1.inOut",
        transformOrigin: "center center"
      })
      .to(slice1Ref.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      // Slice 2 pulses
      tl.to(slice2Ref.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "power1.inOut",
        transformOrigin: "center center"
      })
      .to(slice2Ref.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      // Slice 3 pulses
      tl.to(slice3Ref.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "power1.inOut",
        transformOrigin: "center center"
      })
      .to(slice3Ref.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      // Slice 4 pulses
      tl.to(slice4Ref.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "power1.inOut",
        transformOrigin: "center center"
      })
      .to(slice4Ref.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      // Slice 5 pulses
      tl.to(slice5Ref.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "power1.inOut",
        transformOrigin: "center center"
      })
      .to(slice5Ref.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      // Slice 6 pulses
      tl.to(slice6Ref.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "power1.inOut",
        transformOrigin: "center center"
      })
      .to(slice6Ref.current, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut"
      });

      // After all pulses, reassemble (all slices return to position)
      tl.to([slice1Ref.current, slice2Ref.current, slice3Ref.current, 
             slice4Ref.current, slice5Ref.current, slice6Ref.current], {
        y: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "+=0.3");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="medical-scroll-container">
      <div className="medical-scroll-content">
        <div className="medical-image-stack">
          {/* Slice 1 - Top (0% to 16.67%) */}
          <div 
            ref={slice1Ref}
            className="image-slice slice-1"
            style={{
              clipPath: 'inset(0% 0% 83.33% 0%)'
            }}
          >
            <Image
              src="/images/bd7e8a5d-d11c-43dd-bb51-4ee9236b156c.png"
              alt="NUVA Medical AI"
              width={600}
              height={600}
              className="medical-illustration"
              priority
            />
          </div>

          {/* Slice 2 (16.67% to 33.33%) */}
          <div 
            ref={slice2Ref}
            className="image-slice slice-2"
            style={{
              clipPath: 'inset(16.67% 0% 66.67% 0%)'
            }}
          >
            <Image
              src="/images/bd7e8a5d-d11c-43dd-bb51-4ee9236b156c.png"
              alt="NUVA Medical AI"
              width={600}
              height={600}
              className="medical-illustration"
            />
          </div>

          {/* Slice 3 - WITH PULSE (33.33% to 50%) */}
          <div 
            ref={slice3Ref}
            className="image-slice slice-3 pulse-slice"
            style={{
              clipPath: 'inset(33.33% 0% 50% 0%)'
            }}
          >
            <Image
              src="/images/bd7e8a5d-d11c-43dd-bb51-4ee9236b156c.png"
              alt="NUVA Medical AI"
              width={600}
              height={600}
              className="medical-illustration"
            />
          </div>

          {/* Slice 4 (50% to 66.67%) */}
          <div 
            ref={slice4Ref}
            className="image-slice slice-4"
            style={{
              clipPath: 'inset(50% 0% 33.33% 0%)'
            }}
          >
            <Image
              src="/images/bd7e8a5d-d11c-43dd-bb51-4ee9236b156c.png"
              alt="NUVA Medical AI"
              width={600}
              height={600}
              className="medical-illustration"
            />
          </div>

          {/* Slice 5 (66.67% to 83.33%) */}
          <div 
            ref={slice5Ref}
            className="image-slice slice-5"
            style={{
              clipPath: 'inset(66.67% 0% 16.67% 0%)'
            }}
          >
            <Image
              src="/images/bd7e8a5d-d11c-43dd-bb51-4ee9236b156c.png"
              alt="NUVA Medical AI"
              width={600}
              height={600}
              className="medical-illustration"
            />
          </div>

          {/* Slice 6 - Bottom (83.33% to 100%) */}
          <div 
            ref={slice6Ref}
            className="image-slice slice-6"
            style={{
              clipPath: 'inset(83.33% 0% 0% 0%)'
            }}
          >
            <Image
              src="/images/bd7e8a5d-d11c-43dd-bb51-4ee9236b156c.png"
              alt="NUVA Medical AI"
              width={600}
              height={600}
              className="medical-illustration"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="medical-scroll-text">
          <h3>Advanced Medical Intelligence</h3>
          <p>NUVA combines cutting-edge AI with medical expertise to deliver precise, reliable healthcare assistance</p>
        </div>
      </div>
    </div>
  );
}
