"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Public Relation Executive",
    org: "Abhyudaya Club",
    period: "Sep 2025 - Present",
    description: "Spearheading public relations campaigns, coordinating high-impact events, and expanding club outreach strategies.",
    color: "oklch(0.60 0.18 270)",
  },
  {
    type: "work",
    title: "Sponsorship Manager",
    org: "The Sportify: IIT Madras BS Degree Sports Society",
    period: "Mar 2025 - Jan 2026",
    description: "Orchestrated sponsorship acquisitions and brand collaborations for major sports initiatives at IIT Madras.",
    color: "oklch(0.70 0.12 350)",
  },
  {
    type: "work",
    title: "Open Source Contributor",
    org: "Open Source Connect",
    period: "Aug 2025 - Oct 2025",
    description: "Engaging in global developer communities through code contributions and collaborative peer reviews.",
    color: "oklch(0.65 0.15 160)",
  },
  {
    type: "work",
    title: "Web Development Intern",
    org: "SkillCraft Technology",
    period: "Aug 2025 - Sep 2025",
    description: "Developed and optimized enterprise-grade web solutions focusing on scalable frontend and backend architectures.",
    color: "oklch(0.60 0.18 270)",
  },
] as const

const education = [
  {
    type: "edu",
    title: "Bachelor of Science - Data Science",
    org: "Indian Institute of Technology, Madras",
    period: "Sep 2024 - Mar 2028",
    description: "Deep-diving into advanced statistical modeling, machine learning, and comprehensive data engineering systems.",
    color: "oklch(0.60 0.18 270)",
  },
  {
    type: "edu",
    title: "BTech - AI & Machine Learning",
    org: "GL Bajaj Institute",
    period: "Sep 2024 - Jul 2028",
    description: "Rigorous academic focus on deep learning architectures, software engineering, and intelligent systems design.",
    color: "oklch(0.70 0.12 350)",
  },
] as const

interface TimelineItemData {
  type: "work" | "edu"
  title: string
  org: string
  period: string
  description: string
  color: string
}

function TimelineItem({ item, index, isInView }: { item: TimelineItemData, index: number, isInView: boolean }) {
  const isWork = item.type === "work"

  return (
    <motion.div
      initial={{ opacity: 0, x: isWork ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative flex gap-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div
          className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-zinc-200/50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:shadow-md"
          style={{ color: item.color }}
        >
          {isWork ? <Briefcase className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}

          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-2xl bg-current opacity-0 blur-lg transition-opacity group-hover:opacity-[0.05]" />
        </div>
        <div className="w-[2px] flex-1 bg-gradient-to-b from-zinc-200 to-transparent my-3" />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4 pt-1.5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {item.period}
          </span>
          <div className="h-1 w-1 rounded-full bg-zinc-200 hidden sm:block" />
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5" />
            {item.org}
          </span>
        </div>

        <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="max-w-xl text-sm font-medium leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id="experience"
      title="The Journey So Far"
      subtitle="A chronological bridge between academic rigor and professional execution."
    >
      <div ref={ref} className="grid gap-20 lg:grid-cols-2">
        {/* Experience Side */}
        <div className="space-y-16">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-black tracking-tighter text-foreground">Professional Path</h3>
          </div>
          <div className="relative">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} item={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Education Side */}
        <div className="space-y-16">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-black tracking-tighter text-foreground">Academic Core</h3>
          </div>
          <div className="relative">
            {education.map((edu, i) => (
              <TimelineItem key={i} item={edu} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
