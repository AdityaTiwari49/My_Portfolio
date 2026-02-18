"use client"

import { Linkedin, Mail, Github } from "lucide-react"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/aditya-tiwari-1757b732b",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:aditiwari327@gmail.com",
    label: "Email",
  },
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-hero-bg py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div>
          <a
            href="#"
            className="text-sm font-bold text-hero-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-accent">{"<"}</span>
            Aditya Tiwari
            <span className="text-accent">{" />"}</span>
          </a>
          <p className="mt-1 text-xs text-hero-foreground/30">
            Designed & built with care.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-hero-foreground/40 transition-all duration-200 hover:bg-hero-foreground/5 hover:text-accent"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-hero-foreground/30">
          {`\u00A9 ${new Date().getFullYear()} Aditya Tiwari. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
