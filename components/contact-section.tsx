"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
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

    const elements = document.querySelectorAll(".contact-animate")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="contact-animate opacity-0 text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="contact-animate opacity-0 border-none shadow-lg rounded-[24px] glass-card h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 font-playfair">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <a href="mailto:yumnairfan14@gmail.com" className="hover:text-primary transition-colors text-lg">
                    yumnairfan14@gmail.com
                  </a>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <a href="tel:9381340276" className="hover:text-primary transition-colors text-lg">
                    9381340276
                  </a>
                </div>

                <div className="flex items-center space-x-6 mt-10">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-7 h-7 text-primary" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-7 h-7 text-primary" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="contact-animate opacity-0 animate-delay-200">
            <Card className="border-none shadow-lg rounded-[24px] glass-card h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 font-playfair">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input h-12 bg-background/50"
                      aria-label="Your name"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Please enter your full name</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input h-12 bg-background/50"
                      aria-label="Your email address"
                    />
                    <p className="text-xs text-muted-foreground mt-1">I'll never share your email with anyone else</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input min-h-[150px] bg-background/50"
                      aria-label="Your message"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Tell me about your project or inquiry</p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white font-medium py-6 rounded-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {isSubmitted && (
                    <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md text-center mt-4">
                      Thank you for your message! I&apos;ll get back to you soon.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
