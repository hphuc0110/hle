"use client"

import type React from "react"
import { useState } from "react"
import { Facebook, Youtube, MessageCircle, Phone, Mail, MapPin, ArrowUp } from "lucide-react"

export default function Footer() {
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Xử lý form (tùy bạn kết nối API)
    console.log("Form submitted:", formData)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#cf0001] mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#cf0001] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Hotline:</p>
                  <a href="tel:0325194889" className="text-[#cf0001] hover:underline">
                    0325 194 889
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#cf0001] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <a href="mailto:support@honglinheducation.vn" className="text-[#cf0001] hover:underline">
                    support@honglinheducation.vn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#cf0001] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Địa chỉ:</p>
                  <p className="text-gray-700">1G Trần Quang Diệu, Ô Chợ Dừa, Đống Đa, Hà Nội</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61579686960049"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#cf0001] p-3 rounded-full text-white hover:bg-[#b50001] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#cf0001] p-3 rounded-full text-white hover:bg-[#b50001] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#cf0001] p-3 rounded-full text-white hover:bg-[#b50001] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#cf0001] p-3 rounded-full text-white hover:bg-[#b50001] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[#cf0001] mb-6">Về HONGLINHEDUCATION</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#cf0001] transition-colors">
                  <div className="w-2 h-2 bg-[#cf0001] rounded-full"></div>
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#cf0001] transition-colors">
                  <div className="w-2 h-2 bg-[#cf0001] rounded-full"></div>
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#cf0001] transition-colors">
                  <div className="w-2 h-2 bg-[#cf0001] rounded-full"></div>
                  FAQS
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#cf0001] mb-6">Thông tin khác</h3>
            <ul className="space-y-3">
              {[
                "Kiểm tra trình độ",
                "Chương trình đào tạo",
                "Chính sách thanh toán",
                "Chia sẻ kiến thức",
                "Sự kiện nổi bật",
                "Tuyển dụng",
                "Đối tác",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#cf0001] transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#cf0001] rounded-full"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-[#cf0001]">HLE</div>
              <div className="text-gray-600 text-sm">HLE © Copyright 2025</div>
              <a href="#" className="text-gray-600 hover:text-[#cf0001] text-sm">
                Privacy Policy
              </a>
            </div>

            {/* Network Links */}
            <div>
              <p className="text-sm font-semibold text-[#cf0001] mb-2">Part of our network</p>
              <div className="flex flex-col gap-1 text-sm">
                <a
                  href="https://gotalk.honglinheducation.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cf0001] hover:underline"
                >
                  • GOTALK
                </a>
                <a
                  href="https://realtalk.honglinheducation.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cf0001] hover:underline"
                >
                  • REALTALK
                </a>
                <a
                  href="https://sagetalk.honglinheducation.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cf0001] hover:underline"
                >
                  • SAGETALK
                </a>
                <a
                  href="https://dealtalk.honglinheducation.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cf0001] hover:underline"
                >
                  • DEALTALK
                </a>
                <a
                  href="https://fableenglish.honglinheducation.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#cf0001] hover:underline"
                >
                  • FABLEENGLISH
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-[#cf0001] text-white p-3 rounded-full shadow-lg hover:bg-[#b50001] transition-colors z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        {/* Chat Button */}
<a
  href="https://zalo.me/0325194889" // thay bằng số Zalo thật của bạn
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
>
  <MessageCircle className="h-6 w-6" />
</a>

      </div>
    </footer>
  )
}
