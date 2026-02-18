"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Public Relation Executive",
    org: "Abhyudaya Club",
    period: "Sep 2025 - Present",
    description:
      "Managing public relations, event coordination, and outreach for the club.",
  },
  {
    type: "work",
    title: "Sponsorship Manager",
    org: "The Sportify: IIT Madras BS Degree Sports Society",
    period: "Mar 2025 - Jan 2026",
    description:
      "Led sponsorship acquisition, partnership negotiations, and brand collaborations for sports events.",
  },
  {
    type: "work",
    title: "Open Source Contributor",
    org: "Open Source Connect",
    period: "Aug 2025 - Oct 2025",
    description:
      "Contributed to open source projects, reviewed pull requests, and collaborated with the developer community.",
  },
  {
    type: "work",
    title: "Web Development Intern",
    org: "SkillCraft Technology",
    period: "Aug 2025 - Sep 2025",
    description:
      "Built and scaled web solutions in a professional environment, contributed to frontend and backend development.",
  },
]

const education = [
  {
    type: "edu",
    title: "Bachelor of Science - Data Science",
    org: "Indian Institute of Technology, Madras",
    period: "Sep 2024 - Mar 2028",
    description:
      "Pursuing BS in Data Science with focus on statistics, ML, and data engineering.",
  },
  {
    type: "edu",
    title: "BTech - AI & Machine Learning",
    org: "GL Bajaj Institute of Technology and Management",
    period: "Sep 2024 - Jul 2028",
    description:
      "Studying artificial intelligence, machine learning, deep learning, and software engineering fundamentals.",
  },
]

function TimelineItem({
  item,
  index,
  isInView,
}: {
  item: (typeof experiences)[0]
  index: number
  isInView: boolean
}) {
  const isWork = item.type === "work"

  return (
    <motion.div
      initial={{ opacity: 0, x: isWork ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="relative flex gap-5"
    >
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            isWork
              ? "border-accent/40 bg-accent/10 text-accent"
              : "border-beige/40 bg-beige/10 text-beige"
          }`}
        >
          {isWork ? (
            <Briefcase className="h-4 w-4" />
          ) : (
            <GraduationCap className="h-4 w-4" />
          )}
        </div>
        <div className="w-px flex-1 bg-border/50" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="text-xs font-medium text-accent">{item.period}</span>
        <h3
          className="mt-1 text-base font-semibold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {item.title}
        </h3>
        <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/70">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background."
      className="bg-secondary/30"
    >
      <div ref={ref} className="grid gap-12 md:grid-cols-2">
        {/* Experience */}
        <div>
          <h3
            className="mb-8 flex items-center gap-2 text-lg font-semibold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Briefcase className="h-5 w-5 text-accent" />
            Experience
          </h3>
          <div>
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.title + exp.org}
                item={exp}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3
            className="mb-8 flex items-center gap-2 text-lg font-semibold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <GraduationCap className="h-5 w-5 text-accent" />
            Education
          </h3>
          <div>
            {education.map((edu, i) => (
              <TimelineItem
                key={edu.title + edu.org}
                item={edu}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
