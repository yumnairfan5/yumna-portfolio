import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
