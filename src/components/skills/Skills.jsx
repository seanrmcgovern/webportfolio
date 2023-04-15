import React from "react"
import "./skills.css"
import { SiCheckmarx } from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>Technologies I Work With</h2>

      <div className="container skills-container">

        <div>
          <h3>Backend Development</h3>
          <div className="skills-content">
            <article className="skills-details">
              <SiCheckmarx className="skills-details-icon"/>
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills-details">
              <SiCheckmarx className="skills-details-icon"/>
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <SiCheckmarx className="skills-details-icon"/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Frontend Development</h3>
          <div className="skills-content">
            <article className="skills-details">
              <SiCheckmarx className="skills-details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <SiCheckmarx className="skills-details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills-details">
              <SiCheckmarx className="skills-details-icon"/>
              <div>
                <h4>Vue</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
