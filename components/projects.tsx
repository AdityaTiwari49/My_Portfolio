"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    description:
      "An intelligent resume parsing and analysis tool built with Python, NLP, and Scikit-Learn that extracts key skills, matches job descriptions, and provides actionable feedback.",
    tags: ["Python", "Scikit-Learn", "NLP", "Flask"],
  },
  {
    title: "Smart Attendance System",
    description:
      "Computer vision-based attendance system using face recognition with real-time detection, automatic logging, and Django-powered admin dashboard.",
    tags: ["Python", "OpenCV", "Django", "Computer Vision"],
  },
  {
    title: "Full Stack Task Manager",
    description:
      "A production-ready task management application with RESTful APIs, user authentication, CRUD operations, and responsive UI built with Django and React.",
    tags: ["Django", "React", "REST API", "PostgreSQL"],
  },
  {
    title: "ML Model Dashboard",
    description:
      "Interactive dashboard for training, visualizing, and comparing multiple ML models with real-time metrics, data visualization using Matplotlib, and model export functionality.",
    tags: ["Python", "Matplotlib", "Scikit-Learn", "Streamlit"],
  },
  {
    title: "Automated Workflow Engine",
    description:
      "An intelligent automation framework that chains AI models with web scraping and data pipelines, reducing manual processing time by 70%.",
    tags: ["Python", "Automation", "API Integration", "Celery"],
  },
  {
    title: "E-Commerce Backend API",
    description:
      "Scalable RESTful API for e-commerce platform with user management, product catalog, cart system, and payment integration using Django REST Framework.",
    tags: ["Django", "DRF", "SQL", "JWT Auth"],
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A selection of projects that showcase my skills and passion."
    >
      <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative overflow-hidden rounded-xl glass transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30"
          >
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3
                  className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-1">
                  <button
                    aria-label="View on GitHub"
                    className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="View live demo"
                    className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:bg-accent/10 group-hover:text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover glow */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/8" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
