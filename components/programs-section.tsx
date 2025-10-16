"use client"

import { Button } from "@/components/ui/button"

const programs = [
  {
    id: 1,
    title: "RealTalk - Tiếng Anh Chuyên Nghiệp",
    image: "/images/realtalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Nâng cấp tiếng Anh chuyên nghiệp, tự tin giao tiếp trong công việc, mở ra cơ hội thăng tiến và hợp tác toàn cầu.",
    link: "https://realtalk.honglinheducation.vn/",
  },
  {
    id: 2,
    title: "GoTalk - Tiếng Anh Phỏng Vấn",
    image: "/images/gotalk-logo.webp",
    badge: "Học 1 kèm 1",
    description:
      "Trang bị tiếng Anh phỏng vấn thực chiến cho ứng viên và phụ nữ quay lại sự nghiệp – giúp bạn tự tin chinh phục nhà tuyển dụng.",
    link: "https://gotalk.honglinheducation.vn/",
  },
  {
    id: 3,
    title: "SageTalk – Tiếng Anh thuyết trình học thuật",
    image: "/images/sagetalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Rèn luyện tiếng Anh thuyết trình & đàm phán để thuyết phục, truyền cảm hứng và bứt phá trong môi trường quốc tế.",
    link: "https://sagetalk.honglinheducation.vn/",
  },
  {
    id: 4,
    title: "DealTalk - English for Sale & Pitching ",
    image: "/dealtalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Huấn luyện ngôn ngữ và tư duy giao tiếp trong kinh doanh, giúp tự tin trình bày, xử lý từ chối khéo léo, đàm phán hiệu quả, chốt đơn thuyết phục và xây dựng mối quan hệ bền vững.",
    link: "https://dealtalk.honglinheducation.vn/",
  },
  {
    id: 5,
    title: "Fable English - Tiếng Anh Storytelling",
    image: "/fable-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Huấn luyện nghệ thuật kể chuyện trong công việc và thuyết trình, biến dữ liệu khô khan và trải nghiệm cá nhân thành câu chuyện giàu cảm xúc, có sức nặng và thuyết phục. ",
    link: "https://fableenglish.honglinheducation.vn/",
  },
]

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#cf0001] mb-6 text-balance">
            Chương trình online 1 kèm 1 phù hợp với mục tiêu của bạn
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Thành quả nghiên cứu và phát triển của chúng tôi trong suốt 5 năm qua
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-[#cf0001] px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {program.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* ↓ Chữ title nhỏ nhất */}
                <h3 className="text-xs font-semibold text-[#cf0001] mb-3 text-balance uppercase tracking-wide">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm text-justify">
                  {program.description}
                </p>

                {/* Button with link */}
                <a href={program.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#cf0001] hover:bg-[#b50001] text-white" size="lg">
                    Tìm hiểu thêm
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
