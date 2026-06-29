import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPostRealTalk() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog">
          <Button
            variant="ghost"
            className="mb-6 text-[#cf0001] hover:text-[#8b0000]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Button>
        </Link>

        {/* Header bài viết */}
        <header className="mb-8">
          <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
            <img
              src="/images/design-mode/blog-realtalk.jpg"
              alt="RealTalk - Tiếng Anh cho người đi làm"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> 15/10/2025
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 5 phút đọc
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> HLE Team
            </div>
          </div>

          <div className="inline-block bg-[#cf0001]/10 text-[#cf0001] px-3 py-1 rounded-full text-sm font-medium mb-3">
            Đào tạo & Kỹ năng
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            HLE ra mắt RealTalk – Giải pháp tiếng Anh “Non-Homework” cho người
            đi làm bận rộn
          </h1>

          <p className="text-lg text-gray-600">
            RealTalk mang đến lộ trình học 45 buổi cá nhân hóa, giúp người đi
            làm sử dụng tiếng Anh hiệu quả trong công việc mà không cần bài tập
            về nhà.
          </p>
        </header>

        {/* Nội dung bài viết */}
        <div className="prose prose-lg text-justify max-w-none">
          <p>
            Trong nhiều năm qua, <strong>Hồng Lĩnh Education (HLE)</strong> đã
            định vị mình là đơn vị tiên phong trong đào tạo ngoại ngữ và kỹ năng
            cho người đi làm, với sứ mệnh giúp nguồn nhân lực Việt Nam tự tin
            hội nhập quốc tế. Hiểu rõ những khó khăn thực tế của người trưởng
            thành – lịch trình bận rộn, ít thời gian tự học, dễ bỏ dở các khóa
            học – HLE chính thức giới thiệu{" "}
            <strong>RealTalk</strong>, sản phẩm được thiết kế chuyên biệt cho
            người lao động hiện đại.
          </p>

          <p>
            <strong>RealTalk</strong> là chương trình tiếng Anh với lộ trình cá
            nhân hóa <strong>45 buổi</strong>, tập trung vào nhu cầu công việc
            và áp dụng triết lý <em>“Non-Homework”</em> – không giao thêm bài tập
            về nhà. Thay vào đó, mọi bài tập được thực hành và sửa lỗi ngay trên
            lớp, giúp học viên vừa nắm chắc kiến thức vừa tối ưu thời gian.
          </p>

          <p>
            Điểm nổi bật của RealTalk là đưa các tình huống công sở thực tế vào
            lớp học: <em>thuyết trình dự án</em>, <em>pitching trước nhà đầu tư</em>,{" "}
            <em>viết email</em>, <em>họp trực tuyến</em>, <em>thương lượng hợp đồng</em>… Sau
            45 buổi, học viên không chỉ “nói trôi chảy” mà quan trọng hơn là{" "}
            <strong>dùng tiếng Anh để làm việc</strong>, sẵn sàng cho môi trường
            toàn cầu hóa.
          </p>

          <blockquote className="border-l-4 border-[#cf0001] pl-6 italic text-justify text-gray-700">
            “Chúng tôi hiểu rằng với người đi làm, tiếng Anh phải thực tế và
            hiệu quả, chứ không thể là gánh nặng. RealTalk được xây dựng để đồng
            hành theo cách nhẹ nhàng nhưng bền vững: không cần bài tập về nhà,
            nhưng đảm bảo học viên sẽ thấy rõ sự thay đổi sau 45 buổi học.”
            <br />— Đại diện HLE chia sẻ
          </blockquote>

          <p>
            Với sự ra mắt của <strong>RealTalk</strong>, HLE tiếp tục khẳng định
            cam kết đồng hành cùng nhân lực Việt Nam, biến tiếng Anh thành lợi
            thế nội tại, giúp mỗi cá nhân mở rộng con đường sự nghiệp và tự tin
            vươn ra quốc tế.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Bắt đầu hành trình “Tiếng Anh thực tế – Không bài tập về nhà”
          </h3>
          <p className="text-gray-600 mb-6">
            Khám phá RealTalk – chương trình học 1 kèm 1 giúp người đi làm tự
            tin sử dụng tiếng Anh trong công việc và hội nhập quốc tế.
          </p>
          <Link href="/lien-he">
            <Button className="bg-[#cf0001] hover:bg-[#8b0000] text-white rounded-full px-8 py-3 text-lg shadow-md">
              Liên hệ tư vấn ngay
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
