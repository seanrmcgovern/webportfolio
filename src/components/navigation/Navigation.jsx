import React, { useState } from 'react'
import './navigation.css'
import { BiHomeAlt, BiMessageSquareDetail} from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { CgWorkAlt } from 'react-icons/cg'
import { BsGear } from 'react-icons/bs'

const Navigation = () => {

  const [activeNav, setActiveNav] = useState("#home")

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><CgWorkAlt /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><BsGear /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navigation
