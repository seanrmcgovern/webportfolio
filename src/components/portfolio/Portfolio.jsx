import React from 'react'
import './portfolio.css'
import { Projects } from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
      {Projects.map(({id, title, github, demo, image}) => (
          <article className="portfolio-item" key={id}>
            <div className="portfolio-item-image">
              <img src={image} alt={title} className="portfolio-image"></img>
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Video Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
