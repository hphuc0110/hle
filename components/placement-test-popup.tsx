"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

interface PlacementTestPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function PlacementTestPopup({ isOpen, onClose }: PlacementTestPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Placement test form submitted:", formData)
    // Close popup after submission
    onClose()
    // Show success message or redirect
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#cf0001] text-white p-6 rounded-t-lg relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold mb-2">Kiểm tra trình độ</h2>
          <p className="text-white/90">Đăng ký ngay để nhận bài kiểm tra trình độ miễn phí</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
            <Input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nhập họ và tên của bạn"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
            <Input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Nhập số điện thoại"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Nhập địa chỉ email"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Chương trình quan tâm</label>
            <select
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cf0001] focus:border-transparent"
            >
              <option value="">Chọn chương trình</option>
              <option value="business">Tiếng Anh Doanh Nhân</option>
              <option value="ielts">Tiếng Anh Chuyên Nghiệp</option>
              <option value="kids">Tiếng Anh Phỏng Vấn</option>
              <option value="corporate">Tiếng Anh Pitching</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Kinh nghiệm học tiếng Anh</label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#cf0001] focus:border-transparent"
            >
              <option value="">Chọn trình độ hiện tại</option>
              <option value="beginner">Mới bắt đầu</option>
              <option value="elementary">Cơ bản</option>
              <option value="intermediate">Trung cấp</option>
              <option value="advanced">Nâng cao</option>
            </select>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-[#cf0001] hover:bg-[#b50001] text-white font-semibold py-3">
              Đăng ký kiểm tra trình độ
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            Bằng cách đăng ký, bạn đồng ý với các điều khoản và chính sách của HLE
          </p>
        </form>
      </div>
    </div>
  )
}
