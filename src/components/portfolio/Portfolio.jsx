import React from 'react'
import './portfolio.css'
import CLOCK from '../../assets/clock_.png'
import CLIMA from '../../assets/climamokup.png'
import CALCULATOR from '../../assets/calculador.png'
import TODO from '../../assets/todos.png'
import MOVIES from '../../assets/movie.png'
import PORTFOLIO from '../../assets/portfolio.png'
import CRIPTO from '../../assets/cripto_mokup.png'
import {DiCss3, DiJavascript1, DiReact } from 'react-icons/di'
import {SiRedux} from 'react-icons/si'


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



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Proyect</h5>
      <h2>Portfolio</h2>
      <Swiper className="portfolio__container"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={100}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
      >


        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={CLIMA} alt='clima' width='100%'/>
          </div>
            <h3>Weather SPA</h3>
              <DiCss3 className='mokup'/>
              <DiJavascript1 className='mokup'/>
              <DiReact className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/dmaceda/Clima-App' className='btn' target='_blank'>View Code</a>
            <a href='https://dmaceda.github.io/Clima-App/' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={CALCULATOR} alt='calculator' width='100%'/>
          </div>
            <h3>Responsive Calculator</h3>
            <DiCss3 className='mokup'/>
            <DiJavascript1 className='mokup'/>
            <DiReact className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/dmaceda/Calculator' className='btn' target='_blank'>View Code</a>
            <a href='https://dmaceda.github.io/Calculator/' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={CRIPTO } alt='cripto' width='100%'/>
          </div>
            <h3>Criptomonedas</h3>
            <DiCss3 className='mokup'/>
            <DiJavascript1 className='mokup'/>
            <DiReact className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/dmaceda/Criptomonedas' className='btn' target='_blank'>View Code</a>
            <a href='https://dmaceda.github.io/Criptomonedas/' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>


        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={TODO} alt='todo' width='100%'/>
          </div>
            <h3>Todo App</h3>
              <DiCss3 className='mokup'/>
              <DiJavascript1 className='mokup'/>
              <DiReact className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/dmaceda/Lista-de-tareas' className='btn' target='_blank'>View Code</a>
            <a href='https://dmaceda.github.io/Lista-de-tareas/' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={CLOCK} alt='clock' width='100%'/>
          </div>
            <h3>Responsive Clock</h3>
            <DiCss3 className='mokup'/>
            <DiJavascript1 className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/dmaceda/Clock' className='btn' target='_blank'>View Code</a>
            <a href='https://dmaceda.github.io/Clock/' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={MOVIES} alt='movies' width='100%'/>
          </div>
            <h3>Movies SPA</h3>
            <DiCss3 className='mokup'/>
            <DiJavascript1 className='mokup'/>
            <DiReact className='mokup'/>
            <SiRedux className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='' className='btn' target='_blank'>View Code</a>
            <a href='' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>

        <SwiperSlide className='portfolio__items'>
          <div className='portfolio__item-image'>
          <img src={PORTFOLIO} alt='portfolio' width='100%'/>
          </div>
            <h3>Responsive Portfolio</h3>
              <DiCss3 className='mokup'/>
              <DiJavascript1 className='mokup'/>
              <DiReact className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/dmaceda/Portfolio' className='btn' target='_blank'>View Code</a>
            <a href='https://dmaceda.github.io/Portfolio/' className='btn btn-primary' target='_blank'>View Demo</a>
            </div>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Portfolio