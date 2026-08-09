"use client";

import Reveal from "./ui/Reveal";
import { useI18n } from "@/lib/i18n";

const founders = [
  { name: "Mustafa Karwan", roleKey: "team_cofounder" },
  { name: "Yad Qasim", roleKey: "team_cofounder" },
];

export default function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="py-20 sm:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{t("team_eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-4 text-3xl sm:text-5xl gradient-text text-balance">
              {t("team_title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white text-sm font-medium shrink-0">
                  {f.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="text-[15px] font-medium tracking-tight text-white">{f.name}</div>
                  <div className="text-[13px] text-[var(--text-2)]">{t(f.roleKey)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6 max-w-2xl">
          <div className="glass rounded-2xl p-6">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[var(--text-3)] mb-4">
              {t("team_dev_support")}
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-black border border-white/[0.08] flex items-center justify-center shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/kii-logo.png"
                  alt="Kurdistan Innovation Institute"
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
              <div>
                <div className="text-[15px] font-medium tracking-tight text-white">
                  Kurdistan Innovation Institute
                </div>
                <a
                  href="https://kii.krd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[var(--text-2)] hover:text-white transition"
                >
                  kii.krd
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
