import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com/in/seanrmcgovern" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/seanrmcgovern" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default Socials