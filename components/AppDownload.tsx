"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BlurText from "./ui/BlurText";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import PhoneMockup from "./ui/PhoneMockup";
import { useI18n } from "@/lib/i18n";

function AppStoreBadge({ label }: { label: string }) {
  return (
    <Magnetic
      href="https://apps.apple.com/iq/app/nuva-ai/id6782602140"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary !gap-3 !px-5 !py-3"
      strength={0.18}
      ariaLabel={label}
    >
      <svg className="h-6 w-6" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.5-88.5 20.5-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59.9 128.6 104.6 128.6 24.9 0 42.6-16.7 73.3-16.7 29.5 0 45.6 16.7 73.3 16.7 45.1 0 87.5-76.6 99.5-115.5-63.4-29.9-66.8-86.9-66.8-89.1zM254.7 95.5c19.2-22.8 17.5-43.5 16.9-51-17 1-36.7 11.6-47.9 24.7-13.2 14.8-21 33-19.2 52.2 18.5 1.4 35.4-8.1 50.2-25.9z"/>
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[9px] uppercase tracking-wider opacity-60">Download on the</span>
        <span className="text-[15px] font-semibold tracking-tight">App Store</span>
      </span>
      <ArrowRight className="h-4 w-4 rtl:rotate-180 opacity-60" strokeWidth={1.5} />
    </Magnetic>
  );
}

function GooglePlayBadge({ label }: { label: string }) {
  return (
    <Magnetic
      href="https://play.google.com/store/apps/details?id=krd.nuva.app"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-ghost !gap-3 !px-5 !py-3"
      strength={0.18}
      ariaLabel={label}
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
        <path d="M3.6 1.7c-.3.3-.5.7-.5 1.2v18.2c0 .5.2.9.5 1.2l.1.1L14 12.1v-.2L3.7 1.6l-.1.1z" fill="#34A853"/>
        <path d="M17.5 15.6L14 12.1v-.2l3.5-3.5.1.1 4.1 2.3c1.2.7 1.2 1.8 0 2.5l-4.1 2.3-.1.1z" fill="#FBBC04"/>
        <path d="M17.6 15.5L14 12 3.6 22.3c.4.4 1 .5 1.7.1l12.3-6.9" fill="#EA4335"/>
        <path d="M17.6 8.5L5.3 1.7c-.7-.4-1.3-.3-1.7.1L14 12l3.6-3.5z" fill="#4285F4"/>
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[9px] uppercase tracking-wider opacity-60">Get it on</span>
        <span className="text-[15px] font-semibold tracking-tight">Google Play</span>
      </span>
      <ArrowRight className="h-4 w-4 rtl:rotate-180 opacity-60" strokeWidth={1.5} />
    </Magnetic>
  );
}

export default function AppDownload() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="shell">
        <div className="relative glass-strong edge-light rounded-3xl px-6 sm:px-12 py-14 sm:py-20 overflow-hidden">
          {/* Ambient glows */}
          <div
            className="absolute -top-32 left-1/4 h-72 w-72 rounded-full blur-3xl opacity-60"
            style={{ background: "radial-gradient(circle, rgba(124,138,255,0.10), transparent 70%)" }}
            aria-hidden
          />
          <div
            className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(circle, rgba(124,138,255,0.08), transparent 70%)" }}
            aria-hidden
          />

          {/* Header */}
          <div className="relative max-w-2xl mx-auto text-center">
            <Reveal>
              <span className="eyebrow">{t("app_eyebrow")}</span>
            </Reveal>
            <BlurText
              as="h2"
              text={t("app_title")}
              className="display mt-4 text-4xl sm:text-6xl gradient-text text-balance"
              stagger={0.06}
            />
            <Reveal delay={0.2} className="mt-5">
              <p className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed">{t("app_body")}</p>
            </Reveal>
          </div>

          {/* Devices — desktop: side by side, mobile: stacked */}
          <div className="relative mt-14 sm:mt-20">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              {/* iPhone */}
              <Reveal delay={0.1} className="flex flex-col items-center gap-6">
                <PhoneMockup variant="iphone" floatDelay={0} />
                <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-3)]">{t("app_ios")}</span>
                <AppStoreBadge label={t("app_appstore")} />
              </Reveal>

              {/* Android */}
              <Reveal delay={0.25} className="flex flex-col items-center gap-6">
                <PhoneMockup variant="android" floatDelay={1.5} />
                <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-3)]">{t("app_android")}</span>
                <GooglePlayBadge label={t("app_googleplay")} />
              </Reveal>
            </div>
          </div>

          {/* Subtle pulse line beneath */}
          <Reveal delay={0.3} className="relative mt-14 sm:mt-20">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/15" />
              <motion.span
                className="pulse-dot"
                animate={reduce ? undefined : { scale: [1, 1.3, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/15" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
