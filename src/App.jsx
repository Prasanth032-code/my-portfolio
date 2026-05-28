import './App.css'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Footer />
    </div>
  )
}

export default App