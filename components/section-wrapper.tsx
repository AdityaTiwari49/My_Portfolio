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
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 ${className}`}
    >
      {/* Subtle glow behind heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-40 w-80 -translate-x-1/2 rounded-full blur-[100px]"
        style={{ background: "oklch(0.72 0.17 55 / 0.04)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h2
            className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
              {subtitle}
            </p>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 h-0.5 w-16 rounded-full bg-accent"
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
        {children}
      </div>
    </section>
  )
}
