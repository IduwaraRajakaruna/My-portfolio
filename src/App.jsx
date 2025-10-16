import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import StarCursorEffect from './components/StarCursorEffect'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <StarCursorEffect />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App