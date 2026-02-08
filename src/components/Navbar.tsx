'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 navbar-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="font-semibold text-lg text-foreground hover:text-accent transition-colors">
            Bernard Onuh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about" className="text-muted hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/experience" className="text-muted hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="/projects" className="text-muted hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-muted hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-foreground focus:outline-none focus:text-foreground"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/about" 
                className="block text-muted hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/experience" 
                className="block text-muted hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="/projects" 
                className="block text-muted hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className="block text-muted hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}