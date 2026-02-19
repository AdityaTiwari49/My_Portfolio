"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-32 md:py-48 grain-overlay ${className}`}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-accent/3 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-start gap-4">
          {/* Italic section label with accent dash */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center gap-3"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary/80 italic">
              {id.replace("-", " ")}
            </span>
            <div className="h-[1px] w-6 bg-primary/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col gap-6 relative"
          >
            {/* Large watermark letter — artistic backdrop */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-4 text-[7rem] font-black leading-none select-none"
              style={{ opacity: 0.025, color: "oklch(0.60 0.18 270)" }}
            >
              {id.charAt(0).toUpperCase()}
            </span>

            <h2 className="text-4xl font-black tracking-tighter text-foreground md:text-6xl lg:text-7xl">
              {title}
            </h2>
            {subtitle && (
              <p className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl">
                {subtitle}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
            className="h-[1px] w-24 bg-gradient-to-r from-primary to-transparent"
            style={{ transformOrigin: "left" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
