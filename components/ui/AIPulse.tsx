"use client";

import { motion, useReducedMotion } from "framer-motion";

type AIPulseProps = {
  size?: number;
  className?: string;
};

export default function AIPulse({ size = 64, className }: AIPulseProps) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {!reduce && (
        <>
          <span className="absolute inset-0 rounded-full border border-accent/30 animate-pulseRing" />
          <span
            className="absolute inset-0 rounded-full border border-accent/20 animate-pulseRing"
            style={{ animationDelay: "1s" }}
          />
          <span
            className="absolute inset-0 rounded-full border border-accent/10 animate-pulseRing"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}
      <motion.span
        className="relative rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        style={{ width: size * 0.28, height: size * 0.28 }}
        animate={reduce ? undefined : { scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
