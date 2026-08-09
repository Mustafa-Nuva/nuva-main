"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languages, useI18n, type Lang } from "@/lib/i18n";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = languages.find((l) => l.id === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Switch language"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full glass px-3 py-2 text-[13px] text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
      >
        <Globe className="h-4 w-4" strokeWidth={1.5} />
        <span className={compact ? "hidden sm:inline" : ""}>{current.native}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : -6, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : -6, scale: reduce ? 1 : 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute end-0 mt-2 w-40 glass-strong rounded-2xl p-1.5 z-50"
          >
            {languages.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => {
                  setLang(l.id as Lang);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-[13.5px] transition ${
                  l.id === lang
                    ? "bg-white/[0.06] text-[var(--text)]"
                    : "text-[var(--text-2)] hover:bg-white/[0.04] hover:text-[var(--text)]"
                }`}
              >
                <span>{l.native}</span>
                {l.id === lang && <Check className="h-3.5 w-3.5 text-white" strokeWidth={2} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
