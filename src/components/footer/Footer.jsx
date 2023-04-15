import React from "react"
import "./footer.css"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">Sean McGovern</a>

      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://linkedin.com/in/seanrmcgovern" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/seanrmcgovern" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer-attributions">
        Photos by
        <li><a href="https://unsplash.com/@shugo88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Don H</a></li>
        <li><a href="https://unsplash.com/ja/@lofiloup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Louie Castro-Garcia</a></li>
      </div>
      
    </footer>
  )
}

export default Footer
