"use client"

import { Button } from "@/components/ui/button"

const programs = [
  {
    id: 1,
    title: "RealTalk - Tiếng Anh Chuyên Nghiệp",
    image: "/images/realtalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Nâng cấp tiếng Anh chuyên nghiệp để trở thành phiên bản tốt nhất – tự tin giao tiếp, thuyết trình và đàm phánnp. Mở ra cánh cửa thăng tiến trong sự nghiệp, kết nối với đồng nghiệp quốc tế và vươn tầm toàn cầu.",
    link: "https://realtalk.honglinheducation.vn/",
  },
  {
    id: 2,
    title: "GoTalk - Tiếng Anh Phỏng Vấn",
    image: "/images/gotalk-logo.webp",
    badge: "Học 1 kèm 1",
    description:
      "Không chỉ là học tiếng Anh, mà là hành trình xây dựng lại sự tự tin. Khóa học trang bị cho bạn kỹ năng phỏng vấn thực chiến,  có thể tự tin thể hiện giá trị bản thân và thuyết phục mọi nhà tuyển dụng.",
    link: "https://gotalk.honglinheducation.vn/",
  },
  {
    id: 3,
    title: "SageTalk - Tiếng Anh thuyết trình học thuật",
    image: "/images/sagetalk-logo.png",
    badge: "Học 1 kèm 1",
    description:
      "Nâng tầm khả năng thuyết trình và đàm phán bằng tiếng Anh – không chỉ để nói, mà để truyền cảm hứng . Học cách giao tiếp tự tin, chinh phục mọi buổi thuyết trình và vươn mình mạnh mẽ trong môi trường quốc tế.",
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
      "Học cách kể chuyện như một nhà lãnh đạo! Biến dữ liệu, con số và trải nghiệm cá nhân thành câu chuyện cuốn hút – giúp bạn truyền cảm hứng, gây ấn tượng và thuyết phục mọi khán giả trong công việc lẫn thuyết trình.",
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

        {/* Scrollable Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {programs.map((program) => (
            <div
              key={program.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 snap-start"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-[#cf0001] px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {program.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* <h3 className="text-sm font-bold text-[#cf0001] mb-3 uppercase tracking-wide text-balance">
                  {program.title}
                </h3> */}

                {program.title.split("-").map((item) => (
                  <h3 className="text-sm font-bold text-[#cf0001] mb-3 uppercase tracking-wide text-balance">
                  {item}
                </h3>
                ))}

                <p className="text-gray-600 mb-5 leading-relaxed text-sm text-justify">
                  {program.description}
                </p>

                <a href={program.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-[#cf0001] hover:bg-[#b50001] text-white font-semibold rounded-full"
                    size="lg"
                  >
                    Tìm hiểu thêm
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hint text */}
        <div className="text-center mt-6 md:hidden">
          <p className="text-gray-500 text-sm animate-pulse">
            👉 Lướt ngang để xem thêm về khóa học
          </p>
        </div>
      </div>
    </section>
  )
}
