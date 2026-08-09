"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mic } from "lucide-react";
import Reveal from "./ui/Reveal";
import VoiceWaveform from "./ui/VoiceWaveform";
import AIPulse from "./ui/AIPulse";
import { useI18n } from "@/lib/i18n";

export default function VoiceSection() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section id="voice" className="py-20 sm:py-28">
      <div className="shell">
        <div className="relative glass-strong edge-light rounded-3xl px-6 sm:px-12 py-14 sm:py-20 overflow-hidden">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, rgba(124,138,255,0.08), transparent 70%)" }}
            aria-hidden
          />

          <div className="relative max-w-2xl mx-auto text-center">
            <Reveal>
              <span className="eyebrow">{t("voice_eyebrow")}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display mt-4 text-3xl sm:text-5xl gradient-text text-balance">
                {t("voice_title")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[var(--text-2)] leading-relaxed">{t("voice_body")}</p>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="relative mt-12">
            <div className="flex flex-col items-center gap-6">
              <div className="relative flex items-center justify-center">
                <AIPulse size={80} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.2)]">
                    <Mic className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
              </div>

              <VoiceWaveform bars={40} height={56} className="w-full max-w-xl" />

              <motion.div
                className="glass rounded-2xl px-5 py-3 text-[15px] text-white"
                animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {t("voice_transcript_en")}
              </motion.div>
              <span className="text-[12px] text-[var(--text-3)]">{t("voice_transcript_label")}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
