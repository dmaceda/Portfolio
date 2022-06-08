import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header className='container header__container'>
      <h5>Hello! I'm</h5>
      <h1>Diego Maceda</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <img className="me" src={ME} alt="me" />
      <a href="#contact" className="scroll_down">Scroll Down</a>
      <HeaderSocial />
    </header>
  )
}

export default Header