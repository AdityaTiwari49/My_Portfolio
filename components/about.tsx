"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { MapPin, GraduationCap, Trophy, Briefcase } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "IIT Madras & GL Bajaj",
  },
  {
    icon: Trophy,
    label: "Hackathons",
    value: "10+ competed, 6+ finalist",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "Web Developer at SkillCraft",
  },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Turning AI ideas from experimentation into reliable, real-world solutions."
    >
      <div ref={ref} className="grid gap-10 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="leading-relaxed text-muted-foreground">
            {
              "I'm an AI & Machine Learning enthusiast passionate about building intelligent, scalable, and production-ready systems. My focus lies at the intersection of robust backend engineering and practical AI."
            }
          </p>
          <p className="leading-relaxed text-muted-foreground">
            {
              "I have hands-on experience across AI/ML development, model integration, automation workflows, and computer vision. On the engineering side, I specialize in backend development with Django, designing RESTful APIs, managing databases, and building scalable server-side logic."
            }
          </p>
          <p className="leading-relaxed text-muted-foreground">
            {
              "My strong foundation in Data Structures & Algorithms sharpens my problem-solving approach and helps me write clean, optimized, and maintainable code."
            }
          </p>
        </motion.div>

        {/* Highlight Cards - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              className="group glass rounded-xl p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <item.icon className="mb-3 h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
