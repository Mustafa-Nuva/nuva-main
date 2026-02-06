"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LogoIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="logo-intro-overlay">
      <div className="logo-intro-content">
        <div className="logo-intro-mark">
          <Image
            src="/images/alone-logo-d.png"
            alt="NUVA"
            width={240}
            height={240}
            priority
          />
        </div>
        <h1 className="logo-intro-text">NUVA</h1>
      </div>
    </div>
  );
}
