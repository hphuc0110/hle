"use client"

import Image from "next/image"

const hallOfFame = [
  {
    id: 1,
    name: "Lý Quốc Bình",
    achievement:
      "Từ một người nhút nhát không dám phát biểu, giờ tôi tự tin dẫn dắt các cuộc họp quốc tế.",
    image: "/ly-quoc-binh.png",
  },
  {
    id: 2,
    name: "Nguyễn Hải Đăng",
    achievement:
      "HLE đã giúp tôi biến ý tưởng 'không thể' thành hiện thực rực rỡ.",
    image: "/nguyen-hai-dang.png",
  },
  {
    id: 3,
    name: "Lê Minh Hạnh",
    achievement:
      "Với đội ngũ tôi có thể thuyết trình tự tin trước các nhà đầu tư quốc tế.",
    image: "/le-minh-hanh.png",
  },
  {
    id: 4,
    name: "Trần Thu Trang",
    achievement:
      "Từ việc truyền đạt thông tin, tôi đã học cách truyền cảm hứng cho cả đội ngũ.",
    image: "/tran-thu-trang.png",
  },
  {
    id: 5,
    name: "Nguyễn Trần Hoài Anh",
    achievement:
      "Bản thân đã có nhiều thay đổi khi tham gia khóa học, và cảm thấy tự tin hơn khi giao tiếp.",
    image: "/hoai-anh.jpg",
  },
  {
    id: 6,
    name: "Nguyễn Bá Nhật Minh",
    achievement:
      " Nhờ lộ trình rõ ràng và dễ hiểu, tôi thấy bản thân tiến bộ từng buổi một.",
    image: "/nhat-minh.jpg",
  },
  {
    id: 7,
    name: "Nguyễn Việt Hưng",
    achievement:
      "Khóa học đã giúp tôi tự tin nói ra ý kiến của mình thay vì sợ sai như trước đây.",
    image: "/viet-hung.jpg",
  },    
  {
    id: 8,
    name: "Đỗ Chí Vịnh",
    achievement:
    "Tôi nhận ra mình hoàn toàn có thể bứt phá nếu có người dẫn dắt đúng cách như trong khóa học này.",    
    image: "/chi-vinh.jpg",
  },
]

export function HallOfFameSection() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 
                     bg-red-700 
                     bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase"
        >
          Hall of Fame
        </h2>

        <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto text-base sm:text-sm leading-relaxed">
          Tôn vinh những học viên và cá nhân xuất sắc đã đạt được thành tựu vượt bậc.
        </p>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-0 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-0 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <div className="flex gap-6 sm:gap-8 animate-scroll hover:pause-animation">
            {/* First set of cards */}
            {hallOfFame.map((person) => (
              <div
                key={`first-${person.id}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 sm:p-6 flex-shrink-0 w-[280px] sm:w-[320px]"
              >
                {/* Ảnh responsive */}
                <div className="w-full aspect-square mx-auto overflow-hidden mb-4 sm:mb-6 border-4 border-red-600 shadow-md rounded-xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {person.name}
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base leading-snug">
                  {person.achievement}
                </p>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {hallOfFame.map((person) => (
              <div
                key={`second-${person.id}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-5 sm:p-6 flex-shrink-0 w-[280px] sm:w-[320px]"
              >
                {/* Ảnh responsive */}
                <div className="w-full aspect-square mx-auto overflow-hidden mb-4 sm:mb-6 border-4 border-red-600 shadow-md rounded-xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {person.name}
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base leading-snug">
                  {person.achievement}
                </p>
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
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
