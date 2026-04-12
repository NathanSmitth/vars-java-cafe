// Testimonials — horizontal CSS marquee, adapted from 21st.dev Marquee Card pattern.
// Uses pure CSS animation (no framer-motion) with mask gradient fade at edges.
// Reviews duplicated for seamless infinite loop. Pauses on hover.

import { reviews } from '@/data/reviews'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-xs">★</span>
      ))}
    </div>
  )
}

function ReviewCard({
  name,
  text,
  rating,
  detail,
}: {
  name: string
  text: string
  rating: number
  detail?: string
}) {
  return (
    <li
      className="shrink-0 w-[320px] md:w-[380px] bg-parchment p-8 flex flex-col gap-5"
      aria-label={`Review by ${name}`}
    >
      <StarRating count={rating} />

      <blockquote className="font-body font-light text-warm leading-relaxed text-[0.95rem] flex-1">
        &ldquo;{text}&rdquo;
      </blockquote>

      <footer className="flex items-center justify-between pt-4 border-t border-espresso/10">
        <div>
          <cite className="font-body text-sm font-medium text-espresso not-italic block">
            {name}
          </cite>
          {detail && (
            <span className="font-body text-xs text-warm/60">{detail}</span>
          )}
        </div>
        {/* Google icon mark */}
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-warm/30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      </footer>
    </li>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-warm mb-3">
          What People Say
        </p>
        <h2
          className="font-display text-espresso leading-[1.05]"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          Loved by the<br />neighbourhood
        </h2>
      </div>

      {/* Marquee — adapted from 21st.dev Marquee Card pattern */}
      <div
        className="marquee-track overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
        aria-label="Customer reviews"
      >
        <ul
          className="marquee-inner flex gap-6 w-max animate-marquee"
          style={
            {
              '--duration': '42s',
              paddingLeft: '1.5rem',
            } as React.CSSProperties
          }
        >
          {/* Render reviews twice for seamless loop */}
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} {...review} />
          ))}
        </ul>
      </div>
    </section>
  )
}
