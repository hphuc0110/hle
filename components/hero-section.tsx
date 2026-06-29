"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className={`
        relative min-h-screen overflow-hidden p-0 m-0 
        flex items-center justify-center text-white
        transition-all duration-1000 
        ${hasIntersected ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Ảnh nền desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero1.webp')",
        }}
      />

      {/* Ảnh nền mobile */}
      <div
        className="block md:hidden absolute inset-0 bg-[center_top] bg-cover"
        style={{
          backgroundImage: "url('/images/hero-mobile.png')",
        }}
      />
    </section>
  )
}
