import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import ProgramsSection from "@/components/programs-section"
import InstructorsSection from "@/components/instructors-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <div id="testimonials">
      </div>
      <div id="instructors">
        <InstructorsSection />
      </div>
      <ProgramsSection />
      <Footer />
    </main>
  )
}
