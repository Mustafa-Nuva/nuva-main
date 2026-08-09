"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";
import BlurText from "./ui/BlurText";
import Reveal from "./ui/Reveal";
import ChatMockup, { type ChatMessage } from "./ui/ChatMockup";
import { useI18n, type Lang } from "@/lib/i18n";

const langs: { id: Lang; nativeKey: string; userKey: string; aiKey: string; inputKey: string }[] = [
  { id: "en", nativeKey: "lang_en_input", userKey: "lang_en_user", aiKey: "lang_en_ai", inputKey: "lang_en_input" },
  { id: "ku", nativeKey: "lang_ku_input", userKey: "lang_ku_user", aiKey: "lang_ku_ai", inputKey: "lang_ku_input" },
  { id: "ar", nativeKey: "lang_ar_input", userKey: "lang_ar_user", aiKey: "lang_ar_ai", inputKey: "lang_ar_input" },
];

const nativeLabels: Record<Lang, string> = { en: "English", ku: "کوردی", ar: "العربية" };

export default function Multilingual() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const lang = langs[active];

  const messages: ChatMessage[] = [
    { role: "user", text: t(lang.userKey), dir: "ltr" },
    { role: "assistant", text: t(lang.aiKey), dir: "ltr" },
  ];

  return (
    <section id="languages" className="py-20 sm:py-28">
      <div className="shell">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="eyebrow">{t("lang_eyebrow")}</span>
            </Reveal>
            <BlurText
              as="h2"
              text={t("lang_title")}
              className="display mt-4 text-3xl sm:text-5xl gradient-text text-balance"
              stagger={0.07}
            />
            <Reveal delay={0.2} className="mt-6">
              <p className="text-[var(--text-2)] leading-relaxed max-w-md">
                {t("lang_body")}
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8">
              <div className="flex flex-wrap gap-2.5">
                {langs.map((l, i) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] transition ${
                      i === active ? "bg-white text-black" : "glass text-[var(--text-2)] hover:text-[var(--text)]"
                    }`}
                  >
                    <Globe className="h-4 w-4" strokeWidth={1.5} />
                    {nativeLabels[l.id]}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16, filter: reduce ? "blur(0px)" : "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: reduce ? 0 : -12, filter: reduce ? "blur(0px)" : "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChatMockup
                messages={messages}
                status={nativeLabels[lang.id]}
                input={t(lang.inputKey)}
                className="max-w-md mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
