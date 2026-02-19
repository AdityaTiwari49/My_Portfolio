"use client"

import { Linkedin, Mail, Github, ArrowUp, Download } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/AdityaTiwari49", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-tiwari-1757b732b", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aditiwari327@gmail.com", label: "Email" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-white/5 bg-zinc-950 py-24 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-full max-w-4xl rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:items-end">

          <div className="space-y-8 text-center lg:text-left">
            <a href="#" className="inline-flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black font-black text-lg shadow-lg shadow-white/5">
                A
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">ADITYA TIWARI</span>
            </a>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-zinc-400">
              Architecting intelligent systems and scalable infrastructures with technical precision and design excellence.
            </p>
          </div>

          <div className="flex flex-col items-center gap-10 lg:items-end">
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-zinc-400 shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:scale-110"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
            >
              Back to peak
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-transparent transition-all group-hover:border-white group-hover:bg-white group-hover:text-black shadow-sm">
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </div>
            </button>

            <a
              href="/resume.pdf"
              download="Aditya_Tiwari_Portfolio.pdf"
              className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
            >
              Download Portfolio
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-transparent transition-all group-hover:border-white group-hover:bg-white group-hover:text-black shadow-sm">
                <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
              </div>
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-white/5 pt-12 gap-8 lg:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
            {`\u00A9 ${new Date().getFullYear()} ADITYA TIWARI. ENGINEERED FOR EXCELLENCE.`}
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {["Next.js 15", "Tailwind 4", "Framer Motion"].map((tech) => (
              <span key={tech} className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
