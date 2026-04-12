// Gallery — scroll-stacking animation using framer-motion.
// Cards stack on top of each other as you scroll through the section.

import { ImagesScrollingAnimation } from '@/components/ui/images-scrolling-animation'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-parchment">
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32">

        {/* Header */}
        <div className="mb-6">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-warm mb-3">
            The Atmosphere
          </p>
          <h2
            className="font-display text-espresso leading-[1.05]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            Come see for yourself
          </h2>
        </div>

      </div>

      {/* Scroll-stacking image animation */}
      <ImagesScrollingAnimation />

      {/* Caption */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <p className="font-body text-xs text-warm/50 text-center tracking-wide">
          440 Kimble Drive, Fredericton, NB &nbsp;·&nbsp; Open daily
        </p>
      </div>
    </section>
  )
}
