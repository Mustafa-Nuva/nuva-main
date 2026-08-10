"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./ui/Logo";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const links = [
    { label: t("nav_product"), href: "#product" },
    { label: t("nav_features"), href: "#roles" },
    { label: t("nav_safety"), href: "#safety" },
    { label: "Help Center", href: "https://help.nuva.krd", external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        className={`w-full max-w-[1100px] rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong edge-light" : "border border-transparent bg-transparent"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 items-center px-4 sm:px-6 h-14">
          {/* Logo — left */}
          <a href="#top" className="flex items-center gap-2 justify-self-start" aria-label="NUVA AI home">
            <Logo className="h-5 w-5 sm:h-6 sm:w-6" priority />
            <span className="text-[14px] sm:text-[15px] font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-white whitespace-nowrap">NUVA<span className="text-[var(--text-3)]"> AI</span></span>
          </a>

          {/* Nav links — center (desktop only) */}
          <div className="hidden md:flex items-center justify-self-center gap-5 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-[13px] lg:text-[13.5px] text-[var(--text-2)] hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button — right */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-xl glass flex items-center justify-center text-white justify-self-end"
          >
            <Menu className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute end-0 top-0 h-full w-[82%] max-w-sm glass-strong p-6 flex flex-col"
              initial={{ x: reduce ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : "100%" }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="flex items-center gap-2">
                  <Logo className="h-5 w-5" />
                  <span className="text-[14px] font-semibold tracking-[0.16em] text-white whitespace-nowrap">NUVA<span className="text-[var(--text-3)]"> AI</span></span>
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-xl glass flex items-center justify-center text-white shrink-0"
                >
                  <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href + l.label}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-medium tracking-tight py-3 border-b border-white/[0.06] text-white/85 hover:text-white transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
