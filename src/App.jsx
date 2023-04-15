import React from "react"
import Header from "./components/header/Header"
import Navigation from "./components/navigation/Navigation"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App