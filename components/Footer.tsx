"use client";

import { Mail } from "lucide-react";
import Logo from "./ui/Logo";
import InstagramIcon from "./ui/InstagramIcon";
import LinkedInIcon from "./ui/LinkedInIcon";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-white/[0.06] mt-10">
      <div className="shell py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="text-[15px] font-semibold tracking-[0.18em] text-[var(--text)]">NUVA<span className="text-[var(--text-3)]"> AI</span></span>
            </div>
            <p className="mt-4 text-[13.5px] text-[var(--text-2)] leading-relaxed">{t("footer_tagline")}</p>
            <p className="mt-3 text-[12px] text-[var(--text-3)]">{t("footer_disclaimer")}</p>
          </div>

          {/* Download */}
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[var(--text-3)] mb-4">{t("footer_download")}</div>
            <ul className="space-y-2.5">
              <li>
                <a href="https://apps.apple.com/iq/app/nuva-ai/id6782602140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13.5px] text-[var(--text-2)] hover:text-[var(--text)] transition">
                  <svg className="h-4 w-4" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.5-88.5 20.5-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59.9 128.6 104.6 128.6 24.9 0 42.6-16.7 73.3-16.7 29.5 0 45.6 16.7 73.3 16.7 45.1 0 87.5-76.6 99.5-115.5-63.4-29.9-66.8-86.9-66.8-89.1zM254.7 95.5c19.2-22.8 17.5-43.5 16.9-51-17 1-36.7 11.6-47.9 24.7-13.2 14.8-21 33-19.2 52.2 18.5 1.4 35.4-8.1 50.2-25.9z"/>
                  </svg>
                  App Store
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=krd.nuva.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13.5px] text-[var(--text-2)] hover:text-[var(--text)] transition">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
                    <path d="M3.6 1.7c-.3.3-.5.7-.5 1.2v18.2c0 .5.2.9.5 1.2l.1.1L14 12.1v-.2L3.7 1.6l-.1.1z" fill="#34A853"/>
                    <path d="M17.5 15.6L14 12.1v-.2l3.5-3.5.1.1 4.1 2.3c1.2.7 1.2 1.8 0 2.5l-4.1 2.3-.1.1z" fill="#FBBC04"/>
                    <path d="M17.6 15.5L14 12 3.6 22.3c.4.4 1 .5 1.7.1l12.3-6.9" fill="#EA4335"/>
                    <path d="M17.6 8.5L5.3 1.7c-.7-.4-1.3-.3-1.7.1L14 12l3.6-3.5z" fill="#4285F4"/>
                  </svg>
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[var(--text-3)] mb-4">{t("footer_connect")}</div>
            <div className="space-y-2.5">
              <a
                href="https://www.instagram.com/nuva.krd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] text-[var(--text-2)] hover:text-[var(--text)] transition"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/nuva-ai-505924427"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] text-[var(--text-2)] hover:text-[var(--text)] transition"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <br />
              <a
                href="mailto:support@nuva.krd"
                className="inline-flex items-center gap-2 text-[13.5px] text-[var(--text-2)] hover:text-[var(--text)] transition"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                support@nuva.krd
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[var(--text-3)]">{t("footer_rights")}</p>
          <p className="text-[12px] text-[var(--text-3)]">{t("footer_ethical")}</p>
        </div>
      </div>
    </footer>
  );
}
