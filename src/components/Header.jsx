"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-bold">
            Hosanna Walle
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#cv" className="text-sm font-medium hover:text-primary transition-colors">
            CV
          </a>
          <a href="#achievements" className="text-sm font-medium hover:text-primary transition-colors">
            Achievements
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col p-4">
              <a href="#home" className="py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                Home
              </a>
              <a href="#projects" className="py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                Projects
              </a>
              <a href="#skills" className="py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                Skills
              </a>
              <a href="#cv" className="py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                CV
              </a>
              <a href="#achievements" className="py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                Achievements
              </a>
              <a href="#contact" className="py-2 text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

