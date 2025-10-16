import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPostGoTalk() {
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
              src="/images/design-mode/blog-gotalk.jpg"
              alt="GoTalk - Tiếng Anh Phỏng Vấn"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> 15/10/2025
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 6 phút đọc
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> HLE Team
            </div>
          </div>

          <div className="inline-block bg-[#cf0001]/10 text-[#cf0001] px-3 py-1 rounded-full text-sm font-medium mb-3">
            Kỹ năng nghề nghiệp
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            GoTalk ra mắt lộ trình 5 buổi “Tiếng Anh Phỏng Vấn” – Giải pháp thực
            tiễn cho người lao động Việt
          </h1>

          <p className="text-lg text-gray-600">
            Chương trình được thiết kế nhằm giúp người lao động Việt Nam vượt
            qua rào cản tiếng Anh trong phỏng vấn, tự tin hội nhập vào môi
            trường làm việc quốc tế.
          </p>
        </header>

        {/* Nội dung bài viết */}
        <div className="prose prose-lg max-w-none">
          <p>
            Trong bối cảnh toàn cầu hóa và hội nhập kinh tế – văn hóa mạnh mẽ,
            tiếng Anh ngày càng trở thành yếu tố sống còn để người lao động Việt
            Nam khẳng định năng lực, mở rộng cơ hội nghề nghiệp và thăng tiến.
          </p>

          <p>
            Theo nghiên cứu{" "}
            <em>
              “Mức độ bao phủ từ vựng và tiềm năng học từ vựng ngẫu nhiên trong
              giáo trình tiếng Anh dành cho sinh viên Việt Nam”
            </em>{" "}
            công bố năm 2025, kết quả cho thấy với vốn từ phổ biến khoảng{" "}
            <strong>4.000 từ</strong>, người học đã đạt được 95% mức độ bao phủ
            trong các văn bản đọc — nhưng để đạt 98%, cần tới khoảng{" "}
            <strong>6.000 từ</strong>.
          </p>

          <p>
            Tuy nhiên, giữa lý thuyết và thực tế vẫn tồn tại khoảng cách: không
            ít người đi làm có chuyên môn tốt nhưng lại đánh mất cơ hội ngay từ
            vòng phỏng vấn bằng tiếng Anh – do thiếu tự tin, không quen với tình
            huống phỏng vấn quốc tế, hoặc chưa biết cách xây dựng câu trả lời
            thuyết phục.
          </p>

          <h2>GoTalk – Lộ trình 5 buổi “Tiếng Anh Phỏng Vấn”</h2>

          <p>
            Nhận diện được thách thức đó, <strong>GoTalk</strong> – đơn vị trực
            thuộc <strong>HLE</strong> đã triển khai chương trình lộ trình 5
            buổi “Tiếng Anh Phỏng Vấn”, với cam kết mang đến giá trị thực tiễn
            và nhanh chóng cho người lao động. Khóa học được thiết kế để làm rõ
            khoảng cách giữa năng lực hiện tại và yêu cầu từ nhà tuyển dụng quốc
            tế, đồng thời trang bị kỹ thuật – chiến lược giúp học viên vượt qua
            vòng phỏng vấn.
          </p>

          <h3>Nội dung nổi bật của lộ trình cấp tốc</h3>

          <ul>
            <li>
              <strong>Tình huống phỏng vấn sát thực tế:</strong> từ câu hỏi
              “Introduce yourself” đến các tình huống áp lực, với hình thức
              role-play tương tác.
            </li>
            <li>
              <strong>Cách trả lời thông minh:</strong> không dừng lại ở dịch
              từng câu từ tiếng Việt, mà tập trung vào storytelling – biến câu
              trả lời thành câu chuyện thuyết phục, làm bật năng lực, thái độ và
              giá trị cá nhân.
            </li>
            <li>
              <strong>Tư duy hội nhập:</strong> học cách sử dụng ngôn từ phù
              hợp, ngữ điệu chuyên nghiệp để khi gặp nhà tuyển dụng quốc tế, học
              viên không chỉ hiểu mà còn tạo được ấn tượng tích cực.
            </li>
          </ul>

          <blockquote className="border-l-4 border-[#cf0001] pl-6 italic text-gray-700">
            “Chúng tôi không xem tiếng Anh như một môn học phụ trợ, mà coi đó là
            công cụ chiến lược để nhân lực Việt có thể tự tin bước vào môi
            trường quốc tế. Chương trình 5 buổi này là bước khởi đầu để mỗi
            người xác định mình đang ở đâu và cần chuẩn bị gì để vươn cao hơn.”
            <br />— Đại diện HLE chia sẻ
          </blockquote>

          <p>
            Với sứ mệnh đồng hành cùng người lao động Việt, HLE mong muốn biến
            tiếng Anh thành một lợi thế nội tại, đồng thời truyền cảm hứng về
            tinh thần cầu tiến, đổi mới và bản lĩnh hội nhập. Khi tiếng Anh không
            còn là rào cản, mỗi cá nhân hoàn toàn có thể mở rộng con đường sự
            nghiệp, đón nhận cơ hội học bổng, việc làm quốc tế hoặc hợp tác
            xuyên biên giới.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Đăng ký tham gia lộ trình “Tiếng Anh Phỏng Vấn”
          </h3>
          <p className="text-gray-600 mb-6">
            Chỉ trong 5 buổi, bạn sẽ nắm vững kỹ thuật phỏng vấn chuyên nghiệp,
            tự tin chinh phục nhà tuyển dụng quốc tế cùng GoTalk.
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
