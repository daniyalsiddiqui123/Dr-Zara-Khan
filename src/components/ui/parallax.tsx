"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function Parallax({
  children,
  className,
  distance = 48,
  scale = false
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  scale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const s = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        className="h-full w-full"
        style={reduced ? undefined : { y, scale: scale ? s : undefined }}
      >
        {children}
      </motion.div>
    </div>
  );
}
