"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className={`relative h-[100dvh] w-full overflow-hidden p-0 m-0 transition-all duration-1000 ${
        hasIntersected ? "opacity-100 scale-100" : "opacity-0 scale-105"
      }`}
    >
      {/* Ảnh nền desktop */}
      <img
        src="/images/hero.webp"
        alt="Hero Background Desktop"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Ảnh nền mobile — kéo phần dưới lên */}
      <img
        src="/images/hero-mobile.webp"
        alt="Hero Background Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-[center_top] transform translate-y-[-8%]"
      />
    </section>
  )
}
