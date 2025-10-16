import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "giao-tiep-tieng-anh-nen-tang-ky-nang-mem",
    title: "Giao tiếp tiếng Anh – Nền tảng cho kỹ năng mềm và sự nghiệp bền vững",
    excerpt:
      "Tiếng Anh không còn được xem là môn học phụ mà đã trở thành năng lực cốt lõi của sinh viên và người đi làm trong bối cảnh hội nhập quốc tế.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog1.jpg-5c7IuUjushGzLy1YdLuUFgmtA9TPsR.jpeg",
    category: "Kỹ năng mềm",
    date: "15/12/2024",
    readTime: "5 phút đọc",
  },
  {
    id: 2,
    slug: "tieng-anh-canh-cua-co-hoi-hoc-sinh-viet-nam",
    title: "Tiếng Anh – Cánh cửa mở ra cơ hội cho thế hệ học sinh và người đi làm Việt Nam",
    excerpt:
      "Việc đưa tiếng Anh trở thành ngôn ngữ thứ hai trong nhà trường là một chiến lược quan trọng và cấp thiết trong bối cảnh hội nhập quốc tế.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog2.jpg-0LpZiA3ahbMeUI7q9nyUxKUBDIKWO0.jpeg",
    category: "Giáo dục",
    date: "12/12/2024",
    readTime: "6 phút đọc",
  },
  {
    id: 3,
    slug: "soi-day-ket-noi-viet-nam-tap-doan-cong-nghe",
    title: "Sợi dây kết nối Việt Nam với các tập đoàn công nghệ toàn cầu",
    excerpt:
      "Vai trò then chốt của tiếng Anh chuyên ngành trong việc thu hút FDI công nghệ cao và tham gia chuỗi R&D toàn cầu.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blog3.png-rzQEHUrn0GR0tUedpqSypcgRtayDed.jpeg",
    category: "Công nghệ",
    date: "10/12/2024",
    readTime: "8 phút đọc",
  },
  {
    id: 4,
    slug: "khong-the-chi-dung-o-giao-tiep",
    title: "Tiếng Anh trong thời hội nhập không thể chỉ dừng lại ở giao tiếp",
    excerpt:
      "Trong thời hội nhập, Tiếng Anh không chỉ để giao tiếp – mà là công cụ khẳng định năng lực và mở rộng cơ hội toàn cầu.",
    image: "",
    category: "Công nghệ",
    date: "10/09/2025",
    readTime: "8 phút đọc",
  },
  {
    id: 5,
    slug: "lo-trinh-5-buoi",
    title: "Hồng Lĩnh Education ra mắt sản phẩm GoTalk với lộ trình 5 buổi “Tiếng Anh Phỏng Vấn” – Đồng hành cùng nhân lực Việt trên hành trình hội nhập quốc tế",
    excerpt:
      "Tự tin nói tiếng Anh trong mọi buổi phỏng vấn với GoTalk – sản phẩm mới từ Hồng Lĩnh Education, đồng hành cùng bạn trên hành trình quốc tế.",
    image: "",
    category: "Khóa học",
    date: "10/10/2025",
    readTime: "6 phút đọc",
  },
  {
    id: 6,
    slug: "thuc-day-hoi-nhap-quoc-te",
    title: "Hồng Lĩnh Education (HLE) thúc đẩy hội nhập quốc tế cho người lao động Việt khi cho ra mắt sản phẩm Tiếng Anh Phỏng Vấn",
    excerpt:
      "HLE mang đến giải pháp học Tiếng Anh thực chiến cho người lao động Việt – sẵn sàng phỏng vấn và làm việc trong môi trường quốc tế.",
    image: "",
    category: "Kĩ năng",
    date: "10/10/2025",
    readTime: "7 phút đọc",
  },
  {
    id: 7,
    slug: "giai-phap-non-homework",
    title: "HLE ra mắt lột trình học mới cho sản phẩm của RealTalk – Giải pháp tiếng Anh “Non-Homework” cho người đi làm bận rộn",
    excerpt:
      "HLE mang đến lộ trình RealTalk mới – học tiếng Anh không bài tập, không áp lực, vẫn tiến bộ mỗi ngày.",
    image: "",
    category: "Khóa học",
    date: "19/09/2025",
    readTime: "7 phút đọc",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#cf0001] to-[#8b0000] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Blog HLE</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto text-pretty">
            Khám phá những bài viết chuyên sâu về tiếng Anh, kỹ năng mềm và cơ hội nghề nghiệp
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-[#cf0001] text-white text-sm px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="text-sm text-gray-500">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 text-balance">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-pretty">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="bg-[#cf0001] hover:bg-[#8b0000] text-white w-full">Đọc tiếp</Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
