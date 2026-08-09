"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUp, Mic } from "lucide-react";
import Logo from "./Logo";
import AIPulse from "./AIPulse";

export type ChatMessage = {
  role: "user" | "assistant";
  text: string;
  dir?: "ltr" | "rtl";
};

type ChatMockupProps = {
  messages: ChatMessage[];
  status?: string;
  input?: string;
  className?: string;
  animate?: boolean;
  showTyping?: boolean;
};

export default function ChatMockup({
  messages,
  status = "Online",
  input = "Ask NUVA anything…",
  className,
  animate = true,
  showTyping = false,
}: ChatMockupProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.18, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14, filter: reduce ? "blur(0px)" : "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={`glass-strong edge-light rounded-3xl overflow-hidden relative ${className ?? ""}`}>
      <div className="scan-line" aria-hidden />

      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span className="text-sm font-semibold tracking-tight text-[var(--text)]">NUVA<span className="text-[var(--text-3)] font-normal"> AI</span></span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[var(--text-3)]">
          <span className="pulse-dot" />
          {status}
        </div>
      </div>

      <motion.div
        className="px-5 py-6 space-y-5 min-h-[260px]"
        variants={animate ? container : undefined}
        initial={animate ? "hidden" : false}
        animate={animate ? "visible" : undefined}
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            variants={animate ? item : undefined}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex items-end gap-2 max-w-[82%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              {m.role === "assistant" && (
                <div className="h-6 w-6 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Logo className="h-3.5 w-3.5" />
                </div>
              )}
              <div
                dir={m.dir ?? "ltr"}
                className={`rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed ${
                  m.role === "user"
                    ? "bg-white text-black"
                    : "bg-white/[0.04] border border-white/[0.07] text-[var(--text)]"
                }`}
              >
                {m.text}
              </div>
            </div>
          </motion.div>
        ))}

        {showTyping && (
          <motion.div
            variants={item}
            className="flex justify-start"
          >
            <div className="flex items-end gap-2">
              <div className="h-6 w-6 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                <AIPulse size={16} />
              </div>
              <div className="rounded-2xl px-4 py-3 bg-white/[0.04] border border-white/[0.07] flex items-center gap-1.5">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-white"
                    animate={reduce ? undefined : { opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 rounded-2xl bg-black/30 border border-white/[0.07] px-3.5 py-2.5 focus-within:border-accent/30 transition-colors">
          <span className="text-[13px] text-[var(--text-3)] flex-1 truncate">{input}</span>
          <button
            type="button"
            aria-label="Voice input"
            className="h-8 w-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[var(--text-2)] hover:text-accent hover:border-accent/30 transition"
          >
            <Mic className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Send"
            className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
