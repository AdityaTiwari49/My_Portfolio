"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Brain, Rocket, Code2, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Mastery",
    description: "Building resilient architectures from database schema to interface design.",
    color: "oklch(0.60 0.18 270)",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Embedding intelligence into workflows using state-of-the-art models.",
    color: "oklch(0.70 0.12 350)",
  },
  {
    icon: Globe,
    title: "Scalable Systems",
    description: "Designing for growth with high-performance backend infrastructures.",
    color: "oklch(0.65 0.15 160)",
  },
  {
    icon: Rocket,
    title: "Rapid Execution",
    description: "Turning complex requirements into production-ready software, fast.",
    color: "oklch(0.75 0.15 55)",
  },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id="about"
      title="Strategic Engineering"
      subtitle="A fusion of technical rigor and strategic thinking to solve high-impact challenges."
    >
      <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-3 space-y-8"
        >
          {/* Cursive artistic pull-quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative pl-6 border-l-2 border-primary/30"
          >
            <p
              className="text-3xl leading-snug text-primary/80"
              style={{ fontFamily: "var(--font-script), 'Alex Brush', cursive" }}
            >
              &ldquo;Vision meets execution&rdquo;
            </p>
          </motion.blockquote>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              Bridging the gap between <span className="text-primary italic">vision</span> and <span className="text-primary italic">execution</span>.
            </h3>
            <p className="text-lg leading-relaxed text-zinc-500">
              I am a specialized software engineer dedicated to building high-performance systems.
              My expertise lies at the intersection of <span className="text-foreground font-semibold">AI/ML integration</span>
              and <span className="text-foreground font-semibold">robust backend architectures</span>.
            </p>
            <p className="text-lg leading-relaxed text-zinc-500">
              Currently pursuing my <span className="text-foreground font-semibold">B.S. in Data Science at IIT Madras</span>,
              I bring a data-driven mindset to every project I architect.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {["Next.js 15", "Python Pro", "AI/ML", "Cloud Architecture"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-foreground shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="glass-card group p-6 flex flex-col justify-between"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 transition-transform duration-500 group-hover:scale-110"
                style={{ color: item.color }}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                <p className="text-xs leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
