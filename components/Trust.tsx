"use client";

import { Activity, Brain, Mic, ShieldCheck, type LucideIcon } from "lucide-react";
import Reveal from "./ui/Reveal";
import { useI18n } from "@/lib/i18n";

type Stat = {
  icon: LucideIcon;
  labelKey: string;
  subKey: string;
};

const stats: Stat[] = [
  { icon: Activity, labelKey: "stat_features", subKey: "stat_features_label" },
  { icon: Brain, labelKey: "stat_roles", subKey: "stat_roles_label" },
  { icon: Mic, labelKey: "stat_voice", subKey: "stat_voice_label" },
  { icon: ShieldCheck, labelKey: "stat_safety", subKey: "stat_safety_label" },
];

export default function Trust() {
  const { t } = useI18n();
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.labelKey} delay={i * 0.08}>
                <div className="bg-black p-6 sm:p-8 h-full flex flex-col gap-3">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  <div className="text-[14px] font-medium text-white">{t(s.labelKey)}</div>
                  <div className="text-[12px] text-[var(--text-3)] leading-relaxed">{t(s.subKey)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
