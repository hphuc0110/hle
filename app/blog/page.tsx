"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const blogPosts = [
  {
    id: 1,
    slug: "giao-tiep-tieng-anh-nen-tang-ky-nang-mem",
    title: "Giao tiếp tiếng Anh – Nền tảng cho kỹ năng mềm và sự nghiệp bền vững",
    excerpt:
      "Tiếng Anh không còn được xem là môn học phụ mà đã trở thành năng lực cốt lõi của sinh viên và người đi làm trong bối cảnh hội nhập quốc tế.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog1.jpg-5c7IuUjushGzLy1YdLuUFgmtA9TPsR.jpeg",
    category: "Tin tức tiếng anh",
    date: "15/12/2024",
    readTime: "5 phút đọc",
  },
  {
    id: 2,
    slug: "tieng-anh-canh-cua-co-hoi-hoc-sinh-viet-nam",
    title: "Tiếng Anh – Cánh cửa mở ra cơ hội cho thế hệ học sinh và người đi làm Việt Nam",
    excerpt:
      "Việc đưa tiếng Anh trở thành ngôn ngữ thứ hai trong nhà trường là một chiến lược quan trọng và cấp thiết trong bối cảnh hội nhập quốc tế.",
    image: "blog2.jpeg",
    category: "Giáo dục",
    date: "12/12/2024",
    readTime: "6 phút đọc",
  },
  {
    id: 3,
    slug: "soi-day-ket-noi-viet-nam-tap-doan-cong-nghe",
    title: "Sợi dây kết nối Việt Nam với các tập đoàn công nghệ toàn cầu",
    excerpt:
      "Vai trò then chốt của tiếng Anh chuyên ngành trong việc thu hút FDI công nghệ cao và tham gia chuỗi R&D toàn cầu.",
    image: "blog3.jpeg",
    category: "Công nghệ",
    date: "10/12/2024",
    readTime: "8 phút đọc",
  },
  {
    id: 4,
    slug: "khong-the-chi-dung-o-giao-tiep",
    title: "Tiếng Anh trong thời hội nhập không thể chỉ dừng lại ở giao tiếp",
    excerpt:
      "Trong thời hội nhập, Tiếng Anh không chỉ để giao tiếp – mà là công cụ khẳng định năng lực và mở rộng cơ hội toàn cầu.",
    image: "/bai-4.png",
    category: "Công nghệ",
    date: "10/09/2025",
    readTime: "8 phút đọc",
  },
  {
    id: 5,
    slug: "lo-trinh-5-buoi",
    title: "Hồng Lĩnh Education ra mắt sản phẩm GoTalk với lộ trình 5 buổi “Tiếng Anh Phỏng Vấn” – Đồng hành cùng nhân lực Việt trên hành trình hội nhập quốc tế",
    excerpt:
      "Tự tin nói tiếng Anh trong mọi buổi phỏng vấn với GoTalk – sản phẩm mới từ Hồng Lĩnh Education, đồng hành cùng bạn trên hành trình quốc tế.",
    image: "/bai-5.png",
    category: "Khóa học",
    date: "10/10/2025",
    readTime: "6 phút đọc",
  },
  {
    id: 6,
    slug: "thuc-day-hoi-nhap-quoc-te",
    title: "Hồng Lĩnh Education (HLE) thúc đẩy hội nhập quốc tế cho người lao động Việt khi cho ra mắt sản phẩm Tiếng Anh Phỏng Vấn",
    excerpt:
      "HLE mang đến giải pháp học Tiếng Anh thực chiến cho người lao động Việt – sẵn sàng phỏng vấn và làm việc trong môi trường quốc tế.",
    image: "/bai-6.png",
    category: "Kĩ năng",
    date: "10/10/2025",
    readTime: "7 phút đọc",
  },
  {
    id: 7,
    slug: "giai-phap-non-homework",
    title: "HLE ra mắt lộ trình học mới cho sản phẩm của RealTalk – Giải pháp tiếng Anh “Non-Homework” cho người đi làm bận rộn",
    excerpt:
      "HLE mang đến lộ trình RealTalk mới – học tiếng Anh không bài tập, không áp lực, vẫn tiến bộ mỗi ngày.",
    image: "/bai-7.png",
    category: "Khóa học",
    date: "19/09/2025",
    readTime: "7 phút đọc",
  },
]

const categories = [
  { name: "Tin tức tiếng anh", slug: "tinh-than-on" },
  { name: "Kĩ sư toàn năng", slug: "lo-trinh-nang-luc" },
  { name: "Nghị quyết 57 - NĐ/TW", slug: "nghi-quyet-57" },
  { name: "Trung tâm dữ liệu AI", slug: "thay-doi-dia-diem" },
  { name: "Học bổng", slug: "hoc-bong" },
]

export default function BlogPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      window.addEventListener("resize", checkScrollButtons)
      return () => {
        container.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardElement = container.querySelector("article") as HTMLElement
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth
        const gap = 24 // gap-6 = 24px
        const scrollAmount = cardWidth + gap
        const currentScroll = container.scrollLeft
        const newScroll =
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount

        container.scrollTo({
          left: newScroll,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#cf0001] to-[#8b0000] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Blog HLE</h1>
          <div className="w-32 h-1 bg-white mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Recent Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Bài viết gần đây</h2>

              {/* Featured Post - Large */}
              {blogPosts[0] && (
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block bg-[#cf0001] text-white text-sm px-3 py-1 rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <div className="text-sm text-gray-500">
                        {blogPosts[0].date} • {blogPosts[0].readTime}
                      </div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3 text-balance">{blogPosts[0].title}</h3>
                    <p className="text-gray-600 mb-4 text-pretty">{blogPosts[0].excerpt}</p>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button className="bg-[#cf0001] hover:bg-[#8b0000] text-white">Đọc tiếp</Button>
                    </Link>
                  </div>
                </article>
              )}

              {/* Horizontal Scrollable Posts Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Các bài viết khác</h3>
                  <div className="flex gap-2">
                    {canScrollLeft && (
                      <button
                        onClick={() => scroll("left")}
                        className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors border border-gray-200"
                        aria-label="Cuộn trái"
                      >
                        <svg
                          className="w-5 h-5 text-[#cf0001]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                    )}
                    {canScrollRight && (
                      <button
                        onClick={() => scroll("right")}
                        className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors border border-gray-200"
                        aria-label="Cuộn phải"
                      >
                        <svg
                          className="w-5 h-5 text-[#cf0001]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Horizontal Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {blogPosts.slice(1).map((post) => (
                    <article
                      key={post.id}
                      className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block bg-[#cf0001] text-white text-xs px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <div className="text-xs text-gray-500">{post.date}</div>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 text-balance">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 text-pretty">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                          <Button
                            variant="outline"
                            className="w-full border-[#cf0001] text-[#cf0001] hover:bg-[#cf0001] hover:text-white bg-transparent"
                          >
                            Đọc tiếp
                          </Button>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Hide scrollbar for webkit browsers */}
                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
              </div>
            </div>

            {/* Right Column - Categories Sidebar */}
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#cf0001]">Chuyên mục</h3>
                <ul className="space-y-4">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/blog/category/${category.slug}`}
                        className="flex items-center text-gray-700 hover:text-[#cf0001] transition-colors duration-200 group"
                      >
                        <span className="w-2 h-2 bg-[#cf0001] rounded-full mr-3 group-hover:scale-125 transition-transform" />
                        <span className="text-base">{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
