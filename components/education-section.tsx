"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationItems = [
  {
    degree: "B.Sc. Computer Science",
    institution: "VVISM",
    period: "2023–2027",
    description: "Studying core computer science concepts, algorithms, data structures, and software development.",
  },
  {
    degree: "B.Sc. Data Science",
    institution: "IIT Madras",
    period: "2023–2027",
    description: "Learning data analysis, machine learning, statistics, and data visualization techniques.",
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
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="education-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <div
              key={item.degree}
              className={`education-animate opacity-0 animate-delay-${index * 200} timeline-item mb-10 last:mb-0 pl-8`}
            >
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-primary mr-2" />
                      <CardTitle className="text-xl font-bold">{item.degree}</CardTitle>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-secondary font-medium">{item.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
