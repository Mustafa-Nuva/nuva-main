"use client";

import { Eye, Lock, Shield, Stethoscope, type LucideIcon } from "lucide-react";
import Reveal from "./ui/Reveal";
import GlareHover from "./ui/GlareHover";
import { useI18n } from "@/lib/i18n";

type Point = {
  icon: LucideIcon;
  titleKey: string;
  bodyKey: string;
};

const points: Point[] = [
  { icon: Lock, titleKey: "safety_privacy", bodyKey: "safety_privacy_body" },
  { icon: Shield, titleKey: "safety_security", bodyKey: "safety_security_body" },
  { icon: Eye, titleKey: "safety_transparency", bodyKey: "safety_transparency_body" },
  { icon: Stethoscope, titleKey: "safety_judgment", bodyKey: "safety_judgment_body" },
];

export default function Privacy() {
  const { t } = useI18n();
  return (
    <section id="safety" className="py-20 sm:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{t("safety_eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-4 text-3xl sm:text-5xl gradient-text text-balance">
              {t("safety_title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.titleKey} delay={i * 0.08}>
                <GlareHover className="rounded-2xl h-full" glareOpacity={0.05}>
                  <div className="glass rounded-2xl p-5 sm:p-6 h-full">
                    <span className="inline-flex h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.08] items-center justify-center text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-4 text-[15px] font-medium tracking-tight text-white">{t(p.titleKey)}</h3>
                    <p className="mt-1.5 text-[13.5px] text-[var(--text-2)] leading-relaxed">{t(p.bodyKey)}</p>
                  </div>
                </GlareHover>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="glass-strong rounded-2xl px-6 py-5 flex items-center gap-3">
            <span className="pulse-dot" />
            <p className="text-[15px] sm:text-base text-white">
              <span className="font-semibold">{t("safety_disclaimer_strong")}</span>
              <span className="text-[var(--text-2)]">{t("safety_disclaimer_soft")}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
