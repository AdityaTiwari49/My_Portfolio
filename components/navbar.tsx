"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, ShieldCheck } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection("")
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 transition-all duration-500 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`mx-auto max-w-5xl rounded-full border transition-all duration-500 pointer-events-auto ${scrolled || mobileOpen
          ? "border-zinc-200/60 bg-white/70 backdrop-blur-xl px-8 py-3 shadow-lg shadow-black/[0.03]"
          : "border-white/10 bg-transparent px-4 py-4"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="group flex items-center gap-3">
            <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 ${scrolled || mobileOpen ? "bg-foreground text-background" : "bg-white text-black"}`}>
              <span className="text-xl font-black">A</span>
              {/* Logo Glow */}
              <div className={`absolute inset-0 rounded-xl opacity-0 blur-lg transition-opacity group-hover:opacity-10 ${scrolled || mobileOpen ? "bg-foreground" : "bg-white"}`} />
            </div>
            <div className="hidden flex-col sm:flex">
              <span
                className={`text-xl transition-colors duration-500 leading-tight ${scrolled || mobileOpen ? "text-foreground" : "text-white"}`}
                style={{ fontFamily: "var(--font-script), 'Alex Brush', cursive" }}
              >
                Aditya Tiwari
              </span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-zinc-400 uppercase">Strategic Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${activeSection === link.href.slice(1)
                    ? "text-primary"
                    : scrolled || mobileOpen ? "text-zinc-500 hover:text-foreground" : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {link.label}
                  {/* Indicator */}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className={`h-4 w-[1px] transition-colors duration-500 ${scrolled || mobileOpen ? "bg-zinc-200" : "bg-white/10"}`} />

            <a
              href="/resume.pdf"
              download
              className={`group flex items-center gap-2 rounded-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-all hover:scale-105 active:scale-95 ${scrolled || mobileOpen ? "bg-foreground text-background" : "bg-white text-black"}`}
            >
              <Download className="h-3 w-3" />
              Resume
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all active:scale-90 ${scrolled || mobileOpen ? "bg-zinc-100 text-foreground" : "bg-white/10 text-white"}`}
              aria-label="Toggle menu"
            >
              <div className="relative h-4 w-4">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 block h-[1.5px] w-4 bg-current transition-transform"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-[7px] left-0 block h-[1.5px] w-4 bg-current transition-opacity"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 12 }}
                  className="absolute top-0 left-0 block h-[1.5px] w-4 bg-current transition-transform"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:hidden overflow-hidden pt-6"
            >
              <div className="grid grid-cols-2 gap-3 pb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-center rounded-2xl border p-5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${activeSection === link.href.slice(1)
                      ? "border-primary/20 bg-primary/5 text-primary shadow-sm"
                      : "border-zinc-100 bg-white text-zinc-500"
                      }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="/resume.pdf"
                download
                className="mb-6 flex items-center justify-center gap-3 rounded-2xl bg-foreground py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-background transition-all active:scale-95 shadow-lg shadow-black/10"
              >
                <Download className="h-4 w-4" />
                Download Portfolio PDF
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
