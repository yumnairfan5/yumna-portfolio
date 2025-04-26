"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".hero-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={scrollRef}
    >
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="hero-animate opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              I build high-converting, beautiful websites that deliver results and leave lasting impressions.
            </h1>
            <p className="hero-animate opacity-0 animate-delay-200 text-lg md:text-xl text-foreground/80 max-w-2xl">
              Bringing visions to life with clean code, stunning design, and performance that matters.
            </p>
            <Button
              size="lg"
              className="hero-animate opacity-0 animate-delay-300 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white font-medium px-8 py-6 rounded-full"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Let&apos;s Build Something Amazing
            </Button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="hero-animate opacity-0 animate-delay-100 relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-pulse">
                <div className="rounded-full overflow-hidden w-full h-full bg-background">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Yumna Irfan"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce-slow"
          onClick={handleScrollDown}
        >
          <ChevronDown className="w-10 h-10 text-primary" />
        </div>
      </div>
    </section>
  )
}
