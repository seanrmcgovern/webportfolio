import React from "react"
import "./about.css"
import Me from "../../assets/me.png"
import { FaAward } from "react-icons/fa"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { IoBuildOutline } from "react-icons/io5"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Experience</h5>
              <small>3+ years working in Software Development</small>
            </article>
            <article className="about-card">
              <AiOutlineFundProjectionScreen className="about-icon"/>
              <h5>Projects</h5>
              <small>Building Web Apps and APIs</small>
            </article>
            <article className="about-card">
              <IoBuildOutline className="about-icon"/>
              <h5>Passion</h5>
              <small>Committed to ABC (Always Be Coding)</small>
            </article>
          </div>
          <p>
            Hey, my name is Sean McGovern and I am a software engineer from Virginia. 
            I have developed the backends of various APIs, websites, and applications. 
            I’m always pumped to learn new technologies and build meaningful products.
          </p>
          {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About
