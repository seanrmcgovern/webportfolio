import React, { useState } from "react"
import "./navigation.css"
import { BiHomeAlt } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { CgWorkAlt } from "react-icons/cg"
import { HiCode } from "react-icons/hi"
import { HiOutlineSquares2X2 } from "react-icons/hi2"

const Navigation = () => {

  const [activeNav, setActiveNav] = useState("#home")

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}><HiCode /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><CgWorkAlt /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><HiOutlineSquares2X2 /></a>
      {/* <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a> */}
    </nav>
  )
}

export default Navigation
