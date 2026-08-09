"use client";

import { useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

export default function Magnetic({
  children,
  className,
  strength = 0.3,
  href,
  onClick,
  ariaLabel,
  target,
  rel,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const sharedProps = {
    ref: ref as never,
    className,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    onClick,
    "aria-label": ariaLabel,
    style: { transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" as const },
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...sharedProps}>
      {children}
    </button>
  );
}
