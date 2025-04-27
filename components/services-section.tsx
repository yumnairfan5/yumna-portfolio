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
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="service-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-playfair tracking-wide">
          What I Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`service-animate opacity-0 animate-delay-${index * 100} group`}>
              <Card className="border-none rounded-[24px] overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-70"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl"></div>

                <div className="relative -mt-8 flex justify-center">
                  <div
                    className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-primary/20 bg-gradient-to-br from-background to-background/80 border border-white/20 dark:border-white/10`}
                  >
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>

                <CardHeader className="pb-2 pt-6">
                  <CardTitle className="text-2xl font-playfair text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8 px-6">
                  <p className="text-muted-foreground text-container text-center font-montserrat">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
