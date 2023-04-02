import React from 'react'
import './experience.css'
import { SiCheckmarx } from "react-icons/si"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>Django</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>Vue</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <SiCheckmarx className="experience-details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
