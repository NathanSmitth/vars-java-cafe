'use client'
// Menu — tabs adapted from 21st.dev Animated Shadcn's Tabs.
// Uses @radix-ui/react-tabs with a JS-positioned sliding gold indicator
// on a deep espresso background. Items render as an editorial list.

import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { menuCategories, menuAddons } from '@/data/menu'
import { cn } from '@/lib/utils'

// Re-usable primitives (pattern from 21st.dev Animated Tabs)
const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('flex relative', className)}
    {...props}
  />
))
TabsList.displayName = 'TabsList'

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative px-5 py-3 font-body text-xs tracking-[0.2em] uppercase',
      'text-cream/40 transition-colors duration-200',
      'data-[state=active]:text-cream',
      'hover:text-cream/70',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cream/30',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('focus-visible:outline-none', className)}
    {...props}
  />
))
TabsContent.displayName = 'TabsContent'

// Sliding indicator — JS-positioned for smooth animation (21st.dev pattern)
function TabIndicator({ listRef }: { listRef: React.RefObject<HTMLDivElement> }) {
  const [style, setStyle] = React.useState({ left: 0, width: 0 })

  const update = React.useCallback(() => {
    if (!listRef.current) return
    const active = listRef.current.querySelector<HTMLElement>('[data-state="active"]')
    if (!active) return
    const listRect = listRef.current.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()
    requestAnimationFrame(() => {
      setStyle({
        left: activeRect.left - listRect.left,
        width: activeRect.width,
      })
    })
  }, [listRef])

  React.useEffect(() => {
    const timeout = setTimeout(update, 0)
    window.addEventListener('resize', update)
    const observer = new MutationObserver(update)
    if (listRef.current) {
      observer.observe(listRef.current, { attributes: true, subtree: true })
    }
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', update)
      observer.disconnect()
    }
  }, [update, listRef])

  return (
    <div
      className="absolute bottom-0 h-px bg-gold tab-indicator pointer-events-none"
      style={{ left: style.left, width: style.width }}
    />
  )
}

function MenuItemRow({
  name,
  description,
  price,
}: {
  name: string
  description?: string
  price: string
}) {
  return (
    <li className="flex items-baseline justify-between gap-6 py-4 border-b border-cream/8 last:border-0">
      <div className="flex-1 min-w-0">
        <span className="font-body font-medium text-cream text-sm block">{name}</span>
        {description && (
          <p className="font-body text-xs text-cream/45 mt-0.5 leading-snug">{description}</p>
        )}
      </div>
      <span className="font-body text-sm text-cream/60 tabular-nums shrink-0">{price}</span>
    </li>
  )
}

export default function Menu() {
  const listRef = React.useRef<HTMLDivElement>(null)

  return (
    <section id="menu" className="bg-espresso py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-cream/35 mb-3">
              What We Make
            </p>
            <h2
              className="font-display text-cream leading-none"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
            >
              The Menu
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm text-cream/35 text-right max-w-[220px] leading-relaxed">
            Gluten-free &amp; dairy-free<br />options available — just ask.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="coffee">
          {/* Tab list with sliding gold indicator */}
          <div className="relative border-b border-cream/10 mb-10">
            <TabsList ref={listRef as React.RefObject<HTMLDivElement>}>
              {menuCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.title}
                </TabsTrigger>
              ))}
              <TabIndicator listRef={listRef as React.RefObject<HTMLDivElement>} />
            </TabsList>
          </div>

          {/* Tab content */}
          {menuCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <ul className="max-w-2xl">
                {cat.items.map((item) => (
                  <MenuItemRow key={item.name} {...item} />
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>

        {/* Add-ons */}
        <div className="mt-10 max-w-2xl space-y-2">
          {menuAddons.map((addon) => (
            <div key={addon.label} className="flex items-baseline justify-between gap-6 py-3 border-b border-cream/8 last:border-0">
              <div className="flex-1 min-w-0">
                <span className="font-body font-medium text-cream text-sm">{addon.label}</span>
                <p className="font-body text-xs text-cream/45 mt-0.5">{addon.detail}</p>
              </div>
              <span className="font-body text-sm text-cream/60 tabular-nums shrink-0">{addon.price}</span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 pt-8 border-t border-cream/8 font-body text-xs text-cream/30">
          Menu items and pricing subject to change. Ask your barista about seasonal specials.
        </p>

      </div>
    </section>
  )
}
