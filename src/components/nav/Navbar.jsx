import React from 'react'
import './Navbar.css'
import LOGO from '../../assets/logo_ntm.png'
import { useState } from 'react'

const Nav = () => {
const [activeNav,setActiveNav] = useState('#')
  return (
    <nav id='navbar'>
      <img className='logo_n' src={LOGO} alt='logo' width='40px'/>
      <a href='Portfolio/#' onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}>Home</a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}>About</a>
      <a href='#experiences' onClick={()=> setActiveNav('#experiences')} className={activeNav ==='#experiences' ? 'active' : ''}>Experience</a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}>Proyects</a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}>Contact</a>
    </nav>
  )
}

export default Nav