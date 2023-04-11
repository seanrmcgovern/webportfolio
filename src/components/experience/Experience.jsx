import React from 'react'
import './experience.css'
import {
  FaVuejs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaGraduationCap,
} from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
// SwiperJS
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
          <small className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vitae, mollitia fugiat soluta ratione dolorem non ipsum accusantium voluptas veritatis quidem ducimus nisi corrupti earum commodi. Architecto optio voluptas tempore?</small>
        </SwiperSlide>
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
            <SiCsharp />
            <FaReact />
          </div>
          <h2 className="company">Investure</h2>
          <small className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vitae, mollitia fugiat soluta ratione dolorem non ipsum accusantium voluptas veritatis quidem ducimus nisi corrupti earum commodi. Architecto optio voluptas tempore?</small>
        </SwiperSlide>
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
            <FaReact />
            <FaHtml5 />
            <FaCss3/>
          </div>
          <h2 className="company">Reonomy</h2>
          <small className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vitae, mollitia fugiat soluta ratione dolorem non ipsum accusantium voluptas veritatis quidem ducimus nisi corrupti earum commodi. Architecto optio voluptas tempore?</small>
        </SwiperSlide>
        <SwiperSlide className="experience-item">
          <div className="experience-skills">
              <FaGraduationCap />
          </div>
          <h2 className="company">University of Virginia</h2>
          <small className="job-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vitae, mollitia fugiat soluta ratione dolorem non ipsum accusantium voluptas veritatis quidem ducimus nisi corrupti earum commodi. Architecto optio voluptas tempore?</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Experience