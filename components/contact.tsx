"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Mail, Linkedin, Send, Download, MapPin } from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:aditiwari327@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.email}`
    window.open(mailtoLink)
  }

  return (
    <SectionWrapper
      id="contact"
      title="Initiate a Collaboration"
      subtitle="Ready to transform complex challenges into intelligent solutions? Let's discuss your next breakthrough."
      className="bg-zinc-950"
    >
      {/* Background orange blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div ref={ref} className="grid gap-20 lg:grid-cols-5 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-2 space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter text-white">
              {"Let's architect the future."}
            </h3>
            <p className="text-lg font-medium leading-relaxed text-zinc-400">
              I'm always seeking opportunities to apply my expertise in <span className="text-white font-bold">AI integration and full-stack engineering</span> to projects that demand innovation and scalability.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "aditiwari327@gmail.com", href: "mailto:aditiwari327@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "Aditya Tiwari", href: "https://www.linkedin.com/in/aditya-tiwari-1757b732b" },
              { icon: MapPin, label: "Location", value: "Delhi, India", href: null },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href || "#"}
                className={`group flex items-center gap-5 p-5 rounded-[2rem] border transition-all duration-300 ${item.href ? "border-white/5 bg-white/[0.02] hover:border-orange-500/30 hover:bg-white/[0.04]" : "border-white/5 bg-white/[0.01] cursor-default"}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-orange-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-400 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95"
          >
            <Download className="h-4 w-4" />
            Download Portfolio
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-3"
        >
          <div className="glass-card p-10 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full rounded-[1.5rem] border border-white/5 bg-white/5 p-5 text-sm font-medium text-white placeholder:text-zinc-600 transition-all focus:border-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-500/5 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full rounded-[1.5rem] border border-white/5 bg-white/5 p-5 text-sm font-medium text-white placeholder:text-zinc-600 transition-all focus:border-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-500/5 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 ml-2">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="w-full resize-none rounded-[1.5rem] border border-white/5 bg-white/5 p-5 text-sm font-medium text-white placeholder:text-zinc-600 transition-all focus:border-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-500/5 shadow-sm"
                  placeholder="Describe your vision and requirements..."
                />
              </div>
              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-[1.5rem] bg-orange-500 py-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/20"
              >
                <span className="relative z-10">Transmit Message</span>
                <Send className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
