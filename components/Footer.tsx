// Footer — adapted from 21st.dev Footer 7 structure.
// Local business footer: address, hours, map link, nav, social, copyright.

import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'


const hours = [
  { days: 'Monday – Friday', hours: '7:00 AM – 5:00 PM' },
  { days: 'Saturday', hours: '8:00 AM – 5:00 PM' },
  { days: 'Sunday', hours: '9:00 AM – 4:00 PM' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Footer() {
  return (
    <footer id="visit" className="bg-espresso text-cream">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_1fr_auto] gap-12 md:gap-16">

          {/* Brand + address */}
          <div>
            <p className="font-display text-cream text-2xl tracking-wider mb-5">
              Vars &amp; Java
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-cream/40 mb-5">
              Café
            </p>

            <address className="not-italic font-body text-cream/60 leading-relaxed text-sm space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-cream/30 shrink-0" />
                <div>
                  440 Kimble Drive<br />
                  Fredericton, NB &nbsp;E3B 7G6<br />
                  Canada
                </div>
              </div>
            </address>

            <a
              href="https://maps.google.com/?q=440+Kimble+Dr,+Fredericton,+NB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-body text-xs tracking-[0.15em] uppercase text-gold hover:text-cream transition-colors duration-200"
            >
              Open in Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-3.5 h-3.5 text-cream/30" />
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-cream/40">
                Hours
              </p>
            </div>

            <dl className="space-y-3">
              {hours.map(({ days, hours: time }) => (
                <div key={days} className="flex justify-between items-baseline gap-6">
                  <dt className="font-body text-sm text-cream/50">{days}</dt>
                  <dd className="font-body text-sm text-cream/80 tabular-nums shrink-0">{time}</dd>
                </div>
              ))}
            </dl>

            <div className="flex items-center gap-2.5 mt-7">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sage" />
              </span>
              <span className="font-body text-xs text-cream/45">
                Open today · Closes 5 PM
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-body text-[11px] tracking-[0.25em] uppercase text-cream/40 mb-6">
              Navigate
            </p>
            <nav>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-body text-sm text-cream/50 hover:text-cream transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom bar — copyright + social */}
      <div className="border-t border-cream/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/25">
            © {new Date().getFullYear()} Vars &amp; Java Café. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/20">
            Fredericton, New Brunswick, Canada
          </p>
        </div>
      </div>

    </footer>
  )
}
