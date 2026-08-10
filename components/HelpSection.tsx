"use client";

import { LifeBuoy, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";
import { useI18n } from "@/lib/i18n";

export default function HelpSection() {
  const { t } = useI18n();
  return (
    <section id="help" className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="relative glass-strong edge-light rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center overflow-hidden">
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, rgba(124,138,255,0.08), transparent 70%)" }}
              aria-hidden
            />
            <div className="relative max-w-xl mx-auto">
              <span className="inline-flex h-12 w-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] items-center justify-center text-white mb-6">
                <LifeBuoy className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2 className="display text-3xl sm:text-5xl gradient-text text-balance">
                {t("help_title")}
              </h2>
              <p className="mt-5 text-[var(--text-2)] leading-relaxed">
                {t("help_body")}
              </p>
              <div className="mt-8">
                <Magnetic
                  href="https://help.nuva.krd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  strength={0.2}
                >
                  {t("help_button")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={1.5} />
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
