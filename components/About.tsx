// About — asymmetric editorial layout with oversized decorative numeral.
// Follows impeccable skill: left-aligned, varied spacing, no card wrapping.

const features = [
  'Family-Friendly',
  'Kids Corner',
  'Fresh Daily Pastries',
  'Specialty Coffee',
  'Great Wi-Fi',
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-parchment py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 items-start">

          {/* Left column — section marker + decorative numeral */}
          <div className="md:pt-3">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-warm mb-5">
              Our Story
            </p>
            <div
              aria-hidden="true"
              className="font-display text-cream leading-none select-none"
              style={{ fontSize: 'clamp(6rem, 18vw, 14rem)' }}
            >
              01
            </div>
          </div>

          {/* Right column — content */}
          <div>
            <h2
              className="font-display text-espresso mb-10 leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Where Fredericton<br />Slows Down
            </h2>

            <div className="space-y-6 font-body font-light text-warm leading-relaxed max-w-[65ch]"
                 style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)' }}>
              <p>
                We opened Vars &amp; Java because every neighbourhood deserves a place
                where strangers become regulars and regulars feel like family. It started
                with great coffee, a few good books, and an honest belief that a café
                should feel like someone&apos;s home.
              </p>
              <p>
                You&apos;ll find us at the corner of Kimble Drive — a warm room with good
                light, the smell of fresh-ground coffee, and a little corner stocked with
                books and toys where the kids can be kids while the grown-ups actually
                enjoy their cup.
              </p>
              <p>
                Everything here is made with intention: our espresso is pulled to order,
                our pastries arrive fresh each morning, and the welcome is always genuine.
              </p>
            </div>

            {/* Feature tags */}
            <div className="mt-12 pt-8 border-t border-espresso/10 flex flex-wrap gap-x-8 gap-y-3">
              {features.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-[11px] tracking-[0.25em] uppercase text-warm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
