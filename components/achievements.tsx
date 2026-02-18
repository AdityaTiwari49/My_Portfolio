"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Award, Shield, Code2, Cpu } from "lucide-react"

const achievements = [
  {
    icon: Award,
    title: "Runner-Up at Ideathon 2.0",
    org: "Abhyudaya",
    description:
      "Secured runner-up position out of 100+ competing teams with an innovative AI-powered solution.",
  },
  {
    icon: Shield,
    title: "GDG on Campus Solution Challenge",
    org: "Google Developer Groups",
    description:
      "Participated in the global Google Solution Challenge building technology for social good.",
  },
  {
    icon: Code2,
    title: "Build With Gemini",
    org: "Google",
    description:
      "Certificate of Participation in Prototype and Demo video submission of Build With Gemini program.",
  },
  {
    icon: Cpu,
    title: "Synergix Certificate",
    org: "Synergix",
    description:
      "Recognized for technical contributions and project excellence during the Synergix program.",
  },
  {
    icon: Award,
    title: "6+ Hackathon Finalist",
    org: "Various Organizers",
    description:
      "Reached the finals in more than 6 hackathons out of 10+ competitions, demonstrating consistent performance.",
  },
  {
    icon: Code2,
    title: "Python & SQL Certifications",
    org: "HackerRank",
    description:
      "Earned Python (Basic) and SQL (Basic) certificates validating core programming and database skills.",
  },
]

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper
      id="achievements"
      title="Achievements & Certifications"
      subtitle="Recognition and credentials that highlight my journey."
    >
      <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl glass p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/8"
          >
            {/* Hover glow */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />

            <div className="relative">
              <item.icon className="mb-4 h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
              <h3
                className="mb-1 text-base font-semibold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p className="mb-3 text-xs font-medium text-accent">{item.org}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
