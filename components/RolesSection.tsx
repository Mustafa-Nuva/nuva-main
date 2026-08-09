"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Pill, Stethoscope, User, type LucideIcon } from "lucide-react";
import { useState } from "react";
import Reveal from "./ui/Reveal";
import GlareHover from "./ui/GlareHover";
import ChatMockup, { type ChatMessage } from "./ui/ChatMockup";
import { useI18n } from "@/lib/i18n";

type Role = {
  id: string;
  labelKey: string;
  descKey: string;
  icon: LucideIcon;
  userKey: string;
  aiKey: string;
};

const roles: Role[] = [
  { id: "patients", labelKey: "roles_patients", descKey: "roles_patients_desc", icon: User, userKey: "roles_patients_user", aiKey: "roles_patients_ai" },
  { id: "doctors", labelKey: "roles_doctors", descKey: "roles_doctors_desc", icon: Stethoscope, userKey: "roles_doctors_user", aiKey: "roles_doctors_ai" },
  { id: "pharmacists", labelKey: "roles_pharmacists", descKey: "roles_pharmacists_desc", icon: Pill, userKey: "roles_pharmacists_user", aiKey: "roles_pharmacists_ai" },
  { id: "students", labelKey: "roles_students", descKey: "roles_students_desc", icon: GraduationCap, userKey: "roles_students_user", aiKey: "roles_students_ai" },
];

export default function RolesSection() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const role = roles[active];

  const messages: ChatMessage[] = [
    { role: "user", text: t(role.userKey), dir: "ltr" },
    { role: "assistant", text: t(role.aiKey), dir: "ltr" },
  ];

  return (
    <section id="roles" className="py-20 sm:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{t("roles_eyebrow")}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-4 text-3xl sm:text-5xl gradient-text text-balance">
              {t("roles_title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-12 items-center">
          {/* Left — role list */}
          <div className="flex lg:flex-col gap-2.5 overflow-x-auto no-scrollbar -mx-1 px-1 lg:mx-0 lg:px-0">
            {roles.map((r, i) => {
              const Icon = r.icon;
              const isActive = i === active;
              return (
                <GlareHover
                  key={r.id}
                  className="rounded-2xl shrink-0 lg:shrink"
                  glareOpacity={isActive ? 0.08 : 0.04}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`block w-full text-start rounded-2xl px-4 py-4 transition-all duration-300 w-[260px] lg:w-auto ${
                      isActive ? "glass-strong" : "glass opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-9 w-9 rounded-xl flex items-center justify-center transition ${
                          isActive ? "bg-white text-black" : "bg-white/[0.04] border border-white/[0.08] text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <span className="text-[15px] font-medium tracking-tight text-white">{t(r.labelKey)}</span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="hidden lg:block mt-3 text-[13.5px] text-[var(--text-2)] leading-relaxed overflow-hidden"
                        >
                          {t(r.descKey)}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </GlareHover>
              );
            })}
          </div>

          {/* Right — chat */}
          <AnimatePresence mode="wait">
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: reduce ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChatMockup
                messages={messages}
                status={t("chat_ready")}
                input={t("chat_input")}
                className="max-w-md mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
