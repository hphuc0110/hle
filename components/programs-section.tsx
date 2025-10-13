import { Button } from "@/components/ui/button"

const programs = [
  {
    id: 1,
    title: "Chương trình RealTalk - Tiếng Anh Chuyên Nghiệp",
    image: "/images/realtalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Nâng cấp tiếng Anh chuyên nghiệp, tự tin giao tiếp trong công việc, mở ra cơ hội thăng tiến và hợp tác toàn cầu.",
    link: "https://realtalk.honglinheducation.vn/",
  },
  {
    id: 2,
    title: "Chương trình GoTalk - Tiếng Anh Phỏng Vấn",
    image: "/images/gotalk-logo.webp",
    badge: "Học 1 kèm 1",
    description:
      "Trang bị tiếng Anh phỏng vấn thực chiến cho ứng viên và phụ nữ quay lại sự nghiệp – giúp bạn tự tin chinh phục nhà tuyển dụng.",
    link: "https://gotalk.honglinheducation.vn/",
  },
  {
    id: 3,
    title: "Chương trình SageTalk – Tiếng Anh Pitching",
    image: "/images/sagetalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Rèn luyện tiếng Anh thuyết trình & đàm phán để thuyết phục, truyền cảm hứng và bứt phá trong môi trường quốc tế.",
    link: "https://sagetalk.honglinheducation.vn/",
  },
  {
    id: 4,
    title: "Chương trình DealTalk - English for Sale & Pitching ",
    image: "/dealtalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Chương trình huấn luyện ngôn ngữ và tư duy giao tiếp trong kinh doanh, giúp bạn tự tin chào hàng, xử lý từ chối, đàm phán, chốt đơn và xây dựng mạng lưới quan hệ hiệu quả.",
    link: "https://dealtalk.honglinheducation.vn/",
  },
  {
    id: 5,
    title: "Chương trình FableEnglish - Tiếng Anh Storytelling",
    image: "/fable-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Khóa huấn luyện nghệ thuật kể chuyện trong công việc và thuyết trình, giúp bạn biến dữ liệu khô khan và trải nghiệm cá nhân thành những câu chuyện giàu cảm xúc, có sức nặng và thuyết phục. ",
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
                  <span className="bg-white text-[#cf0001] px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {program.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#cf0001] mb-3 text-balance">{program.title}</h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>

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
