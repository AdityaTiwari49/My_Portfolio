"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "Matplotlib", level: 80 },
      { name: "Computer Vision", level: 65 },
      { name: "Model Integration", level: 75 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Django", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 65 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "DSA (C++)", level: 80 },
      { name: "Database Design", level: 75 },
      { name: "Automation", level: 70 },
      { name: "Linux", level: 65 },
    ],
  },
]

function SkillBar({
  name,
  level,
  delay,
  isInView,
}: {
  name: string
  level: number
  delay: number
  isInView: boolean
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="The tools and technologies I use to bring ideas to life."
      className="bg-secondary/30"
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.12, ease: "easeOut" }}
            className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20"
          >
            <h3
              className="mb-5 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {cat.title}
            </h3>
            <div className="space-y-4">
              {cat.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIndex * 0.12 + skillIndex * 0.06}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
