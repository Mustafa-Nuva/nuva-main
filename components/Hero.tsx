"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Brain, Mic, Pill, Shield, Sparkles } from "lucide-react";
import ShinyText from "./ui/ShinyText";
import Reveal from "./ui/Reveal";
import ChatMockup from "./ui/ChatMockup";
import { useI18n } from "@/lib/i18n";

const capabilities = [
  { icon: Sparkles, labelKey: "cap_ai" },
  { icon: Activity, labelKey: "cap_symptoms" },
  { icon: Pill, labelKey: "cap_meds" },
  { icon: Mic, labelKey: "cap_voice" },
  { icon: Brain, labelKey: "cap_knowledge" },
  { icon: Shield, labelKey: "cap_safety" },
];

export default function Hero() {
  const { t, dir } = useI18n();
  const reduce = useReducedMotion();
  const dirVal: "ltr" | "rtl" = dir === "rtl" ? "rtl" : "ltr";
  const messages = [
    { role: "user" as const, text: t("hero_user"), dir: dirVal },
    { role: "assistant" as const, text: t("hero_ai"), dir: dirVal },
  ];

  return (
    <section id="top" className="relative pt-36 sm:pt-44 lg:pt-52 pb-20 sm:pb-28">
      <div className="shell">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-12 items-center">
          {/* Left — text */}
          <div className="max-w-xl">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5">
                <motion.span
                  className="pulse-dot"
                  animate={reduce ? undefined : { scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <ShinyText
                  text={t("hero_eyebrow")}
                  className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                  speed={3}
                  color="#5E5E66"
                  shineColor="#ffffff"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="display mt-7 text-[2.6rem] sm:text-6xl lg:text-[4rem] gradient-text text-balance">
                {t("hero_title")}
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-6 text-[15px] sm:text-base text-[var(--text-2)] leading-relaxed max-w-md">
                {t("hero_sub")}
              </p>
            </Reveal>

            {/* Capability icons — clean, minimal row */}
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                {capabilities.map((c) => {
                  const Icon = c.icon;
                  return (
                    <span
                      key={c.labelKey}
                      className="inline-flex items-center gap-1.5 text-[12.5px] text-[var(--text-2)] transition-colors hover:text-[var(--text)]"
                    >
                      <Icon className="h-[15px] w-[15px]" strokeWidth={1.5} />
                      {t(c.labelKey)}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right — AI interface */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-30"
              style={{ background: "radial-gradient(36rem 28rem at 60% 40%, rgba(124,138,255,0.08), transparent 60%)" }}
              aria-hidden
            />

            <motion.div
              animate={reduce ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChatMockup
                messages={messages}
                status={t("chat_listening")}
                input={t("hero_input")}
                showTyping
                className="max-w-md mx-auto lg:ms-auto lg:me-0"
              />
            </motion.div>

            <div
              className="absolute -bottom-5 end-4 sm:end-8 z-10 glass rounded-2xl px-4 py-2.5 hidden sm:flex items-center gap-2.5"
            >
              <Shield className="h-3.5 w-3.5 text-[var(--text-2)]" strokeWidth={1.5} />
              <span className="text-[11px] text-[var(--text-2)]">{t("hero_disclaimer")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
