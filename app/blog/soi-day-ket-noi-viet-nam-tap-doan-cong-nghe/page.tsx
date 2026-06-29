import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function BlogPost3() {
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
              src="/images/design-mode/blog3.png.jpeg"
              alt="Sợi dây kết nối Việt Nam với các tập đoàn công nghệ toàn cầu"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              10/12/2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />8 phút đọc
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              HLE Team
            </div>
          </div>

          <span className="inline-block bg-[#cf0001] text-white text-sm px-3 py-1 rounded-full mb-4">Công nghệ</span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Sợi dây kết nối Việt Nam với các tập đoàn công nghệ toàn cầu: vai trò then chốt của tiếng Anh chuyên ngành
          </h1>

          <p className="text-xl text-gray-600 text-pretty">
            Việt Nam đang ở vị thế thuận lợi để thu hút FDI công nghệ cao, nhưng rào cản quan trọng là năng lực tiếng
            Anh chuyên ngành của lực lượng lao động.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thực trạng: cơ hội FDI công nghệ cao đang mở rộng</h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Trong những năm gần đây, Việt Nam liên tiếp ghi nhận lượng FDI lớn và đang nỗ lực chuyển dịch sang các ngành
            công nghệ cao như bán dẫn, trí tuệ nhân tạo và năng lượng xanh. Chính phủ và các đối tác đang thảo luận các
            cơ chế kích thích, ưu đãi để thu hút nhà đầu tư lĩnh vực "high-tech".
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Tính thực tế: nhiều doanh nghiệp công nghệ toàn cầu và tập đoàn nội địa có tham vọng mở rộng R&D tại Việt
            Nam (ví dụ FPT hợp tác với NVIDIA đầu tư mô hình "AI factory"), cho thấy cơ hội không còn chỉ ở sản xuất mà
            mở rộng sang nghiên cứu và phát triển.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-yellow-800 font-medium">
              <strong>Thách thức:</strong> Các báo cáo khảo sát cho thấy tỷ lệ công nhân, kỹ sư có năng lực tiếng Anh
              phù hợp cho công việc kỹ thuật còn thấp — ManpowerGroup trích dẫn con số khoảng 5% lao động đáp ứng yêu
              cầu ngoại ngữ chuyên cho công việc.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tại sao tiếng Anh chuyên ngành lại quan trọng</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Tiếng Anh chuyên ngành không chỉ là "giao tiếp" mà còn bao gồm:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="font-bold text-blue-900 mb-2">Đọc hiểu nghiên cứu, tiêu chuẩn kỹ thuật</h3>
              <p className="text-blue-800">
                Tài liệu chuyên sâu, whitepapers, tiêu chuẩn thiết kế và mã nguồn thường bằng tiếng Anh. Thiếu chuyên
                môn ngôn ngữ sẽ khiến nhân lực phụ thuộc vào phiên dịch.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="font-bold text-green-900 mb-2">Truyền đạt ý tưởng và bảo vệ sáng kiến</h3>
              <p className="text-green-800">
                Việc thuyết trình, viết proposals, nộp hồ sơ xin tài trợ hay báo cáo R&D đều đòi hỏi khả năng diễn đạt
                chuyên ngành bằng tiếng Anh.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 className="font-bold text-purple-900 mb-2">Hợp tác liên văn hóa</h3>
              <p className="text-purple-800">
                Trong nhóm đa quốc gia, giao tiếp kỹ thuật bằng tiếng Anh quyết định hiệu quả phối hợp, giảm sai sót kỹ
                thuật và tăng tốc phát triển sản phẩm.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Các rào cản chính tại Việt Nam</h2>

          <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
            <li>
              <strong>Giáo dục ngoại ngữ chưa đủ "đi vào chuyên ngành":</strong> nhiều chương trình vẫn tập trung ngữ
              pháp/giao tiếp chung, thiếu lộ trình ESP (English for Specific Purposes)
            </li>
            <li>
              <strong>Thiếu liên kết trường — doanh nghiệp:</strong> ít internship/coop placement có yêu cầu và môi
              trường làm việc bằng tiếng Anh chuyên ngành
            </li>
            <li>
              <strong>Chi phí và quy mô đào tạo chất lượng cao:</strong> đào tạo đội ngũ giáo viên ESP, tạo tài liệu
              chuyên môn chuyên sâu tốn nguồn lực
            </li>
            <li>
              <strong>Thiếu hệ thống đánh giá chuẩn:</strong> cho "English + technical competence" để nhà tuyển dụng và
              trường học cùng dùng chung thang đo
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Giải pháp chiến lược</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Nếu muốn bước lên nấc thang cao hơn trong chuỗi giá trị toàn cầu, Việt Nam không thể chỉ dựa vào lợi thế chi
            phí lao động hay chính sách ưu đãi FDI. Yếu tố then chốt chính là năng lực ngoại ngữ chuyên ngành của lực
            lượng lao động trẻ.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Để hiện thực hóa mục tiêu này, cần triển khai đồng bộ một số giải pháp trọng tâm:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Xây dựng chương trình ESP</h3>
              <p className="text-gray-700 text-sm">English for Specific Purposes cho từng ngành kỹ thuật</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Kết nối doanh nghiệp – trường học</h3>
              <p className="text-gray-700 text-sm">Tạo môi trường thực hành tiếng Anh chuyên ngành</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Đào tạo giảng viên ESP</h3>
              <p className="text-gray-700 text-sm">Phát triển đội ngũ mentor kỹ thuật song ngữ</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">E-learning và micro-credential</h3>
              <p className="text-gray-700 text-sm">Ứng dụng công nghệ trong đào tạo chuyên ngành</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Dấu hiệu tích cực từ thị trường</h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Các doanh nghiệp công nghệ nội địa đã bắt đầu có những bước đi chiến lược để tham gia sâu hơn vào chuỗi giá
            trị toàn cầu. Điển hình là việc FPT hợp tác với NVIDIA để xây dựng "AI Factory" tại Việt Nam, cho thấy năng
            lực R&D không còn chỉ là tham vọng mà đang dần trở thành hiện thực.
          </p>

          <p className="mb-8 text-gray-700 leading-relaxed">
            Tuy nhiên, để biến cơ hội này thành lợi thế cạnh tranh bền vững, Việt Nam cần nhanh chóng giải quyết bài
            toán năng lực nhân lực – đặc biệt là ngoại ngữ chuyên ngành và kỹ năng làm việc trong môi trường đa văn hóa.
          </p>

          <div className="bg-[#cf0001]/5 border-l-4 border-[#cf0001] p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Kết luận: Từ "cầu nối sản xuất" thành "đối tác R&D"
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Việc tận dụng tiềm năng phụ thuộc vào ba yếu tố đồng thời: (1) chính sách ưu đãi hướng tới R&D kèm điều
              khoản phát triển nhân lực, (2) nỗ lực hệ thống trong giáo dục và đào tạo ESP, (3) hợp lực giữa doanh
              nghiệp — trường đại học — viện nghiên cứu để tạo môi trường thực hành bằng tiếng Anh. Nếu các bên phối hợp
              quyết liệt, Việt Nam hoàn toàn có thể trở thành nhân tố chủ chốt trong các dự án R&D khu vực và toàn cầu.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Chuẩn bị cho kỷ nguyên công nghệ</h3>
          <p className="text-gray-600 mb-6">
            Tham gia các khóa học tiếng Anh chuyên ngành tại HLE để sẵn sàng cho cơ hội R&D toàn cầu
          </p>
          <Link href="/lien-he">
            <Button className="bg-[#cf0001] hover:bg-[#8b0000] text-white px-8 py-3">Tư vấn chương trình ESP</Button>
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}
