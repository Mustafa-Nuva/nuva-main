"use client";

import { LifeBuoy, Mail } from "lucide-react";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import InstagramIcon from "./ui/InstagramIcon";
import LinkedInIcon from "./ui/LinkedInIcon";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="shell">
        <div className="relative glass-strong edge-light rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center overflow-hidden">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, rgba(124,138,255,0.08), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative max-w-xl mx-auto">
            <Reveal>
              <h2 className="display text-3xl sm:text-5xl gradient-text text-balance">
                {t("contact_title")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Magnetic href="mailto:support@nuva.krd" target="_blank" rel="noopener noreferrer" className="btn btn-primary" strength={0.2}>
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  {t("contact_email")}
                </Magnetic>
                <Magnetic
                  href="https://www.instagram.com/nuva.krd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  strength={0.2}
                >
                  <InstagramIcon className="h-4 w-4" />
                  {t("contact_instagram")}
                </Magnetic>
                <Magnetic
                  href="https://www.linkedin.com/in/nuva-ai-505924427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  strength={0.2}
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </Magnetic>
                <Magnetic
                  href="https://help.nuva.krd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  strength={0.2}
                >
                  <LifeBuoy className="h-4 w-4" strokeWidth={1.5} />
                  Help Center
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
