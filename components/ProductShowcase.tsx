"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, Brain, Mic, Pill, type LucideIcon } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";
import GlareHover from "./ui/GlareHover";
import ChatMockup, { type ChatMessage } from "./ui/ChatMockup";
import VoiceWaveform from "./ui/VoiceWaveform";
import { useI18n } from "@/lib/i18n";

type Tab = {
  id: string;
  labelKey: string;
  icon: LucideIcon;
  titleKey: string;
  captionKey: string;
  userKey: string;
  aiKey: string;
  inputKey: string;
  statusKey: string;
  isVoice?: boolean;
};

const tabs: Tab[] = [
  { id: "symptoms", labelKey: "product_symptoms", icon: Activity, titleKey: "product_symptoms_title", captionKey: "product_symptoms_caption", userKey: "symptoms_user", aiKey: "symptoms_ai", inputKey: "symptoms_input", statusKey: "chat_analyzing" },
  { id: "medications", labelKey: "product_medications", icon: Pill, titleKey: "product_meds_title", captionKey: "product_meds_caption", userKey: "meds_user", aiKey: "meds_ai", inputKey: "meds_input", statusKey: "chat_checking" },
  { id: "voice", labelKey: "product_voice", icon: Mic, titleKey: "product_voice_title", captionKey: "product_voice_caption", userKey: "voice_user", aiKey: "voice_ai", inputKey: "voice_input", statusKey: "chat_listening", isVoice: true },
  { id: "knowledge", labelKey: "product_knowledge", icon: Brain, titleKey: "product_knowledge_title", captionKey: "product_knowledge_caption", userKey: "knowledge_user", aiKey: "knowledge_ai", inputKey: "knowledge_input", statusKey: "chat_thinking" },
];

export default function ProductShowcase() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tab = tabs[active];

  const messages: ChatMessage[] = [
    { role: "user", text: t(tab.userKey), dir: "ltr" },
    { role: "assistant", text: t(tab.aiKey), dir: "ltr" },
  ];

  return (
    <section id="product" className="py-20 sm:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{t("product_eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-4 text-3xl sm:text-5xl gradient-text text-balance">
              {t("product_title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center">
          {/* Left — tab list */}
          <div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {tabs.map((tb, i) => {
                const Icon = tb.icon;
                const isActive = i === active;
                return (
                  <button
                    key={tb.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] transition-all duration-300 ${
                      isActive ? "bg-white text-black" : "glass text-[var(--text-2)] hover:text-[var(--text)]"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                    {t(tb.labelKey)}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {t(tab.titleKey)}
                </h3>
                <p className="mt-3 text-[var(--text-2)] leading-relaxed max-w-md">
                  {t(tab.captionKey)}
                </p>
                {tab.isVoice && (
                  <div className="mt-6 glass rounded-2xl px-4 py-4 inline-flex items-center gap-4">
                    <span className="pulse-dot" />
                    <VoiceWaveform bars={20} height={26} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — chat mockup with glare */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.98, y: reduce ? 0 : 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlareHover className="rounded-3xl" glareOpacity={0.06}>
                <ChatMockup
                  messages={messages}
                  status={t(tab.statusKey)}
                  input={t(tab.inputKey)}
                  className="max-w-md mx-auto"
                />
              </GlareHover>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
