"use client"

import { useState, useEffect, useRef } from "react"
import { Trophy, Award, Star } from "lucide-react"

function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const position = sectionRef.current.getBoundingClientRect()
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-brown-light/5">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Achievements</h2>
          <p className="mt-4 text-muted-foreground">Recognition and awards for my work</p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brown-light/20">
                  <Trophy className="h-8 w-8 text-brown-dark" />
                </div>
                <h3 className="text-xl font-bold text-center">SheCodes Hackathon Winner 2025</h3>
                <p className="text-center text-muted-foreground">
                  First place winner among 47 teams from 14 universities in the prestigious SheCodes
                  Hackathon 2025.
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brown-light fill-brown-light" />
                  ))}
                </div>
              </div>

              <div className="relative h-80 overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-lg">
                {/* This is where you'll add your certificate image */}
                <img
                  src="src/components/p2.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
                <a href="#" className="block h-full w-full">
                  <div className="flex h-full w-full items-center justify-center bg-brown-light/10">
                    <Award className="h-16 w-16 text-brown animate-pulse" />
                    <span className="sr-only">View Certificate</span>
                  </div>
                </a>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4"></div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
              <div className="rounded-lg border bg-card p-6 shadow-md">
                <p className="mb-4">
                  <span className="font-semibold">Winning Project:</span> Developed an AI recruiter
                  innovative solution that addressed real-world challenges in Recruitment
                  accessibility.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  <li>Automated processes to streamline repetitive tasks</li>
                  <li>Enhanced candidate matching to find the best fit</li>
                  <li>Time efficiency with automated scheduling and follow-ups</li>
                  <li>Improved communication to boost candidate engagement</li>
                  <li>Data-driven insights for better hiring trends and effectiveness</li>
                </ul>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center rounded-full bg-brown-light/20 px-3 py-1 text-sm font-medium text-brown-dark">
                    <Trophy className="mr-1 h-4 w-4" /> First Place among 47 teams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

