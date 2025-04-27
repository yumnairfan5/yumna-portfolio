"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, BookOpen, Award } from "lucide-react"

const educationItems = [
  {
    degree: "B.Sc. Computer Science",
    institution: "VVISM",
    period: "2023–2027",
    description: "Studying core computer science concepts, algorithms, data structures, and software development.",
    icon: BookOpen,
  },
  {
    degree: "B.Sc. Data Science",
    institution: "IIT Madras",
    period: "2023–2027",
    description: "Learning data analysis, machine learning, statistics, and data visualization techniques.",
    icon: Award,
  },
]

export default function EducationSection() {
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

    const elements = document.querySelectorAll(".education-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="education" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="education-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <div
              key={item.degree}
              className={`education-animate opacity-0 animate-delay-${index * 200} timeline-item mb-12 last:mb-0 pl-8`}
            >
              <Card className="border-none shadow-lg rounded-[24px] glass-card hover-card">
                <CardHeader className="pb-2 pt-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold font-playfair">{item.degree}</CardTitle>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-secondary font-medium mt-1 ml-13">{item.institution}</p>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-muted-foreground text-container">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
