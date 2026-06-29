"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface Event {
  id: number
  title: string
  image: string
  images?: string[] // optional additional images
  description: string
  date?: string
  location?: string
}

const events: Event[] = [
  {
    id: 1,
    title:
      "[AI LABTOUR HLE] HÀNH TRÌNH KHÁM PHÁ NGHỀ KỸ SƯ AI CỦA HỌC SINH CẤP 3 TẠI ĐẠI HỌC BÁCH KHOA HÀ NỘI",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "images/events/ai-labtour-1.jpg",
      "images/events/ai-labtour-2.jpg",
      "images/events/ai-labtour-3.jpg",
      "images/events/ai-labtour-4.jpg",
      "images/events/ai-labtour-5.jpg",
      "images/events/ai-labtour-6.jpg",
      "images/events/ai-labtour-7.jpg",
    ],
    description: `
Sự kiện AI Labtour tại Đại học Bách Khoa Hà Nội đã chính thức khép lại, nhưng những giá trị mà các bạn học sinh nhận được chắc chắn sẽ là cơ sở giúp các em trên hành trình lựa chọn ngành nghề tương lai. 
Không chỉ được tiếp cận những kiến thức nền tảng về Trí tuệ Nhân tạo, các em còn trực tiếp quan sát và trải nghiệm môi trường nghiên cứu. 
Ngoài ra các em được làm Bài Test tư duy AI do giảng viên ĐHBK Hà Nội xây dựng đã giúp mỗi bạn có cái nhìn rõ ràng hơn về năng lực hiện tại và mức độ phù hợp với ngành, từ đó dễ dàng hoạch định lộ trình học tập ngay từ cấp 3. 
Bên cạnh đó, những chia sẻ về AI-57 – chương trình đào tạo kỹ sư AI toàn năng cùng góc nhìn từ các chuyên gia đã mang đến cái nhìn thực tế về nghề kỹ sư AI, nhu cầu nhân lực và những kỹ năng cần chuẩn bị trong 5–10 năm tới. 

Xin cảm ơn quý Phụ huynh, Thầy/Cô và các bạn học sinh đã tham dự và góp phần tạo nên một buổi AI Labtour đầy ý nghĩa.

📍 AI-57 KỸ SƯ AI TOÀN NĂNG
🎁 Inbox để tìm hiểu chi tiết về khóa học
📞 Hotline: 099 696 3399
    `,
  },
  {
    id: 2,
    title: 'WEBINAR “CAREER COMPASS 2026”: ĐỊNH VỊ BẢN THÂN – ĐỊNH HƯỚNG NGHỀ NGHIỆP',
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "images/events/webinar.jpg",
    ],
    description: `
🔗 Đăng ký ngay: https://forms.gle/iuKXSJK4ukq2xxHX7

Trong hành trình sự nghiệp, sẽ có lúc bạn nhận ra rằng:
Bạn không chỉ tìm một công việc phù hợp, mà đang tìm một bước tiến xứng đáng với năng lực và khát vọng của mình.

Đó cũng là lúc những câu hỏi quan trọng xuất hiện:
👉 Làm sao nâng tầm năng lực để tự tin làm việc trong môi trường toàn cầu?
👉 Làm sao trở thành nhân sự tiềm năng cho các vị trí quản lý tại MNC?
👉 Làm sao để tiếng Anh trở thành lợi thế cạnh tranh?

Career Compass 2026 là webinar dành cho những người đi làm đã có kinh nghiệm, mong muốn tăng tốc sự nghiệp trong môi trường chuyên nghiệp & cạnh tranh.

Tham gia sự kiện, bạn sẽ nắm được:
➤ Bộ năng lực cốt lõi để bước lên các vị trí quản lý
➤ Phương pháp định vị bản thân và xây dựng lộ trình thăng tiến rõ ràng
➤ Góc nhìn thực tế về những yếu tố giúp một nhân sự được “chọn mặt gửi vàng”
    `,
  },
]

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null) // null = lightbox closed

  // lock body scroll when modal/lightbox open, and keyboard handlers
  useEffect(() => {
    const locked = !!selectedEvent || lightboxIdx !== null
    document.body.style.overflow = locked ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIdx !== null) setLightboxIdx(null)
        else setSelectedEvent(null)
      } else if (e.key === "ArrowLeft" && lightboxIdx !== null && selectedEvent) {
        const imgs = selectedEvent.images ?? [selectedEvent.image]
        setLightboxIdx((i) => (i !== null ? Math.max(i - 1, 0) : 0))
      } else if (e.key === "ArrowRight" && lightboxIdx !== null && selectedEvent) {
        const imgs = selectedEvent.images ?? [selectedEvent.image]
        setLightboxIdx((i) => (i !== null ? Math.min(i + 1, imgs.length - 1) : 0))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selectedEvent, lightboxIdx])

  const openEvent = (e: Event) => {
    setSelectedEvent(e)
    setLightboxIdx(null)
  }

  const getGallery = (ev: Event) => (ev.images && ev.images.length ? ev.images : [ev.image])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#cd0000] mb-4">Sự kiện nổi bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cập nhật những hoạt động và sự kiện mới nhất từ HONGLINHEDUCATION
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group cursor-pointer"
              onClick={() => openEvent(event)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={(event.images && event.images[0]) || event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px] line-clamp-2">
                    {event.title}
                  </h3>
                  {event.date && <p className="text-sm text-gray-300">{event.date}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
          style={{ animation: "fadeIn 0.25s ease-out" }}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-title"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Đóng"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            <div className="p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh]">
              <h3 id="event-title" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {selectedEvent.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                {selectedEvent.description.trim()}
              </p>

              {/* --- ADDED: Images section at the BOTTOM of the content --- */}
              {selectedEvent.images && selectedEvent.images.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Hình ảnh sự kiện</h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {getGallery(selectedEvent).map((src, idx) => (
                      <button
                        key={src + idx}
                        onClick={() => setLightboxIdx(idx)}
                        className="relative rounded-md overflow-hidden w-full h-36 bg-gray-100"
                        aria-label={`Mở ảnh ${idx + 1}`}
                      >
                        <Image src={src} alt={`event-img-${idx + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="w-full md:w-auto px-8 py-3 bg-[#E31837] text-white font-semibold rounded-lg hover:bg-[#c41530] transition-colors duration-200"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox overlay for viewing single image (centered) */}
      {selectedEvent && lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
          aria-hidden={false}
        >
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setLightboxIdx(null)}
          />
          <div
            className="relative max-w-4xl w-full max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-2 right-2 z-30 bg-white/90 rounded-full p-2 shadow-lg"
              aria-label="Đóng ảnh"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>

            <div className="w-full relative aspect-[16/9] bg-black rounded-md overflow-hidden">
              <Image
                src={getGallery(selectedEvent)[lightboxIdx]}
                alt={`large-${lightboxIdx + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* optional caption / index */}
            <div className="mt-3 text-center text-sm text-gray-200">
              Ảnh {lightboxIdx + 1} / {getGallery(selectedEvent).length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* fallback line-clamp */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
