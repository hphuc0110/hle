"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "GoTalk trở thành Đơn vị Biên phiên dịch tiếng Anh chính thức của Miss Grand Vietnam 2025",
    image: "/placeholder.svg?key=news1",
    category: "Tin tức",
  },
  {
    id: 2,
    title: "Hoa Hậu Huỳnh Trần Ý Nhi Đến Thăm GoTalk Sau Hành Trình Miss World",
    image: "/placeholder.svg?key=news2",
    category: "Sự kiện",
  },
  {
    id: 3,
    title: "Hoa hậu Ý Nhi: hành trình tỏa sáng từ sự nhiệt thành và tình thần cầu tiến",
    image: "/placeholder.svg?key=news3",
    category: "Câu chuyện",
  },
  {
    id: 4,
    title: "GoTalk khai trương chi nhánh mới tại TP.HCM với quy mô lớn",
    image: "/placeholder.svg?key=news4",
    category: "Tin tức",
  },
  {
    id: 5,
    title: "Chương trình học bổng GoTalk dành cho học sinh xuất sắc",
    image: "/placeholder.svg?key=news5",
    category: "Học bổng",
  },
]

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= newsItems.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, newsItems.length - itemsPerView) : prev - 1))
  }

  const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsPerView)
  if (visibleItems.length < itemsPerView) {
    visibleItems.push(...newsItems.slice(0, itemsPerView - visibleItems.length))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] text-center mb-16 text-balance">BLOG</h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* News Grid */}
          <div className="mx-12">
            <div className="grid md:grid-cols-3 gap-6">
              {visibleItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#cf0001] text-white text-sm px-3 py-1 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-3">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(newsItems.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerView) === index ? "bg-[#cf0001]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index * itemsPerView)}
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-[#cf0001] text-[#cf0001] hover:bg-[#cf0001] hover:text-white px-8 py-3 bg-transparent"
            >
              Xem thêm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
