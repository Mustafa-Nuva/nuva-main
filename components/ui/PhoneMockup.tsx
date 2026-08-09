"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUp, Mic, Paperclip, Sparkles } from "lucide-react";
import Logo from "./Logo";
import VoiceWaveform from "./VoiceWaveform";
import { useI18n } from "@/lib/i18n";

type PhoneMockupProps = {
  variant: "iphone" | "android";
  className?: string;
  floatDelay?: number;
};

export default function PhoneMockup({ variant, className, floatDelay = 0 }: PhoneMockupProps) {
  const { t, dir } = useI18n();
  const reduce = useReducedMotion();
  const rtl = dir === "rtl";

  const isIos = variant === "iphone";

  const msgVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10, filter: reduce ? "blur(0px)" : "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  // Device frame styles
  const frame = isIos
    ? {
        // iPhone: rounded corners, notch, thin bezel
        borderRadius: "2.75rem",
        border: "8px solid #08080A",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(124,138,255,0.08)",
      }
    : {
        // Android: slightly more rectangular, punch-hole camera
        borderRadius: "2.25rem",
        border: "7px solid #08080A",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(124,138,255,0.08)",
      };

  return (
    <motion.div
      className={`relative ${className ?? ""}`}
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
      {/* Ambient glow behind device */}
      <div
        className="absolute -inset-8 -z-10 blur-3xl opacity-70"
        style={{ background: "radial-gradient(30rem 24rem at 50% 40%, rgba(124,138,255,0.10), transparent 60%)" }}
        aria-hidden
      />

      <div className="relative" style={frame}>
        <div
          className="relative overflow-hidden bg-black"
          style={{ borderRadius: isIos ? "2.2rem" : "1.85rem", width: 280, height: 580 }}
        >
          {/* Status bar / notch / punch-hole */}
          <div className="absolute top-0 inset-x-0 h-9 flex items-center justify-between px-6 z-20">
            <span className="text-[10px] font-medium text-[var(--text-2)]">9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-[var(--text-2)]">●●●</span>
            </div>
          </div>
          {isIos ? (
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-full z-30 border border-white/[0.06]"
              aria-hidden
            />
          ) : (
            <div
              className="absolute top-2.5 right-4 h-2.5 w-2.5 rounded-full bg-black border border-white/[0.08] z-30"
              aria-hidden
            />
          )}

          {/* NUVA app UI */}
          <div className="absolute inset-0 pt-10 flex flex-col" dir={rtl ? "rtl" : "ltr"}>
            {/* App header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Logo className="h-6 w-6" />
                <span className="text-[13px] font-semibold tracking-tight text-[var(--text)]">NUVA<span className="text-[var(--text-3)] font-normal"> AI</span></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                <span className="text-[9px] text-[var(--text-3)]">{t("chat_online")}</span>
              </div>
            </div>

            {/* Chat area */}
            <motion.div
              className="flex-1 px-4 py-4 space-y-3 overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.4, delayChildren: 0.3 } } }}
            >
              <motion.div variants={msgVariants} className="flex justify-end">
                <div className="bg-white text-black rounded-2xl rounded-br-md px-3 py-2 text-[11px] leading-relaxed max-w-[80%]">
                  {t("hero_user")}
                </div>
              </motion.div>

              <motion.div variants={msgVariants} className="flex justify-start gap-1.5">
                <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 mt-auto">
                  <Logo className="h-3 w-3" />
                </div>
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl rounded-bl-md px-3 py-2 text-[11px] leading-relaxed max-w-[80%] text-[var(--text)]">
                  {t("hero_ai")}
                </div>
              </motion.div>

              {/* Voice waveform bubble */}
              <motion.div variants={msgVariants} className="flex justify-start gap-1.5">
                <div className="h-5 w-5 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 mt-auto">
                  <Sparkles className="h-3 w-3 text-white" strokeWidth={1.5} />
                </div>
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl rounded-bl-md px-3 py-2.5 flex items-center gap-2">
                  <VoiceWaveform bars={12} height={18} />
                </div>
              </motion.div>
            </motion.div>

            {/* Input bar */}
            <div className="px-3 pb-5 pt-2">
              <div className="flex items-center gap-1.5 rounded-2xl bg-black/40 border border-white/[0.07] px-2.5 py-2">
                <Paperclip className="h-3.5 w-3.5 text-[var(--text-3)]" strokeWidth={1.5} />
                <span className="text-[10px] text-[var(--text-3)] flex-1 truncate">{t("chat_input")}</span>
                <button type="button" aria-label="Voice" className="h-6 w-6 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[var(--text-2)]">
                  <Mic className="h-3 w-3" strokeWidth={1.5} />
                </button>
                <button type="button" aria-label="Send" className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center">
                  <ArrowUp className="h-3 w-3" strokeWidth={1.75} />
                </button>
              </div>
            </div>

            {/* Home indicator (iOS) or nav bar (Android) */}
            {isIos ? (
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full bg-white/30" aria-hidden />
            ) : (
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="h-1 w-1 rounded-full bg-white/30" />
              </div>
            )}
          </div>

          {/* Glass reflection sweep */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background:
                "linear-gradient(125deg, transparent 30%, rgba(255,255,255,0.06) 45%, transparent 60%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </motion.div>
  );
}
