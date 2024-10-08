import React from "react"
import "./header.css"
import CallToAction from "./CallToAction"
import Sean from "../../assets/sean.png"
import Socials from "./Socials"

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Sean McGovern</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CallToAction />
        <Socials />

        <div className="me">
          <img src={Sean} alt="me"></img>
        </div>

        <a href="#portfolio" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
