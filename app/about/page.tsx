"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  const statistics = [
    {
      number: "2000+",
      label: "Học viên sau 2 năm",
    },
    {
      number: "95%",
      label: "Học viên tiến bộ giáo 5 lần trong khi tiết kiếm 1/2 thời gian học",
    },
    {
      number: "70%",
      label: "Tiết kiệm chi phí hơn so với các cách vụ hiện thời",
    },
    {
      number: "50+",
      label: "Mạng lưới và các trường đại học với các dịch vụ hiện thời",
    },
  ]

  const visionStats = [
    {
      number: "1000+",
      label: "Mạng lưới trường đại học, THPT và các doanh nghiệp đã tác tại Việt Nam vô khu vực",
    },
    {
      number: "5M+",
      label: "Người dùng trên các nền tảng website & ứng dụng tập của Hồng Linh",
    },
    {
      number: "10+",
      label: "Mạng lưới trường đại học, THPT và các doanh nghiệp đã tác tại Việt Nam vô khu vực",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#cd0000] text-center">Giới thiệu</h1>

          <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>

          <div className="mb-12 text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Hồng Lĩnh Education (HLE)</strong> - Hệ sinh thái đào tạo và phát triển Giáo dục Hồng Linh là cộng
              đồng giáo dục tiên phong trong việc cung cấp các công cụ hỗ trợ Định hướng nghề nghiệp, hỗ trợ học tập và
              gia tốc khả năng trở thành một con người xuất sắc. Xác định người sử dụng từ nguồn sơ cấp đến người đi
              làm.
            </p>
            <p>
              Với sứ mệnh hướng tâm nâng lực học tập và hội nhập toàn cầu cho thế hệ Việt Nam, Hồng Lĩnh không ngừng đổi
              mới trong cả hình thức giáo học, nội dung chương trình và công nghệ EdTech và đã đạt được nhiều thành tựu
              vượt trội trong việc giúp học sinh và sinh viên đạt được mục tiêu học tập và sự nghiệp của mình.
            </p>
            <p>
              Đội ngũ chuyên gia giáo dục tiên phong tăng tốc sự tiến bộ, tự tin và giáo viên tận tâm đang đào tạo hàng
              sẵu thế hệ và giá trị mà đang mang lại cho học sinh, sinh viên và cộng đồng của mình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {statistics.map((stat, index) => (
              <div key={index} className="border-l-4 border-[#cd0000] pl-6 py-2">
                <div className="text-4xl md:text-5xl font-bold text-[#cd0000] mb-2">{stat.number}</div>
                <p className="text-gray-700 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#cd0000] text-center">Tầm nhìn & Sứ mệnh</h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Vision Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center text-[#cd0000] mb-6">Tầm nhìn</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Trong 5 - 10 năm tới, Hồng Lĩnh hướng tới trở thành một trong hệ sinh thái EdTech & Academic Support
                hàng đầu khu vực.
              </p>

              {/* Vision Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {visionStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#cd0000] mb-2">{stat.number}</div>
                    <p className="text-sm text-gray-600 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-center text-[#cd0000] mb-6">Sứ mệnh</h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hồng Lĩnh tìm ra những giáo dục không chỉ là chuyển diễn từ hay bằng cao, mà là xây dựng tác thực và
                  niềm tin cho người học thành công trong cuộc đời.
                </p>
                <p>
                  <strong>Sứ mệnh của Hồng Lĩnh là:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Sử dụng công nghệ người một phát triển các chiến và sử thật năng lần trung công nghệ, quá độ hiệu
                    quả và đơn giản tiếp cận
                  </li>
                  <li>
                    Tạo trường liên sở thành công của giảo viên cộng nhà tại tục đào cao do nhận tức tiễn với sở được
                    những nệt thế hệ người học trường lại và thành công của giáo viên công của thế giải
                  </li>
                  <li>
                    Tạo sống và công nghệ, quá độ hiệu quả và đơn giản tiếp cận của các giáo, quá độ mô hòi nhóp toàn
                    cầu
                  </li>
                </ul>
                <p>
                  Hồng Lĩnh tận tâm đối giúp việc học từ ra lấn có mục tiêu song ngữ tại Việt Nam bắt tố thủ khả năng
                  thực dụng đúng quốc gia công nghệ cao lớn, sáng tạo, hội nhập toàn cầu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
