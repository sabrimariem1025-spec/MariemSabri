"use client";

import { motion } from "framer-motion";
import { HeroLattice } from "./lattice";
import { heroStats, profile } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute -right-16 top-10 w-[420px] h-[340px] pointer-events-none hidden md:block">
        <HeroLattice className="w-full h-full" />
      </div>

      <div className="container-content relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          {profile.country} — Digital Education
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display italic text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl"
        >
          Empowering People
          <br />
          Through Technology
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-teal dark:text-teal-light"
        >
          {profile.titles.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {t}
              {i < profile.titles.length - 1 && <span className="text-ink/20 dark:text-paper/20">/</span>}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-slate dark:text-paper/70"
        >
          {profile.mission}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="/cv-mariem-sabri.pdf"
            className="px-6 py-3 bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium rounded-full hover:bg-gold dark:hover:bg-gold hover:text-ink transition-colors"
          >
            Download CV
          </a>
          <a
            href="/training"
            className="px-6 py-3 border border-ink/20 dark:border-paper/20 text-sm font-medium rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Explore My Training
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-ink/20 dark:border-paper/20 text-sm font-medium rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-ink/20 dark:border-paper/20 text-sm font-medium rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              className="border-t border-ink/15 dark:border-paper/15 pt-3"
            >
              <div className="font-display text-2xl">{s.value}</div>
              <div className="text-xs text-slate dark:text-paper/60 mt-1">{s.label}</div>
              <div className="text-[11px] text-ink/40 dark:text-paper/40 mt-0.5">{s.note}</div>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 inline-flex items-center gap-2 text-xs text-slate dark:text-paper/50"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={14} /> Scroll
        </motion.a>
      </div>
    </section>
  );
}
