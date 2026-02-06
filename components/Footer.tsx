"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="logo-text">NUVA</span>
          <p className="footer-copy">
            Medical AI assistant for Kurdistan. Supporting healthcare professionals and patients 
            with information and guidance in Kurdish, Arabic, and English.
          </p>
          <div className="footer-institutions">
            <p className="institution-credit">
              Developed at College of Pharmacy, Hawler Medical University
            </p>
            <p className="institution-credit">
              Supported by Kurdistan Innovation Institute (KII)
            </p>
          </div>
          <p className="footer-copy small">© {year} NUVA. AI assists—doctors decide.</p>
        </div>
        <div className="footer-right" aria-label="Footer links and social">
          <div className="footer-links">
            <a href="#what-is-nuva">About NUVA</a>
            <a href="#team">Team</a>
            <a href="#safety">Safety</a>
            <a href="#privacy">Privacy</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#language">Languages</a>
            <a href="mailto:admin@nuva.krd">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="NUVA on X (Twitter)">X</a>
            <a href="https://www.instagram.com/nuva.krd?igsh=Z2NsaHR5eHptOGZ5" className="social-link" aria-label="NUVA on Instagram" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
