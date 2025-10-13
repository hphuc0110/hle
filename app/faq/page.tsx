"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "HLE có những chương trình đào tạo nào?",
    answer:
      "HLE cung cấp các chương trình đào tạo tiếng Anh đa dạng bao gồm: Tiếng Anh Doanh Nhân, IELTS Power, GoTalk Kids, và các chương trình đào tạo theo nhu cầu doanh nghiệp.",
  },
  {
    id: 2,
    question: "Làm thế nào để đăng ký học tại HLE?",
    answer:
      "Bạn có thể đăng ký học bằng cách: 1) Gọi hotline 028 6272 1488, 2) Gửi email đến info@gotalk.vn, 3) Đến trực tiếp văn phòng tại số 53, đường B4, KĐT Sala, P. An Khánh, TP. Hồ Chí Minh, hoặc 4) Điền form đăng ký trên website.",
  },
  {
    id: 3,
    question: "HLE có hỗ trợ học online không?",
    answer:
      "Có, HLE cung cấp các khóa học online 1 kèm 1 với giáo viên, giúp học viên có thể học tại nhà theo giờ giấc linh hoạt và phù hợp với lịch trình cá nhân.",
  },
  {
    id: 4,
    question: "Thời gian học của các khóa học như thế nào?",
    answer:
      "Thời gian học được thiết kế linh hoạt theo nhu cầu của học viên. Các khóa học có thể kéo dài từ 3-12 tháng tùy thuộc vào mục tiêu và trình độ ban đầu của học viên.",
  },
  {
    id: 5,
    question: "HLE có kiểm tra trình độ đầu vào không?",
    answer:
      "Có, HLE cung cấp bài kiểm tra trình độ miễn phí để đánh giá năng lực hiện tại của học viên và đề xuất chương trình học phù hợp nhất.",
  },
  {
    id: 6,
    question: "Học phí của các khóa học tại HLE như thế nào?",
    answer:
      "Học phí được tính theo từng chương trình cụ thể. Vui lòng liên hệ trực tiếp với HLE để được tư vấn chi tiết về học phí và các chính sách ưu đãi hiện có.",
  },
  {
    id: 7,
    question: "HLE có cam kết gì về chất lượng đào tạo?",
    answer:
      "HLE cam kết cung cấp chương trình đào tạo chất lượng cao với đội ngũ giảng viên giàu kinh nghiệm, phương pháp giảng dạy hiện đại và hỗ trợ học viên đạt được mục tiêu học tập.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#cf0001] to-[#a50001] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="text-white/80 text-sm mb-4">
              <span>Trang chủ</span> <span className="mx-2">{">"}</span> <span>Câu hỏi thường gặp</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Câu hỏi thường gặp</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tìm câu trả lời cho những thắc mắc phổ biến về các chương trình đào tạo tại HLE
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-[#cf0001] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#cf0001] flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(item.id) && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#cf0001] mb-4">Không tìm thấy câu trả lời?</h3>
            <p className="text-gray-700 mb-6">Liên hệ với chúng tôi để được tư vấn chi tiết hơn</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0286272148"
                className="bg-[#cf0001] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b50001] transition-colors"
              >
                Gọi ngay: 028 6272 1488
              </a>
              <a
                href="mailto:info@gotalk.vn"
                className="border border-[#cf0001] text-[#cf0001] px-6 py-3 rounded-lg font-semibold hover:bg-[#cf0001] hover:text-white transition-colors"
              >
                Gửi email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
