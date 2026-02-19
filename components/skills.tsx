"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Code2, BrainCircuit, Globe, Wrench, Database } from "lucide-react"

const skillCategories = [
  {
    title: "AI / Machine Learning",
    icon: BrainCircuit,
    color: "oklch(0.60 0.18 270)",
    description: "Building intelligent systems that learn and adapt.",
    skills: ["Scikit-Learn", "TensorFlow", "Computer Vision", "Model Integration", "NLP"],
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Backend Engineering",
    icon: Database,
    color: "oklch(0.70 0.12 350)",
    description: "Architecting scalable and secure server-side logic.",
    skills: ["Django", "REST APIs", "SQL", "Database Design", "System Design"],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Core Languages",
    icon: Code2,
    color: "oklch(0.65 0.15 160)",
    description: "Foundational programming with optimization in mind.",
    skills: ["Python", "C++", "JavaScript", "DSA"],
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "oklch(0.60 0.18 270)",
    description: "Designing modern, responsive user interfaces.",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Infrastructure",
    icon: Wrench,
    color: "oklch(0.75 0.15 55)",
    description: "Ensuring reliability and performance throughout deployment.",
    skills: ["Git", "Linux", "Docker", "Automation"],
    className: "md:col-span-1 md:row-span-2",
  },
]

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id="skills"
      title="Foundations of Innovation"
      subtitle="A curated selection of technologies I've mastered to bridge the gap between complex algorithms and user-centric applications."
    >
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px]"
      >
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`glass-card group relative overflow-hidden p-8 flex flex-col justify-between rounded-[2rem] border border-zinc-200/50 hover:border-primary/40 ${cat.className}`}
          >
            {/* Hover Background Glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-10"
              style={{ background: cat.color }}
            />

            <div className="relative z-10 flex flex-col gap-6">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10"
                style={{ color: cat.color }}
              >
                <cat.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-3">{cat.title}</h3>
                <p className="text-sm font-medium text-zinc-500 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2.5 pt-6">
              {cat.skills.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 border border-zinc-200/60 rounded-full bg-white transition-all group-hover:border-primary/20 group-hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
