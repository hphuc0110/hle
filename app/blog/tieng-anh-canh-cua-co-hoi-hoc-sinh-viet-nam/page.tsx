import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPost2() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 text-[#cf0001] hover:text-[#8b0000]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-8">
          <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
            <img
              src="/images/design-mode/blog2.jpg.jpeg"
              alt="Tiếng Anh – Cánh cửa mở ra cơ hội"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              12/12/2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />6 phút đọc
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              HLE Team
            </div>
          </div>

          <span className="inline-block bg-[#cf0001] text-white text-sm px-3 py-1 rounded-full mb-4">Giáo dục</span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Tiếng Anh – Cánh cửa mở ra cơ hội cho thế hệ học sinh và người đi làm Việt Nam
          </h1>

          <p className="text-xl text-gray-600 text-pretty">
            Việc đưa tiếng Anh trở thành ngôn ngữ thứ hai trong nhà trường là một chiến lược quan trọng và cấp thiết
            trong bối cảnh hội nhập quốc tế sâu rộng.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tiếng Anh – Nền tảng quan trọng trong hội nhập quốc tế
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Trong bối cảnh hội nhập quốc tế sâu rộng và nhu cầu nhân lực chất lượng cao ngày càng tăng, việc đưa tiếng
            Anh trở thành ngôn ngữ thứ hai trong nhà trường là một chiến lược quan trọng và cấp thiết. Đây là nội dung
            trọng tâm được Bộ Giáo dục và Đào tạo đề ra trong công văn hướng dẫn thực hiện nhiệm vụ năm học 2025–2026.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Mục tiêu này không chỉ nhằm nâng cao năng lực ngoại ngữ cho học sinh, sinh viên và giáo viên, mà còn góp
            phần phát triển nguồn nhân lực chất lượng cao, đáp ứng yêu cầu hội nhập quốc tế.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Lộ trình triển khai tiếng Anh như ngôn ngữ thứ hai
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Theo Công văn 4555/BGDĐT-GDPT, Bộ Giáo dục và Đào tạo đề ra ba giai đoạn triển khai cụ thể:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-bold text-blue-900 mb-2">Giai đoạn 1 (2025–2026)</h3>
              <p className="text-blue-800">
                Chuẩn bị và thí điểm tại một số trường học, bao gồm xây dựng chương trình, bồi dưỡng đội ngũ giáo viên,
                nâng cấp cơ sở vật chất.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-bold text-green-900 mb-2">Giai đoạn 2 (2027–2030)</h3>
              <p className="text-green-800">
                Mở rộng triển khai trên diện rộng, đánh giá hiệu quả và điều chỉnh phù hợp với thực tiễn.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 className="font-bold text-purple-900 mb-2">Giai đoạn 3 (2031–2045)</h3>
              <p className="text-purple-800">
                Hoàn thiện mô hình dạy học, hướng tới mục tiêu tiếng Anh trở thành ngôn ngữ thứ hai trong toàn bộ hệ
                thống giáo dục Việt Nam.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Giải pháp thực hiện</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Để đảm bảo việc đưa tiếng Anh trở thành ngôn ngữ thứ hai đạt hiệu quả, Bộ Giáo dục và Đào tạo đưa ra nhiều
            giải pháp trọng tâm:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
            <li>
              <strong>Xây dựng chương trình dạy học:</strong> Tích hợp tiếng Anh trong các môn học, tăng cường số tiết
              học, áp dụng giáo trình quốc tế phù hợp
            </li>
            <li>
              <strong>Phát triển đội ngũ giáo viên:</strong> Đào tạo, bồi dưỡng năng lực chuyên môn cho giáo viên tiếng
              Anh và giáo viên bộ môn có giảng dạy bằng tiếng Anh
            </li>
            <li>
              <strong>Đầu tư cơ sở vật chất:</strong> Trang bị phòng học hiện đại, thiết bị nghe nhìn và phần mềm hỗ trợ
              học tập
            </li>
            <li>
              <strong>Hợp tác quốc tế:</strong> Mở rộng liên kết với các tổ chức giáo dục quốc tế, học hỏi mô hình từ
              các quốc gia tiên tiến
            </li>
            <li>
              <strong>Ứng dụng công nghệ:</strong> Xây dựng nền tảng học trực tuyến, kho học li��u số và giải pháp học
              tập thông minh
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Kỳ vọng và triển vọng</h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Việc đưa tiếng Anh trở thành ngôn ngữ thứ hai trong trường học không chỉ giúp học sinh nâng cao kỹ năng
            ngoại ngữ mà còn mở rộng cơ hội học tập, nghiên cứu và làm việc trong môi trường quốc tế. Đây là bước đi
            quan trọng nhằm xây dựng thế hệ lao động có tư duy toàn cầu, sẵn sàng đáp ứng yêu cầu phát triển bền vững.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Triển vọng cho học sinh và người đi làm</h3>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Đối với những học sinh và người đi làm đã có nền tảng tiếng Anh, lộ trình mới này là cơ hội để:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Nâng cao năng lực chuyên sâu</li>
            <li>Luyện tập kỹ năng thực hành trong nhiều lĩnh vực</li>
            <li>Áp dụng tiếng Anh như một công cụ để nghiên cứu, giải quyết vấn đề và phát triển sự nghiệp</li>
          </ul>

          <div className="bg-[#cf0001]/5 border-l-4 border-[#cf0001] p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kết luận</h3>
            <p className="text-gray-700 leading-relaxed">
              Chiến lược đưa tiếng Anh trở thành ngôn ngữ thứ hai trong giáo dục Việt Nam không chỉ là cải cách ngôn
              ngữ, mà là bước ngoặt quan trọng trong xây dựng nguồn nhân lực chất lượng cao. Đây chính là "cánh cửa"
              giúp học sinh, sinh viên và người lao động Việt Nam tiếp cận tri thức toàn cầu, mở rộng cơ hội nghề nghiệp
              và chủ động hội nhập trong kỷ nguyên toàn cầu hóa.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Chuẩn bị cho tương lai với HLE</h3>
          <p className="text-gray-600 mb-6">
            Tham gia ngay các chương trình tiếng Anh chuyên nghiệp để không bỏ lỡ cơ hội trong kỷ nguyên hội nhập
          </p>
          <Link href="/lien-he">
            <Button className="bg-[#cf0001] hover:bg-[#8b0000] text-white px-8 py-3">Đăng ký tư vấn</Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
