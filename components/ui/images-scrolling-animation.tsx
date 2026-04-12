"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const cafeImages = [
  { title: "Interior", src: "/images/interior.png" },
  { title: "Iced Coffee & Pastries", src: "/images/iced-coffee-pastries.png" },
  { title: "Matcha Cake", src: "/images/matcha-cake.png" },
  { title: "Espresso Machine", src: "/images/espresso-machine.png" },
  { title: "Pastry Case", src: "/images/pastry-case.png" },
  { title: "Interior II", src: "/images/interior-2.png" },
  { title: "Coffee Beans", src: "/images/coffee-beans.png" },
]

const StickyCard = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  src: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
  targetScale: number
}) => {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="sticky top-0 flex items-center justify-center h-screen">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 18 + 60}px)`,
        }}
        className="relative overflow-hidden rounded-2xl shadow-lg
                   w-[280px] h-[190px]
                   sm:w-[420px] sm:h-[280px]
                   md:w-[560px] md:h-[370px]
                   lg:w-[680px] lg:h-[450px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/10" />
      </motion.div>
    </div>
  )
}

export function ImagesScrollingAnimation() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div
      ref={container}
      className="relative"
      style={{ height: `${cafeImages.length * 100}vh` }}
    >
      {cafeImages.map((image, i) => {
        const targetScale = Math.max(0.6, 1 - (cafeImages.length - i - 1) * 0.07)
        return (
          <StickyCard
            key={`cafe_${i}`}
            i={i}
            {...image}
            progress={scrollYProgress}
            range={[i / cafeImages.length, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}
