"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, FileCode, Palette, Smartphone, Zap, Database } from "lucide-react"

const skills = [
  { name: "HTML5", icon: FileCode, color: "text-orange-500" },
  { name: "CSS3", icon: Palette, color: "text-blue-500" },
  { name: "JavaScript", icon: Code, color: "text-yellow-500" },
  { name: "Responsive Design", icon: Smartphone, color: "text-green-500" },
  { name: "Performance", icon: Zap, color: "text-purple-500" },
  { name: "Databases", icon: Database, color: "text-pink-500" },
]

export default function AboutSection() {
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

    const elements = document.querySelectorAll(".about-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="about-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Card className="about-animate opacity-0 overflow-hidden border-none rounded-[24px] shadow-lg glass-card">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-container">
                I transform ideas into visually captivating, high-converting websites that perform in the real world.
                Fast, reliable, and fully dedicated to bringing your vision alive.
              </p>
              <p className="text-lg leading-relaxed mt-6 text-container">
                With a strong foundation in both computer science and data science, I bring a unique perspective to
                every project, combining technical expertise with creative design solutions.
              </p>
            </CardContent>
          </Card>

          <div className="about-animate opacity-0 animate-delay-200">
            <div className="flex flex-wrap justify-center">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  <skill.icon className={`${skill.color} w-5 h-5 mr-2 inline-block`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
