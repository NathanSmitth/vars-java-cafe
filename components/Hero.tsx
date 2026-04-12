// Hero — full-bleed editorial layout.
// Draws layout inspiration from 21st.dev's Hero Five (split content + images),
// reimagined as a pure-typography editorial hero for an independent café.
// Follows impeccable skill: left-aligned, asymmetric, no gradient text.

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream flex items-center overflow-hidden"
    >
      {/* Decorative background circle — off-screen right, parchment tone */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 w-[65vw] h-[65vw] max-w-4xl rounded-full bg-parchment opacity-60 pointer-events-none"
        style={{ transform: 'translate(30%, -50%)' }}
      />

      {/* Thin vertical accent line — left edge, barely visible */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-px bg-espresso/8 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">

          {/* Location eyebrow */}
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-warm mb-10">
            Fredericton, NB &nbsp;·&nbsp; 440 Kimble Drive
          </p>

          {/* Main display heading — Gloock at maximum scale */}
          <h1
            className="font-display text-espresso leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(4rem, 11vw, 9.5rem)' }}
          >
            Vars &amp; Java
          </h1>

          {/* CAFÉ label with extending rule */}
          <div className="flex items-center gap-6 mb-14">
            <span
              className="font-display text-espresso/55 tracking-[0.35em] uppercase shrink-0"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}
            >
              Café
            </span>
            <div className="flex-1 h-px bg-espresso/15 max-w-sm" />
          </div>

          {/* Tagline */}
          <p
            className="font-body text-warm leading-relaxed max-w-md mb-14"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: 300 }}
          >
            A cozy neighbourhood spot where Fredericton slows down,
            one cup at a time. Family-friendly, genuinely welcoming,
            and always worth the visit.
          </p>

          {/* Hours status + CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
              </span>
              <span className="font-body text-sm text-espresso/60 tracking-wide">
                Open today &nbsp;·&nbsp; Closes 5 PM
              </span>
            </div>

            <Link
              href="#visit"
              className="group font-body text-xs tracking-[0.2em] uppercase bg-espresso text-cream px-8 py-4 hover:bg-espresso-light transition-colors duration-200 flex items-center gap-3"
            >
              Find Us
              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-espresso">Scroll</span>
        <div className="w-px h-8 bg-espresso" />
      </div>
    </section>
  )
}
