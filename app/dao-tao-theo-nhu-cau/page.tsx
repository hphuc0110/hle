"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle, Users, Target, TrendingUp, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CorporateTrainingPage() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Thực thi kế hoạch phát triển đội ngũ nhân sự hội nhập và cạnh tranh",
      description: "Nâng cao năng lực giao tiếp tiếng Anh cho đội ngũ nhân viên",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tối ưu hóa hiệu suất công việc của nhân viên làm chủ các kỹ năng Nghe - Nói - Đọc - Viết",
      description: "Phát triển toàn diện 4 kỹ năng tiếng Anh cần thiết",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tối ưu chi phí đầu tư phát triển với nhiều chính sách linh hoạt",
      description: "Giải pháp đào tạo hiệu quả với chi phí hợp lý",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Xây dựng và rèn luyện tinh thần học tập",
      description: "Tạo môi trường học tập tích cực và bền vững",
    },
  ]

  const processSteps = [
    {
      id: "consultation",
      title: "Tư vấn & Đề xuất phương án",
      content: [
        "HLE tiếp nhận nhu cầu đào tạo của doanh nghiệp.",
        "HLE đề xuất phương án triển khai chương trình đào tạo theo nhu cầu mà doanh nghiệp mong muốn.",
      ],
    },
    {
      id: "contract",
      title: "Ký kết Hợp đồng và triển khai",
      content: [
        "HLE và doanh nghiệp thảo luận về các điều khoản hợp tác.",
        "Ký kết hợp đồng đào tạo tiếng Anh cho doanh nghiệp.",
      ],
    },
    {
      id: "development",
      title: "Xây dựng chương trình đào tạo",
      content: [
        "HLE tiến hành xây dựng chương trình và mời công tác chuẩn bị cho khóa học theo hợp đồng đào tạo.",
        "HLE phối hợp cùng doanh nghiệp trong các nội dung công việc có liên quan đến quản lý chương trình đào tạo.",
      ],
    },
    {
      id: "launch",
      title: "Khai giảng khóa học",
      content: [
        "Khai giảng khóa học theo lịch trình.",
        "Theo dõi và đánh giá chất lượng khóa học định kỳ.",
        "Báo cáo kết quả đào tạo cho doanh nghiệp.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xE4kBEJmkqMYsXpBX4ZJYgqYS4dT1T.png")',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(139, 0, 0, 0.9)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-sm font-medium hero-text-white">{"Program > Tiếng Anh Doanh Nghiệp"}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance hero-text-white">
            {"TIẾNG ANH DOANH NGHIỆP"}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-balance opacity-95 hero-text-white">
            {"Giải pháp đào tạo tiếng Anh chuyên nghiệp cho doanh nghiệp"}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">HLE đồng hành cùng doanh nghiệp</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full text-primary">{benefit.icon}</div>
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <h3 className="font-semibold text-foreground leading-tight">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quy trình triển khai</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(step.id)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${
                    activeAccordion === step.id
                      ? "bg-primary/5 text-primary"
                      : "bg-muted/50 hover:bg-muted text-foreground"
                  }`}
                >
                  <span className="font-semibold text-lg">{step.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${activeAccordion === step.id ? "rotate-180" : ""}`}
                  />
                </button>

                {activeAccordion === step.id && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <ul className="space-y-3">
                      {step.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sẵn sàng bắt đầu hành trình đào tạo?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn giải pháp đào tạo tiếng Anh phù hợp nhất cho doanh nghiệp của bạn.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Liên hệ tư vấn ngay
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
