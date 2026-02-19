"use client"

import { useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { ExternalLink, Github, Folder, Layers, Cpu, Code2 } from "lucide-react"

const projects = [
  {
    title: "AI Resume Analyzer",
    description: "Intelligent resume parsing and matching system using NLP and Scikit-Learn to streamline recruitment workflows.",
    tags: ["Python", "Scikit", "NLP", "Flask"],
    icon: Cpu,
    color: "oklch(0.60 0.18 270)",
  },
  {
    title: "Smart Attendance",
    description: "Facial recognition-based attendance system with real-time detection and Django-powered administrative analytics.",
    tags: ["OpenCV", "Django", "PyTorch"],
    icon: Layers,
    color: "oklch(0.70 0.12 350)",
  },
  {
    title: "Task Engine Pro",
    description: "High-performance task management ecosystem with persistent data layers and real-time collaboration features.",
    tags: ["React", "Django", "Redis"],
    icon: Code2,
    color: "oklch(0.65 0.15 160)",
  },
  {
    title: "ML Analytics Hub",
    description: "Holistic dashboard for machine learning lifecycle management, featuring visualization and model export.",
    tags: ["Matplotlib", "Sklearn", "Streamlit"],
    icon: Folder,
    color: "oklch(0.60 0.18 270)",
  },
  {
    title: "Automated Pipeline",
    description: "Data orchestration framework chaining AI models with web scraping for hyper-efficient data processing.",
    tags: ["Python", "Celery", "Scraping"],
    icon: Cpu,
    color: "oklch(0.75 0.15 55)",
  },
  {
    title: "Commerce API",
    description: "Robust e-commerce backend infrastructure with tiered authentication and complex inventory management.",
    tags: ["Django", "DRF", "PostgreSQL"],
    icon: Layers,
    color: "oklch(0.70 0.12 350)",
  },
]

function ProjectCard({ project, index, isInView }: { project: any, index: number, isInView: boolean }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { damping: 30, stiffness: 200 })
  const mouseYSpring = useSpring(y, { damping: 30, stiffness: 200 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[450px] w-full perspective-1000"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        whileHover={{
          scale: 1.02,
          z: 50,
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)"
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          opacity: { duration: 0.8, delay: index * 0.1 }
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 z-10"
      >
        <div
          className="glass-card absolute inset-0 rounded-[2.5rem] border border-zinc-200/50 p-10 flex flex-col justify-between overflow-hidden bg-white/40 transition-[border-color,background-color] duration-500 group-hover:border-primary/40 group-hover:bg-white/60"
        >
          {/* Background Accent */}
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-[0.08]"
            style={{ background: project.color }}
          />

          <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
            <div
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10"
              style={{ color: project.color }}
            >
              <project.icon className="h-8 w-8" />
            </div>

            <h3 className="text-3xl font-black tracking-tighter text-foreground mb-4 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
            <div className="flex flex-wrap gap-2.5 mb-10">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 border border-zinc-200/60 rounded-full bg-white group-hover:border-primary/20 group-hover:text-primary transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:bg-foreground hover:text-white hover:border-foreground hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionWrapper
      id="projects"
      title="Engineering Excellence"
      subtitle="A showcase of technical challenges solved through strategic architectural decisions and intelligent model integration."
    >
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
        ))}
      </div>
    </SectionWrapper>
  )
}
