"use client"

import { useState, useEffect } from "react"
import { FileText, Download } from "lucide-react"

function CV() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("cv")
      if (element) {
        const position = element.getBoundingClientRect()
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
    <section id="cv" className="py-20 bg-brown-light/10">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Curriculum Vitae</h2>
          <p className="mt-4 text-muted-foreground">My professional background and experience</p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 shadow-lg">
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
              <div className="mb-6 md:mb-0 md:mr-8 md:flex-1">
                <h3 className="text-2xl font-bold">Professional Summary</h3>
                <p className="mt-4 text-muted-foreground">
                  Dedicated and innovative full-stack developer with expertise in modern web
                  technologies, responsive design, and scalable system architecture. Passionate
                  about creating user-centric solutions that merge creativity with technical
                  excellence.
                </p>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold">Education</h4>
                  <div className="mt-3 space-y-3">
                    <div>
                      <p className="font-medium">Bachelor of Science in Software Engineering</p>
                      <p className="text-sm text-muted-foreground">
                        {' '}
                        Bahir Dar University, 2022-2027
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold">Experience</h4>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p className="font-medium">Full-stack Developer</p>
                      <p className="text-sm text-muted-foreground"></p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                        <li>
                          Designed and developed responsive web applications using React and modern
                          JavaScript frameworks.
                        </li>
                        <li>
                          Collaborated with cross-functional teams to deliver pixel-perfect UI
                          components.
                        </li>
                        <li>
                          Spearheaded innovative projects like Mafi Mafi Clothes, a dynamic
                          e-commerce platform leveraging React-based animations to boost engagement.
                        </li>
                        <li>
                          <li>
                            Team leader in developing AI-powered recruitment automation tools,
                            reducing workflow delays by 30%.
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative h-80 w-64 overflow-hidden rounded-lg border-2 border-brown-light shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* This is where you'll add your CV image */}
                  <img
                    src="/images/cv pic.png"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                  <a href="#" className="block h-full w-full">
                    <div className="flex h-full w-full items-center justify-center bg-brown-light/20">
                      <FileText className="h-16 w-16 text-brown-dark" />
                      <span className="sr-only">View CV</span>
                    </div>
                  </a>
                </div>
                <a
                  href="https://www.canva.com/design/DAGjIi8FJ-k/TZffaTT0TWG4Q-yKQRJEew/view?utm_content=DAGjIi8FJ-k&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2b7ff8459d "
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-brown-light px-4 py-2 text-sm font-medium text-brown-dark hover:bg-brown-light/80"
                >
                  Download CV <Download className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV

