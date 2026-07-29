"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Signature visual motif: an eight-point star lattice (a nod to Gulf
 * geometric ornament) whose connecting lines double as a node/network
 * graph — representing the bridge between heritage and technology
 * education. Used sparingly: hero background + section dividers only.
 */
function Star8({ cx, cy, r, id }: { cx: number; cy: number; r: number; id: string }) {
  const points: string[] = [];
  for (let i = 0; i < 16; i++) {
    const angle = (Math.PI / 8) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.42;
    points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
  }
  return <polygon key={id} points={points.join(" ")} fill="none" strokeWidth="0.6" />;
}

export function HeroLattice({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const stars = [];
  const cols = 5;
  const rows = 4;
  const spacing = 90;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * spacing + (row % 2 === 0 ? 0 : spacing / 2) + 40;
      const cy = row * spacing + 40;
      stars.push(
        <Star8 key={`${row}-${col}`} cx={cx} cy={cy} r={34} id={`${row}-${col}`} />
      );
    }
  }
  return (
    <motion.svg
      viewBox="0 0 480 380"
      className={className}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.g
        className="text-gold/40 dark:text-gold-light/30 stroke-current"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 140, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "240px 190px" }}
      >
        {stars}
      </motion.g>
      <g className="text-teal/50 dark:text-teal-light/40 stroke-current">
        <line x1="40" y1="40" x2="220" y2="130" strokeWidth="0.5" />
        <line x1="220" y1="130" x2="400" y2="40" strokeWidth="0.5" />
        <line x1="130" y1="220" x2="310" y2="220" strokeWidth="0.5" />
        <line x1="220" y1="130" x2="220" y2="310" strokeWidth="0.5" />
        <circle cx="220" cy="130" r="3" fill="currentColor" stroke="none" />
        <circle cx="310" cy="220" r="3" fill="currentColor" stroke="none" />
        <circle cx="130" cy="220" r="3" fill="currentColor" stroke="none" />
      </g>
    </motion.svg>
  );
}

export function SectionDivider() {
  return (
    <div className="relative h-16 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 800 60" className="w-full h-full opacity-40 dark:opacity-30" preserveAspectRatio="none">
        <g className="text-gold dark:text-gold-light stroke-current" strokeWidth="0.6" fill="none">
          <Star8 cx={80} cy={30} r={20} id="d1" />
          <Star8 cx={400} cy={30} r={20} id="d2" />
          <Star8 cx={720} cy={30} r={20} id="d3" />
        </g>
        <g className="text-teal dark:text-teal-light stroke-current" strokeWidth="0.5">
          <line x1="100" y1="30" x2="380" y2="30" />
          <line x1="420" y1="30" x2="700" y2="30" />
        </g>
      </svg>
    </div>
  );
}
