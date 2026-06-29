"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Loader2 } from "lucide-react"
import { submitToGoogleSheets } from "@/lib/google-sheets"
import { toast } from "sonner" // ✅ import toast notification

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-160px)]">
          {/* Left Section - Contact Info */}
          <div className="bg-[#e47273] text-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <h1 className="text-3xl lg:text-4xl font-bold mb-12 text-center lg:text-left">
                Liên hệ với chúng tôi
              </h1>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium">0325 194 889 <br/> 099 696 3399</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium">support@honglinheducation.vn</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium leading-relaxed">
                    1 Ngụy Như Kom Tum, Thanh Xuân, Hà Nội
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    onValueChange={(value) => handleInputChange("program", value)}
                  >
                    <SelectTrigger className="w-full border-gray-300 focus:border-[#1e3a8a] focus:ring-[#1e3a8a]">
                      <SelectValue placeholder="Chọn chương trình" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="storytelling">Tiếng Anh Giao Tiếp</SelectItem>
                      <SelectItem value="professional"> Kĩ sư AI toàn năng   </SelectItem>
                    </SelectContent>
                  </Select>
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
                  className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e3a8a] font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      Đang gửi...
                    </>
                  ) : (
                    "Gửi đăng ký"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
