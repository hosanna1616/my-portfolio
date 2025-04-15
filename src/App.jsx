import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import CV from "./components/CV"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <CV />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

