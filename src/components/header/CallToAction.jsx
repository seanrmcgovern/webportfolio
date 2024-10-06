import React from "react"
import CV from '../../assets/cv.pdf'

const CallToAction = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noreferrer" className="btn">Download Résumé</a>
      {/* <a href="#contact" className="btn btn-primary">Let's Chat</a> */}
    </div>
  )
}

export default CallToAction