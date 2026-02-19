"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Github, Linkedin, FileText, Sparkles } from "lucide-react"
import { useRef } from "react"

function ConnectionLines() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.3]">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M-10,20 Q30,50 80,-10"
          fill="none"
          stroke="oklch(0.60 0.18 270)"
          strokeWidth="0.1"
          animate={{ strokeDashoffset: [100, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "1, 2" }}
        />
        <motion.path
          d="M110,60 Q70,30 20,110"
          fill="none"
          stroke="oklch(0.60 0.18 270)"
          strokeWidth="0.1"
          animate={{ strokeDashoffset: [0, 100] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "1, 2" }}
        />
        <motion.path
          d="M40,-20 Q60,50 40,120"
          fill="none"
          stroke="oklch(0.70 0.12 350)"
          strokeWidth="0.05"
          animate={{ strokeDashoffset: [100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "0.5, 3" }}
        />
        {/* Extra artistic arcs */}
        <motion.path
          d="M0,80 Q50,40 100,70"
          fill="none"
          stroke="oklch(0.70 0.12 350)"
          strokeWidth="0.06"
          animate={{ strokeDashoffset: [80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ strokeDasharray: "0.8, 2.5" }}
        />
      </svg>
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 selection:bg-primary/20"
    >
      <ConnectionLines />

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* Decorative rotated label — top-left */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600 hidden lg:block"
      >
        Full-Stack · AI/ML · Design
      </motion.span>

      {/* Decorative rotated label — right */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600 hidden lg:block"
      >
        Delhi, India · 2025
      </motion.span>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl px-6 py-32 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
        >
          <Sparkles className="h-3 w-3" />
          Engineering Excellence
        </motion.div>

        {/* Cursive intro */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-script text-2xl text-zinc-400 mb-2 tracking-wide"
          style={{ fontFamily: "var(--font-script), 'Alex Brush', cursive" }}
        >
          Hello, I&apos;m
        </motion.p>

        {/* Main Cursive Headline */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-6xl leading-tight text-white sm:text-7xl lg:text-9xl"
            style={{ fontFamily: "var(--font-script), 'Alex Brush', cursive" }}
          >
            Aditya Tiwari
          </motion.h1>

          {/* Ink underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 1, ease: "circInOut" }}
            className="absolute -bottom-3 left-1/2 h-[3px] w-48 -translate-x-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, oklch(0.60 0.18 270), oklch(0.70 0.12 350) 60%, transparent)",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Sans-serif role line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.45em] text-zinc-500"
        >
          Full‑Stack Engineer · AI/ML Specialist
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 md:text-xl"
        >
          I architect{" "}
          <span className="text-white">intelligent systems</span> and
          <span className="text-white"> scalable digital experiences</span> with technical
          precision and creative intuition.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 active:scale-95"
          >
            Explore Projects
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold text-white transition-all hover:border-primary/30 hover:bg-white/10 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-24 flex items-center gap-8 text-zinc-500"
        >
          {[
            { icon: Github, href: "https://github.com/AdityaTiwari49" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-tiwari-1757b732b" },
            { icon: Mail, href: "mailto:adityatiwari@example.com" },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" className="transition-colors hover:text-primary">
              <item.icon className="h-5 w-5" />
            </a>
          ))}
          <div className="h-5 w-[1px] bg-zinc-800" />
          <a href="/resume.pdf" download className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-primary">
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-800 to-transparent" />
      </motion.div>
    </section>
  )
}
