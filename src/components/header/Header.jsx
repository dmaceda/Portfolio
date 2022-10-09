import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <div id='#'>
    <header className='container header__container'>
      <h5>Hola! Soy</h5>
      <h1>Diego Maceda</h1>
      <h5 className="text-light">Fullstack Developer & UX Designer</h5>
      <CTA />
      <img className="me" src={ME} alt="me" />
      <a href="#contact" className="scroll_down">Scroll Down</a>
      <HeaderSocial />
    </header>
    </div>
  )
}

export default Header