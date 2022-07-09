import React from 'react'
import './testimonial.css'
import BR from'../../assets/bruno.png'
import AG from'../../assets/agus.png'
import VI from'../../assets/vicky.png'
import NI from'../../assets/nico.png'

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



//crear array de proyectos y mapearlo



const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className="testimonial__container"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
      >


      <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={AG} alt='testimonial' width='100%'/>
          </div>
            <h5 className='client__name'>Agustín Godoy</h5>
            <small className='client__review'>Al haber trabajado con Diego en el mismo grupo puedo decir que es tanto un profesional excepcional 
             como un gran compañero. Siempre fue aquel que nos daba una mano cuando no podíamos avanzar, siempre encontraba las soluciones a los problemas
             que surgían en el código, aprendía todo lo necesario para seguir adelante con el proyecto y más, es un persona muy 
             proactiva y un gran líder.</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={NI} alt='testimonial' width='100%'/>
          </div>
            <h5 className='client__name'>Nicolas Maximowicz</h5>
            <small className='client__review'>Tuve el agrado de trabajar con Diego en un proyecto y es un apasionado en lo que hace. 
            Siempre abierto a mejorar; no sólo es un excelente programador sino que siempre comparte sus conocimientos y esta a disposición 
            en cualquier momento. Es de destacar su dedicación, acompañamiento, su compañerismo y su proactividad. 
            Actitud siempre positiva y muy responsable. Placer trabajar con alguien así.</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={VI} alt='testimonial' width='100%'/>
          </div>
            <h5 className='client__name'>Maria Victoria Alvarez Windey</h5>
            <small className='client__review'>Afortunadamente tuve la oportunidad de trabajar en distintos proyectos con Diego y rescato una experiencia 
            muy enriquecedora de todos ellos. Diego es alguien a quien le apasiona el desarrollo web y sobre todo, el front-end. Posee esa 
            creatividad natural y conocimientos que a uno lo inspiran a interesarse y aprender cada vez más sobre el tema. Diego es alguien que 
            hace del trabajo en equipo una cooperación muy llevadera y divertida realizando sus distintivos e ingeniosos aportes.</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={BR} alt='testimonial' width='100%'/>
          </div>
            <h5 className='client__name'>Bruno Mele Gavazza</h5>
            <small className='client__review'>Tuve el agrado de trabajar en proyectos junto con Diego, fue una experiencia muy agradable y
             enriquecedora. Es una persona eficiente, capaz y motivadora para el trabajo en equipo y el crecimiento individual de cada 
             integrante del mismo. Tiene muchos conocimientos en las tecnologías que se utilizan en la actualidad, es emprendedor, proactivo y detallista.</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial