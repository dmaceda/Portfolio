import React from 'react'
import './certification.css'
import scrum from '../../assets/scrum.png'
import henry from '../../assets/henry.png'
import ingles from '../../assets/ingles.png'
import git from '../../assets/git.png'
import ux5 from '../../assets/ux5.png'
import ux4 from '../../assets/ux4.png'
import ux3 from '../../assets/ux3.png'
import ux2 from '../../assets/ux2.png'
import ux1 from '../../assets/ux1.png'


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



//crear array de testimonios y mapearlo

const data = [
  {
    id:1,
    image: scrum,
  },
  {
    id:2,
    image: henry,
  },
  {
    id:3,
    image: ingles,
  },
  {
    id:4,
    image: git,
  },
  {
    id:5,
    image: ux5,
  },
  {
    id:6,
    image: ux4,
  },
  {
    id:7,
    image: ux3,
  },
  {
    id:8,
    image: ux2,
  },
  {
    id:9,
    image: ux1,
  },



]

const Certification= () => {
  return (
    <section id='certifications'>
      <h5>Validations</h5>
      <h2>Certificates</h2>
      <Swiper className="testimonial__container"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
      >

      {
        data.map(({id,image})=>{
          return(
            <SwiperSlide key={id} className='testimonial'>
            <div >
            <img src={image} alt='testimonial' width='100%'/>
            </div>
          </SwiperSlide>
          )
        })
      }
  
      </Swiper>
    </section>
  )
}

export default Certification