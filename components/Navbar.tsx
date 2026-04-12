'use client'
// Adapted from 21st.dev Header 1 — sticky with useScroll hook, backdrop blur on scroll,
// animated mobile menu toggle with portal-free implementation.

import React from 'react'
import Link from 'next/link'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const scrolled = useScroll(60)
  const [open, setOpen] = React.useState(false)

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/90 supports-[backdrop-filter]:bg-cream/80 backdrop-blur-md border-b border-espresso/10'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-espresso text-base tracking-[0.12em] uppercase hover:opacity-70 transition-opacity duration-200"
          onClick={() => setOpen(false)}
        >
          Vars &amp; Java
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-body text-xs tracking-[0.2em] uppercase text-espresso/60 hover:text-espresso transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#visit"
            className="font-body text-xs tracking-[0.15em] uppercase bg-espresso text-cream px-6 py-3 hover:bg-espresso-light transition-colors duration-200"
          >
            Come In
          </Link>
        </div>

        {/* Mobile hamburger — animated toggle icon (from 21st.dev MenuToggleIcon pattern) */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 flex flex-col justify-center items-center gap-[5px] w-10 h-10"
        >
          <span
            className={cn(
              'block w-5 h-px bg-espresso transition-all duration-300',
              open && 'rotate-45 translate-y-[6px]',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-espresso transition-all duration-300',
              open && 'opacity-0 scale-x-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-espresso transition-all duration-300',
              open && '-rotate-45 -translate-y-[6px]',
            )}
          />
        </button>
      </nav>

      {/* Mobile menu — slides down from header */}
      <div
        className={cn(
          'md:hidden bg-cream/95 supports-[backdrop-filter]:bg-cream/90 backdrop-blur-md border-b border-espresso/10 overflow-hidden transition-all duration-300 ease-out',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-[0.2em] uppercase text-espresso/70 hover:text-espresso transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#visit"
            onClick={() => setOpen(false)}
            className="font-body text-sm tracking-[0.15em] uppercase bg-espresso text-cream px-6 py-3 text-center hover:bg-espresso-light transition-colors duration-200 mt-2"
          >
            Come In
          </Link>
        </div>
      </div>
    </header>
  )
}
