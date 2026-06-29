import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPost1() {
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
              src="/images/design-mode/blog1.jpg.jpeg"
              alt="Giao tiếp tiếng Anh – Nền tảng cho kỹ năng mềm"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              15/12/2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />5 phút đọc
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              HLE Team
            </div>
          </div>

          <span className="inline-block bg-[#cf0001] text-white text-sm px-3 py-1 rounded-full mb-4">Kỹ năng mềm</span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Giao tiếp tiếng Anh – Nền tảng cho kỹ năng mềm và sự nghiệp bền vững
          </h1>

          <p className="text-xl text-gray-600 text-pretty">
            Tiếng Anh không còn được xem là môn học phụ mà đã trở thành năng lực cốt lõi của sinh viên và người đi làm
            trong bối cảnh hội nhập quốc tế và chuyển đổi số.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tiếng Anh: Từ ngoại ngữ đến năng lực cốt lõi</h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Trong bối cảnh hội nhập quốc tế và chuyển đổi số, tiếng Anh không còn được xem là môn học phụ mà đã trở
            thành năng lực cốt lõi của sinh viên và người đi làm. Theo báo cáo EF English Proficiency Index 2023, Việt
            Nam đứng thứ 58/113 quốc gia về năng lực tiếng Anh, xếp nhóm "Trung bình".
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Điều này cho thấy, nếu không cải thiện kỹ năng giao tiếp tiếng Anh, người lao động sẽ gặp nhiều hạn chế khi
            tham gia thị trường toàn cầu – nơi tiếng Anh là ngôn ngữ chung trong thương mại, công nghệ và nghiên cứu.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tiếng Anh và sự phát triển kỹ năng mềm</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Không chỉ dừng lại ở từ vựng và ngữ pháp, các chương trình đào tạo tiếng Anh hiện đại đã tích hợp nhiều tình
            huống thực tế nhằm phát triển kỹ năng mềm cho người học:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Mô phỏng tình huống công sở:</strong> họp nhóm, thương lượng, pitching dự án
            </li>
            <li>
              <strong>Workshop thuyết trình và tranh biện:</strong> rèn luyện tư duy phản biện và khả năng thuyết phục
            </li>
            <li>
              <strong>Dự án mô phỏng quốc tế:</strong> viết báo cáo, thuyết trình và quản lý nhóm đa văn hóa bằng tiếng
              Anh
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tiếng Anh mở rộng cơ hội nghề nghiệp</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Các nghiên cứu và khảo sát đã chứng minh mối liên hệ chặt chẽ giữa năng lực tiếng Anh và cơ hội nghề nghiệp:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              Nghiên cứu của British Council Việt Nam (2022) cho thấy, sinh viên thành thạo tiếng Anh có tỷ lệ trúng
              tuyển cao gấp 2 lần
            </li>
            <li>
              Báo cáo của Navigos Search chỉ ra rằng, hơn 70% vị trí quản lý tại doanh nghiệp FDI yêu cầu tiếng Anh
              thành thạo
            </li>
            <li>
              Khảo sát nội bộ tại Microsoft, Unilever, Grab cho thấy nhân viên có khả năng tiếng Anh tốt thường được
              giao dự án trọng điểm
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Tiếng Anh – cầu nối văn hóa và sự nghiệp bền vững
          </h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Trong môi trường làm việc hybrid và remote, tiếng Anh đóng vai trò như "ngôn ngữ chung", giúp nhân sự ở
            nhiều quốc gia kết nối hiệu quả. Khả năng sử dụng tiếng Anh thành thạo mang lại những lợi thế rõ rệt:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li>Hợp tác xuyên biên giới không gặp rào cản</li>
            <li>Thấu hiểu sự đa dạng văn hóa, giảm xung đột trong công việc</li>
            <li>Nâng cao năng lực lãnh đạo toàn cầu – một tiêu chí quan trọng tại các tập đoàn đa quốc gia</li>
          </ul>

          <div className="bg-[#cf0001]/5 border-l-4 border-[#cf0001] p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kết luận</h3>
            <p className="text-gray-700 leading-relaxed">
              Tiếng Anh không đơn thuần là kỹ năng ngôn ngữ, mà là công cụ chiến lược giúp sinh viên và người đi làm mở
              rộng cơ hội việc làm, thăng tiến trong nghề nghiệp, tiếp cận học bổng quốc tế và phát triển sự nghiệp bền
              vững. Đầu tư vào giao tiếp tiếng Anh đồng nghĩa với việc xây dựng lợi thế cạnh tranh cá nhân trong một thế
              giới ngày càng hội nhập và cạnh tranh toàn cầu.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Bắt đầu hành trình tiếng Anh của bạn</h3>
          <p className="text-gray-600 mb-6">
            Tham gia các khóa học tiếng Anh chuyên nghiệp tại HLE để phát triển kỹ năng mềm và mở rộng cơ hội nghề
            nghiệp
          </p>
          <Link href="/lien-he">
            <Button className="bg-[#cf0001] hover:bg-[#8b0000] text-white px-8 py-3">Liên hệ tư vấn</Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
