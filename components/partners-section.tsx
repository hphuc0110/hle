"use client"

import Image from "next/image"

export default function PartnersSection() {
  // Danh sách đối tác - bạn có thể thay đổi tên và logo
  const partners = [
    { name: "RMIT", logo: "/images/logo/RMIT-Logo.png" },
    { name: "BK", logo: "/images/logo/logo-bk.png" },
    { name: "AM", logo: "/images/logo/logo-amster.png" },
    { name: "CAFEF", logo: "/images/logo/logo-cafef.png" },
    { name: "UNI", logo: "/images/logo/logo-uni.png" },
    { name: "CN", logo: "/images/logo/PTTHCNN_logo.png" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">Mạng Lưới Đối Tác</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hợp tác với các tổ chức giáo dục hàng đầu thế giới</p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="flex gap-8 animate-scroll hover:pause-animation">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm border flex items-center justify-center p-6 transition-all duration-300 hover:shadow-md hover:scale-105 group"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm border flex items-center justify-center p-6 transition-all duration-300 hover:scale-105 group"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
