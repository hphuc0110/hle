"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Loader2 } from "lucide-react"
import { submitToGoogleSheets } from "@/lib/google-sheets"
import { toast } from "sonner"

interface ContactConsultationPopupProps {
  onClose: () => void
}

export default function ContactConsultationPopup({ onClose }: ContactConsultationPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ program?: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors: { program?: string } = {}
    if (!formData.program) {
      newErrors.program = "Vui lòng chọn chương trình"
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setIsSubmitting(true)

    try {
      const result = await submitToGoogleSheets(formData)
      if (result.success) {
        toast.success("🎉 Gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "",
          message: "",
        })
        // Close popup after submission
        setTimeout(() => {
          onClose()
        }, 500)
      } else {
        toast.error("❌ Có lỗi xảy ra. Vui lòng thử lại sau.")
      }
    } catch (error) {
      toast.error("⚠️ Lỗi hệ thống! Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#cf0001] text-white p-4 sm:p-6 rounded-t-lg relative">
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Đóng"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 pr-8">Liên hệ tư vấn</h2>
          <p className="text-sm sm:text-base text-white/90">Điền thông tin để nhận tư vấn miễn phí từ chúng tôi</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1e3a8a] mb-2">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1e3a8a] mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1e3a8a] mb-2">
              SĐT <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]"
              required
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-medium text-[#1e3a8a] mb-2">
              Chương trình đang quan tâm <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.program}
              onValueChange={(value) => {
                handleInputChange("program", value)
                if (errors.program) {
                  setErrors({ ...errors, program: undefined })
                }
              }}
            >
              <SelectTrigger 
                className={`w-full !w-full border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a] ${
                  errors.program ? "border-red-500" : ""
                }`}
                style={{ width: "100%" }}
              >
                <SelectValue placeholder="Chọn chương trình" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] z-[101]">
                <SelectItem value="storytelling">Tiếng Anh Storytelling</SelectItem>
                <SelectItem value="professional">Tiếng Anh Chuyên Nghiệp</SelectItem>
                <SelectItem value="interview">Tiếng Anh Phỏng Vấn</SelectItem>
                <SelectItem value="sales">Tiếng Anh Sales & Pitching</SelectItem>
                <SelectItem value="academic">Tiếng Anh Thuyết Trình Học Thuật</SelectItem>
                <SelectItem value="service">Tiếng Anh Dịch Vụ Cao Cấp</SelectItem>
              </SelectContent>
            </Select>
            {errors.program && (
              <p className="text-red-500 text-xs mt-1">{errors.program}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1e3a8a] mb-2">
              Nội dung cần tư vấn
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full h-32 border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a] resize-none"
              placeholder="Nhập nội dung cần tư vấn..."
            />
          </div>

          {/* ✅ Button có loading */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e3a8a] font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                <span>Đang gửi...</span>
              </>
            ) : (
              "Gửi đăng ký"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}

