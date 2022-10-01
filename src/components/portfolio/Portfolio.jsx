import React from 'react'
import './portfolio.css'
//import CLOCK from '../../assets/clock_.png'
import CLIMA from '../../assets/clima.png'
import CALCULATOR from '../../assets/calculator.png'
import GAMES from '../../assets/GAMES-LAND.png'
import PORTFOLIO from '../../assets/port.png'
import CRIPTO from '../../assets/cripto_m.png'
import TUSPACIO from '../../assets/tuspacio.png'

import {DiCss3, DiJavascript1, DiReact } from 'react-icons/di'




//crear array de proyectos y mapearlo

const data = [{
  id:1,
  image: GAMES,
  title: 'Games-Land SPA',
  description: 'Single Page Aplication adaptable que nos permite ver en detalle mas  de 2000 videojuegos, incluye: Búsquedas, filtrados, ordenamientos y creación. Diseñe un prototipo de alta fidelidad en Figma, que luego desarrolle utilizando para el Front: React, Redux y CSS puro y para el Back : Node JS con Express.',
  github: 'https://github.com/dmaceda/Videogames',
  demo: 'https://games-land.vercel.app/'
},
{
  id:2,
  image: TUSPACIO,
  title: 'TuSpacio Ecommerce',
  description: 'Se trata de un Ecommerce de productos de belleza, cuenta con autenticación con Aut0 y pasarela de pago con Stripe. Utilizamos Material UI como framework de estilos. Proyecto realizado en conjunto con 7 desarrolladores, participe activamente en el diseño de la interfaz y como desarrollador Frontend.',
  github: 'https://github.com/ENDERSON-MARIN/PG-TUSPACIO-FRONTEND' ,
  demo: 'https://tuspacio.vercel.app/'
},

{
  id:3,
  image: CRIPTO,
  title: 'Criptomonedas',
  description: 'Se trata de un conversor de las diez Criptomonedas mas populares a cuatro monedas distintas. Consume la API min-api.cryptocompare.com .En este proyecto reforcé conocimientos en React y comencé a utilizar Custom Hooks. HTML, CSS, JavaScript React JS fueron las tecnologías utilizadas. ',
  github: 'https://github.com/dmaceda/Criptomonedas' ,
  demo: 'https://dmaceda.github.io/Criptomonedas/'
},
{
  id:4,
  image: CLIMA,
  title: 'Weather SPA',
  description: 'La aplicación de pronóstico del tiempo es una SPA que nos entrega una tarjeta por cada ciudad que consultemos, con la informacion del clima en tiempo real, viento y temperatura. Clickeando sobre cada ciudad podemos acceder a información mas detallada',
  github: 'https://github.com/dmaceda/Clima-App',
  demo: 'https://dmaceda.github.io/Clima-App/'
},
// {
//   id:5,
//   image: CLOCK,
//   title: 'Responsive Clock',
//   description: '',
//   github: 'https://github.com/dmaceda/Clock' ,
//   demo: 'https://dmaceda.github.io/Clock/'
// },
{
  id:5,
  image: CALCULATOR,
  title: 'Responsive Calculator',
  description: 'Esta es una aplicación desarrollada con HTML, CSS & React, se trata de una calculadora interactiva que realiza las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división). Su estructura inicial fue creada con el comando npx create-react-app.                         ',
  github: 'https://github.com/dmaceda/Calculator',
  demo: 'https://dmaceda.github.io/Calculator/'
},
{
  id:6,
  image: PORTFOLIO,
  title: 'Responsive Portfolio',
  description: 'Esta es una aplicación desarrollada con HTML, CSS & React JS. Se trata de mi Portfolio personal, donde podran encontrar mi información de contacto, mis conocimientos y objetivos.  Mis soft & tech skill actualizadas y podran visualizar  mis ultimos proyectos.',
  github: 'https://github.com/dmaceda/Portfolio',
  demo: 'https://dmaceda.github.io/Portfolio/'
},


]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Proyect</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo, description})=>{
            return(
              <div className='portfolio__items'>
          <div key= {id} className='portfolio__item-image'>
          <img src={image} alt={title} width='100%'/>
          </div>
            <h3>{title}</h3>
            <h5>{description}</h5>
              <DiCss3 className='mokup'/>
              <DiJavascript1 className='mokup'/>
              <DiReact className='mokup'/>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank' rel="noopener noreferrer">View Code</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">View Demo</a>
            </div>
        </div>
            )
          })
        }

       </div>


  
    </section>
  )
}

export default Portfolio