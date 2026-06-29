import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import CoreValuesSection from "@/components/core-values-section"
import PartnersSection from "@/components/partners-section"
import EventsSection from "@/components/events-section"
import ProgramsSection from "@/components/programs-section"
import Footer from "@/components/footer"
import { HallOfFameSection } from "@/components/hall-of-fame-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <div id="testimonials"></div>
      <CoreValuesSection />
      <PartnersSection />
      <EventsSection />
      {/* <HallOfFameSection /> */}
      <Footer />
    </main>
  )
}
