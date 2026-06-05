"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionBlock({ children, className }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionList({ children, className }: MotionProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.05,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({ children, className }: MotionProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16, rotate: -0.25 },
        show: { opacity: 1, y: 0, rotate: 0 },
      }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
