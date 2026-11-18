'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/mockups/Mockups'
import { SITE } from '@/lib/config'

const navLinks = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Comparativo', href: '#comparativo' },
  { label: 'Planos', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4">
      <div
        className="mx-auto max-w-[680px] rounded-2xl"
        style={{
          background: 'rgba(8,8,12,0.82)',
          border: '1px solid rgba(255,255,255,0.09)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        <div className="flex items-center justify-between h-12 pl-4 pr-2">
          <a href="/" className="flex items-center gap-2 shrink-0" aria-label="EchoChat">
            <Logo size={24} />
            <span className="hidden sm:block text-sm font-semibold text-white tracking-tight">EchoChat</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={SITE.signupUrl} className="btn-lavender text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
              Teste Grátis
            </a>
            <a href={SITE.loginUrl} className="hidden sm:block btn-outline-dark text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap">
              Login
            </a>
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="p-3 flex flex-col">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-3 text-sm text-gray-200 hover:text-white rounded-lg hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a href={SITE.loginUrl} className="px-3 py-3 text-sm text-gray-200">Login</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
