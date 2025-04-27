"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const headerRef = useRef<HTMLElement>(null)
  const headerHeight = useRef<number>(0)

  useEffect(() => {
    // Get initial header height for proper spacing
    if (headerRef.current) {
      headerHeight.current = headerRef.current.offsetHeight
      document.documentElement.style.setProperty("--header-height", `${headerHeight.current}px`)
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Determine if scrolled past threshold
      setIsScrolled(currentScrollPos > 10)

      // Show/hide header based on scroll direction
      const isScrollingDown = currentScrollPos > prevScrollPos

      // Only hide when scrolling down and past the header height
      if (currentScrollPos > headerHeight.current) {
        setVisible(!isScrollingDown)
      } else {
        setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div style={{ height: headerHeight.current }} className="w-full"></div>

      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full theme-transition",
          isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-md" : "py-4 bg-background/50 backdrop-blur-sm",
          visible ? "navbar-visible" : "navbar-hidden",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold font-playfair bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            Yumna Irfan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4">
            <nav className="flex flex-col items-center space-y-4 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
