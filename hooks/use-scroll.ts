'use client'
// Adapted from 21st.dev Header 1 component
import React from 'react'

export function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false)

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // Check on mount
  React.useEffect(() => {
    onScroll()
  }, [onScroll])

  return scrolled
}
