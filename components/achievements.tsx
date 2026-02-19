"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Award, Shield, Code2, Cpu, Sparkles, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Ideathon 2.0 Runner-Up",
    org: "Abhyudaya",
    description: "Secured top honors among 100+ teams with a disruptive AI-driven architectural solution.",
    color: "oklch(0.60 0.18 270)",
  },
  {
    icon: Shield,
    title: "Google Solution Challenge",
    org: "GDG Global",
    description: "Developing technology for social impact as part of Google's flagship global innovation program.",
    color: "oklch(0.70 0.12 350)",
  },
  {
    icon: Sparkles,
    title: "Build With Gemini",
    org: "Google AI",
    description: "Recognized for prototyping and implementing high-performance generative AI workflows.",
    color: "oklch(0.65 0.15 160)",
  },
  {
    icon: Cpu,
    title: "Synergix Technical Excellence",
    org: "Synergix Hub",
    description: "Awarded for exceptional technical contributions and consistent project innovation.",
    color: "oklch(0.60 0.18 270)",
  },
  {
    icon: Award,
    title: "Consistently Finalist",
    org: "Various Hackathons",
    description: "Achieved finalist status in over 6 major hackathons through rigorous engineering and design.",
    color: "oklch(0.75 0.15 55)",
  },
  {
    icon: Code2,
    title: "Core Certifications",
    org: "HackerRank",
    description: "Validated expertise in Python and SQL through specialized technical assessments.",
    color: "oklch(0.70 0.12 350)",
  },
]

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id="achievements"
      title="Recognition of Excellence"
      subtitle="A collection of milestones that validate my commitment to innovation and technical precision."
    >
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="glass-card group relative p-10 rounded-[2.5rem] border border-zinc-200/50 hover:border-primary/30 flex flex-col justify-between"
          >
            {/* Background Glow */}
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-[0.08]"
              style={{ background: item.color }}
            />

            <div className="relative z-10">
              <div
                className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10"
                style={{ color: item.color }}
              >
                <item.icon className="h-7 w-7" />
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-primary transition-colors">
                  {item.org}
                </p>
                <h3 className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            <p className="relative z-10 mt-8 text-sm font-medium leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
