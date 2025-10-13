"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Lý Quốc Bình",
    image: "/placeholder.svg?key=testimonial1",
    content:
      "Từ một người nhút nhát không dám phát biểu, giờ tôi tự tin dẫn dắt các cuộc họp quốc tế.",
  },
  {
    id: 2,
    name: "Nguyễn Hải Đăng",
    image: "/placeholder.svg?key=testimonial2",
    content:
      "HLE đã giúp tôi biến những ý tưởng 'không thể' thành hiện thực rực rỡ.",
  },
  {
    id: 3,
    name: "Lê Minh Hạnh",
    image: "/placeholder.svg?key=testimonial3",
    content:
      "Với đội ngũ tôi có thể thuyết trình tự tin trước các nhà đầu tư quốc tế.",
  },
  {
    id: 4,
    name: "Trần Thu Trang",
    image: "/placeholder.svg?key=testimonial4",
    content:
      "Từ việc chỉ truyền đạt thông tin, tôi đã học cách truyền cảm hứng cho cả đội ngũ.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const isDragging = useRef(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    const diff = e.touches[0].clientX - startX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevTestimonial()
      else nextTestimonial()
      isDragging.current = false
    }
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] text-center mb-16 text-balance">
          Chia sẻ từ học viên
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonials Container */}
          <div
            ref={containerRef}
            className="overflow-hidden px-4 sm:px-6 lg:px-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-[#cf0001] mb-1">{testimonial.name}</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-lg">{testimonial.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#cf0001]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
