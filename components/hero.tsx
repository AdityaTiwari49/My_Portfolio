"use client"

import { motion } from "framer-motion"
import { ArrowDown, Send } from "lucide-react"

function FloatingTriangle({
  size,
  x,
  y,
  delay,
  duration,
  opacity,
  rotation,
}: {
  size: number
  x: string
  y: string
  delay: number
  duration: number
  opacity: number
  rotation: number
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, rotate: rotation }}
      animate={{
        opacity: [0, opacity, opacity, 0],
        rotate: [rotation, rotation + 15, rotation - 10, rotation],
        y: [0, -30, 10, 0],
        x: [0, 10, -10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="50,10 90,85 10,85"
          stroke="var(--orange-glow)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  )
}

const triangles = [
  { size: 60, x: "10%", y: "15%", delay: 0, duration: 8, opacity: 0.25, rotation: 0 },
  { size: 40, x: "85%", y: "10%", delay: 1, duration: 10, opacity: 0.2, rotation: 30 },
  { size: 80, x: "70%", y: "60%", delay: 2, duration: 12, opacity: 0.15, rotation: 45 },
  { size: 50, x: "20%", y: "70%", delay: 0.5, duration: 9, opacity: 0.25, rotation: 15 },
  { size: 35, x: "50%", y: "20%", delay: 3, duration: 11, opacity: 0.15, rotation: 60 },
  { size: 70, x: "40%", y: "80%", delay: 1.5, duration: 10, opacity: 0.12, rotation: -20 },
  { size: 45, x: "90%", y: "40%", delay: 2.5, duration: 8, opacity: 0.2, rotation: 10 },
  { size: 55, x: "5%", y: "45%", delay: 0.8, duration: 9, opacity: 0.15, rotation: -30 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-bg noise-overlay">
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, oklch(0.72 0.17 55 / 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, oklch(0.72 0.17 55 / 0.04) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, oklch(0.20 0.005 260 / 0.5) 0%, transparent 80%)",
        }}
      />

      {/* Orange glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full blur-[140px]"
        style={{
          background: "oklch(0.72 0.17 55 / 0.08)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 h-56 w-56 rounded-full blur-[120px]"
        style={{
          background: "oklch(0.72 0.17 55 / 0.06)",
          animation: "glow-pulse 5s ease-in-out infinite 1s",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.95 0 0 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0 0 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Triangles */}
      {triangles.map((t, i) => (
        <FloatingTriangle key={i} {...t} />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent/80">
            AI / ML Enthusiast & Full Stack Developer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mb-6 text-5xl font-extrabold uppercase leading-none tracking-tight text-hero-foreground md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-balance">
            ADITYA{" "}
            <span className="relative inline-block">
              TIWARI
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-hero-foreground/50 md:text-lg"
        >
          Building intelligent, scalable, and production-ready systems at the
          intersection of robust backend engineering and practical AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowDown className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-hero-foreground/15 px-7 py-3.5 text-sm font-semibold text-hero-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent/5"
          >
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-hero-foreground/15 px-7 py-3.5 text-sm font-semibold text-hero-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent hover:bg-accent/5"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-hero-foreground/30 tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-hero-foreground/15 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
