"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PlacementTestPopup from "@/components/placement-test-popup"
import ContactConsultationPopup from "@/components/contact-consultation-popup"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showProgramsMenu, setShowProgramsMenu] = useState(false)
  const [showPlacementTest, setShowPlacementTest] = useState(false)
  const [showContactConsultation, setShowContactConsultation] = useState(false)
  const [showIntroMenu, setShowIntroMenu] = useState(false)

  // State riêng cho mobile
  const [showIntroMobile, setShowIntroMobile] = useState(false)
  const [showProgramsMobile, setShowProgramsMobile] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRefIntro = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Hover menu (desktop)
  const handleMouseEnterPrograms = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShowProgramsMenu(true)
  }
  const handleMouseLeavePrograms = () => {
    timeoutRef.current = setTimeout(() => setShowProgramsMenu(false), 200)
  }

  const handleMouseEnterIntro = () => {
    if (timeoutRefIntro.current) clearTimeout(timeoutRefIntro.current)
    timeoutRefIntro.current = setTimeout(() => setShowIntroMenu(true), 250)
  }
  const handleMouseLeaveIntro = () => {
    if (timeoutRefIntro.current) clearTimeout(timeoutRefIntro.current)
    timeoutRefIntro.current = setTimeout(() => setShowIntroMenu(false), 200)
  }

  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById("testimonials")
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: "smooth" })
    }
    setShowProgramsMenu(false)
  }

  // Mega menu desktop
  const ProgramsMegaMenu = () => (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] md:w-[1000px] bg-white border rounded-lg shadow-xl z-[99999] p-6 md:p-8"
      onMouseEnter={handleMouseEnterPrograms}
      onMouseLeave={handleMouseLeavePrograms}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Cột 1: SNAPSTUDY */}
        <div>
          <h3 className="font-bold mb-3 text-gray-700 border-b pb-2">SNAPSTUDY</h3>
          <div className="space-y-2">
            <a
              href="https://snapstudy.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              SNAPSTUDY
            </a>
          </div>
        </div>
        
        {/* Cột 2: GRABSTUDY - Các web tiếng Anh */}
        <div>
          <h3 className="font-bold mb-3 text-gray-700 border-b pb-2">GRABSTUDY</h3>
          <div className="space-y-2">
            <a
              href="https://realtalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              REALTALK
            </a>
            <a
              href="https://gotalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              GOTALK
            </a>
            <a
              href="https://sagetalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              SAGETALK
            </a>
            <a
              href="https://dealtalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              DEALTALK
            </a>
            <a
              href="https://fableenglish.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              FABLE ENGLISH
            </a>
          </div>
        </div>
        
        {/* Cột 3: Về AI57 */}
        <div>
          <h3 className="font-bold mb-3 text-gray-700 border-b pb-2">VỀ AI57</h3>
          <div className="space-y-2">
            <a
              href="https://ai57.honglinheducation.vn/vi"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              AI57
            </a>
            <a
              href="https://ai57hocbong.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#3464c5] text-gray-700"
            >
              HỌC BỔNG AI57
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  const IntroPopup = () => (
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] md:w-[1000px] bg-white border shadow-lg z-[99999]"
      onMouseEnter={handleMouseEnterIntro}
      onMouseLeave={handleMouseLeaveIntro}
    >
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Cột 1: Ảnh */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/design-mode/anh03.webp"
            alt="HLE Logo"
            width={200}
            height={100}
            className="w-full max-w-[300px] h-auto"
          />
        </div>
        
        {/* Cột 2: Về HLE và Mạng xã hội */}
        <div>
          <h3 className="font-bold mb-3 border-b pb-2 text-gray-800">VỀ HLE</h3>
          <a href="/about" className="block hover:text-[#cf0001] mb-4">
            Giới thiệu
          </a>
          <h3 className="font-bold mb-3 border-b pb-2 text-gray-800">MẠNG XÃ HỘI</h3>
          <div className="flex space-x-2">
            <a
              href="https://www.facebook.com/profile.php?id=61579686960049"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
        
        {/* Cột 3: Website trực thuộc */}
        <div>
          <h3 className="font-bold mb-3 border-b pb-2 text-gray-800">WEBSITE TRỰC THUỘC</h3>
          <div className="space-y-2">
          <a
              href="https://ai57.honglinheducation.vn/vi"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              AI57
            </a>
            <a
              href="https://ai57hocbong.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              HỌC BỔNG AI57
            </a>
            <a
              href="https://realtalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              REALTALK
            </a>
            <a
              href="https://gotalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              GOTALK
            </a>
            <a
              href="https://sagetalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              SAGETALK
            </a>
            <a
              href="https://dealtalk.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              DEALTALK
            </a>
            <a
              href="https://fableenglish.honglinheducation.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#cf0001]"
            >
              FABLE ENGLISH
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/hle-logo.png"
                alt="HLE - Honglinh Education"
                width={380}
                height={160}
                priority
                className="h-60 md:h-70 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#cf0001] text-gray-700">
                Trang Chủ
              </Link>

              <div onMouseEnter={handleMouseEnterIntro} onMouseLeave={handleMouseLeaveIntro} className="relative">
                <span className="flex items-center cursor-pointer hover:text-[#cf0001] text-gray-700">
                  Giới thiệu <ChevronDown className="ml-1 h-4 w-4" />
                </span>
                {showIntroMenu && mounted && createPortal(<IntroPopup />, document.body)}
              </div>

              <div onMouseEnter={handleMouseEnterPrograms} onMouseLeave={handleMouseLeavePrograms} className="relative">
                <span className="flex items-center cursor-pointer hover:text-[#cf0001] text-gray-700">
                  Chương trình <ChevronDown className="ml-1 h-4 w-4" />
                </span>
                {showProgramsMenu && mounted && createPortal(<ProgramsMegaMenu />, document.body)}
              </div>

              <Link href="/instructors" className="hover:text-[#cf0001] text-gray-700">
                Đội ngũ
              </Link>
              <Link href="/lien-he" className="hover:text-[#cf0001] text-gray-700">
                Liên hệ
              </Link>
              <Link href="/blog" className="hover:text-[#cf0001] text-gray-700">
                Blog
              </Link>
              <Link href="/lien-he">
                <Button
                  className="bg-[#cf0001] hover:bg-[#b50001] text-white font-semibold px-4 py-2 rounded-md"
                >
                  Liên hệ tư vấn
                </Button>
              </Link>
            </nav>

            {/* Mobile Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-2 pt-2 pb-3 space-y-1 text-sm font-medium">
            <Link href="/" className="block px-3 py-2 hover:text-[#cf0001] text-gray-700">
              Trang Chủ
            </Link>

            {/* Giới thiệu */}
            <button
              onClick={() => setShowIntroMobile((p) => !p)}
              className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-[#cf0001]"
            >
              Giới thiệu <ChevronDown className={`h-4 w-4 transition-transform ${showIntroMobile ? "rotate-180" : ""}`} />
            </button>
            {showIntroMobile && (
              <div className="pl-6 pr-3 pb-2 space-y-2 text-gray-700 text-sm">
                <Link href="/about" className="block hover:text-[#cf0001]">
                  Giới thiệu
                </Link>
                <Link href="/events" className="block hover:text-[#cf0001]">
                  Sự kiện nổi bật
                </Link>
                <div className="flex space-x-2 mt-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61579686960049"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            )}

            {/* Chương trình */}
            <button
              onClick={() => setShowProgramsMobile((p) => !p)}
              className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-[#cf0001]"
            >
              Chương trình{" "}
              <ChevronDown className={`h-4 w-4 transition-transform ${showProgramsMobile ? "rotate-180" : ""}`} />
            </button>
            {showProgramsMobile && (
              <div className="pl-6 pr-3 pb-2 space-y-2 text-gray-700 text-sm">
                <div className="font-semibold text-gray-800 mb-1">SNAPSTUDY</div>
                <a href="#" className="block hover:text-[#cf0001] pl-2">
                  SNAPSTUDY
                </a>
                <div className="font-semibold text-gray-800 mb-1 mt-3">GRABSTUDY</div>
                <a href="https://realtalk.honglinheducation.vn/" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  REALTALK
                </a>
                <a href="https://gotalk.honglinheducation.vn/" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  GOTALK
                </a>
                <a href="https://sagetalk.honglinheducation.vn/" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  SAGETALK
                </a>
                <a href="https://dealtalk.honglinheducation.vn/" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  DEALTALK
                </a>
                <a href="https://fableenglish.honglinheducation.vn/" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  FABLE ENGLISH
                </a>
                <div className="font-semibold text-gray-800 mb-1 mt-3">VỀ AI57</div>
                <a href="https://ai57.honglinheducation.vn/vi" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  AI57
                </a>
                <a href="https://ai57hocbong.honglinheducation.vn/" target="_blank" className="block hover:text-[#cf0001] pl-2">
                  HỌC BỔNG AI57
                </a>
              </div>
            )}

            <Link
              href="/instructors"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-[#cf0001] w-full text-left"
            >
              Giảng viên
            </Link>
            <Link href="/lien-he" className="block px-3 py-2 hover:text-[#cf0001] text-gray-700">
              Liên hệ
            </Link>
            <Link href="/blog" className="block px-3 py-2 hover:text-[#cf0001] text-gray-700">
              Blog
            </Link>
            <Link
              href="/lien-he"
              className="block px-3 py-2 bg-[#cf0001] hover:bg-[#b50001] text-white font-semibold rounded-md w-full text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        )}
      </header>

      {/* Placement Test Popup */}
      {showPlacementTest && (
        <PlacementTestPopup isOpen={showPlacementTest} onClose={() => setShowPlacementTest(false)} />
      )}

      {/* Contact Consultation Popup */}
      {showContactConsultation && (
        <ContactConsultationPopup onClose={() => setShowContactConsultation(false)} />
      )}
    </>
  )
}
