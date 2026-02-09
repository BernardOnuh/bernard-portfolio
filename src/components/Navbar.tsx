'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 navbar-blur border-b border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-lg text-foreground hover:text-accent transition-colors inline-flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="w-8 h-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nav-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#06B6D4' }} />
                  <stop offset="100%" style={{ stopColor: '#0891B2' }} />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#nav-bg)" />
              <text x="16" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">BO</text>
            </svg>
            Bernard Onuh
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm rounded-md transition-all duration-300 ${
                    isActive
                      ? 'text-accent font-medium'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              )
            })}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-foreground focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2.5 px-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-accent font-medium bg-accent/5 border-l-2 border-accent'
                      : 'text-muted hover:text-foreground hover:bg-card'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
