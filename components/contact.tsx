"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { Mail, Linkedin, Send, Download, MapPin } from "lucide-react"

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
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
      title="Get In Touch"
      subtitle="Have a project in mind or just want to say hello? Let's connect."
      className="bg-secondary/30"
    >
      <div ref={ref} className="grid gap-10 md:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h3
              className="mb-4 text-lg font-semibold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {"Let's build something great together."}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {
                "I'm always open to collaborating on innovative AI projects, backend systems, and opportunities where technology can create meaningful, lasting impact."
              }
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:aditiwari327@gmail.com"
              className="group flex items-center gap-4 rounded-xl glass p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">
                  aditiwari327@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-tiwari-1757b732b"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl glass p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium text-foreground">
                  Aditya Tiwari
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl glass p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl glass p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                required
                className="w-full rounded-lg border border-glass-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
                className="w-full rounded-lg border border-glass-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                required
                className="w-full resize-none rounded-lg border border-glass-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              Send Message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
