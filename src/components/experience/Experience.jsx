import React from "react"
import "./experience.css"
import {
  FaVuejs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGraduationCap,
} from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { TbSql } from "react-icons/tb";
// SwiperJS
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiCheckBadge } from "react-icons/hi2"

const Experience = () => {
  return (
    <section id="experience">
      <h5>Where I've been</h5>
      <h2>Experience</h2>
      <Swiper className="container experience-container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
              <SiCsharp />
              <FaVuejs />
              <TbSql />
          </div>
          <h2 className="company">Crutchfield</h2>
          <ul className="job-desc">    
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Write performant and maintainable code for a public facing Ecommerce website, internal applications, and APIs</p>
            </li>
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Work with languages and frameworks such as C#, .NET, JavaScript, TypeScript, Vue.js, and SQL Server</p>
            </li>
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Communicate with multi-disciplinary teams of engineers, designers, and stakeholders</p>
            </li>            
          </ul>  
        </SwiperSlide>
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
            <SiCsharp />
            <FaReact />
          </div>
          <h2 className="company">Investure</h2>
          <ul className="job-desc"> 
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Developed endpoints of a .NET Web API, using C# and LINQ, for multiple custom applications related to investment management</p>
            </li>   
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Implemented UX using React.js, and incorporated libraries such as Material-UI and KendoReact</p>
            </li>
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Converted UI designs and mockups into high quality code and reusable components</p>
            </li>            
          </ul> 
        </SwiperSlide>
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
            <FaReact />
            <FaHtml5 />
            <FaCss3/>
          </div>
          <h2 className="company">Reonomy</h2>
          <ul className="job-desc">    
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Developed features of a commercial real estate web application with React.js</p>
            </li>
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Collaborated with the engineering team to convert the entire app from Angular to React.js</p>
            </li>
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Utilized GitHub and engaged in thorough code reviews and routine stand-ups as part of an agile development team</p>
            </li>            
          </ul> 
        </SwiperSlide>
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
              <FaGraduationCap />
          </div>
          <h2 className="company">University of Virginia</h2>
          <ul className="job-desc">    
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Graduated with a B.A. in Computer Science, GPA: 3.91</p>
            </li>
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Led instruction of a mobile app course covering the basics of React-Native, and a web design course covering the basics of HTML and CSS through a university club</p>
            </li> 
            <li>
              <HiCheckBadge className="job-desc-icon"/>
              <p>Worked part-time as an Operations Manager at the University 1515 building</p>
            </li>            
          </ul> 
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Experience