"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMemo } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export default function BlurText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  as = "p",
}: BlurTextProps) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(" "), [text]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: reduce ? 0 : 8,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          <motion.span className="inline-block" variants={child}>
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
