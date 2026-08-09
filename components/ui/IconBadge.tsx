"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
  glow?: boolean;
};

export default function IconBadge({ icon: Icon, size = 40, className, glow = true }: IconBadgeProps) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`relative inline-flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-white ${className ?? ""}`}
      style={{ width: size, height: size }}
      whileHover={reduce ? undefined : { scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Icon className="h-1/2 w-1/2" strokeWidth={1.5} />
      {glow && (
        <span
          className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
          aria-hidden
        />
      )}
    </motion.span>
  );
}
