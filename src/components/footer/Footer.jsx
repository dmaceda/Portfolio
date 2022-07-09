import React from 'react'
import './footer.css'
import LOGO from '../../assets/logo.png'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <img className='logo' src={LOGO} alt='logo' width='100px'/>
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experiences</a></li>
        <li><a href='#testimonial'>Testimonials</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/diego.maceda.7/" target='_blank'> <AiFillFacebook/> </a>
        <a href="https://www.instagram.com/shaman.crew/" target='_blank'> <AiOutlineInstagram /> </a>
        <a href="https://twitter.com/?lang=es" target='_blank'> <AiOutlineTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Diego Maceda. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer