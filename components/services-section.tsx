"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Layout, Palette } from "lucide-react"

const services = [
  {
    title: "Website Development",
    description:
      "Custom websites built with modern technologies that are fast, responsive, and optimized for search engines.",
    icon: Globe,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive conversions for your business.",
    icon: Layout,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Portfolio Websites",
    description: "Showcase your work with a beautiful portfolio website that highlights your skills and achievements.",
    icon: Palette,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export default function ServicesSection() {
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

    const elements = document.querySelectorAll(".service-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="service-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          What I Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`service-animate opacity-0 animate-delay-${index * 100} border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              <CardHeader className="pb-2">
                <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-4`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
