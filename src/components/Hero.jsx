import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import ThreeDModel from './ThreeDModel'

function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fadeIn">
              Hi, I'm <span className="text-primary">Hosanna Walle</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slideUp">
              A passionate FULL Stack developer creating beautiful and functional web experiences
            </p>
            <div className="flex gap-4 animate-fadeIn animation-delay-300">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
              >
                Contact Me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 pt-4 animate-fadeIn animation-delay-500">
              <a
                href="https://github.com/hosanna1616"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hosanna-walle-457705259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:example@example.com"
                className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary animate-float">
              <img
                src="/images/im.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fadeIn animation-delay-700">
          <h2 className="text-2xl font-bold mb-6 text-center">wellcome to my portfolio</h2>
          <ThreeDModel />
        </div>
      </div>
    </section>
  )
}

export default Hero
