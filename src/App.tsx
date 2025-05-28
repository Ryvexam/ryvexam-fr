import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
        <Experience />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App