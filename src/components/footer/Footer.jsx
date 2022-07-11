import React from 'react'
import './footer.css'
import LOGO from '../../assets/logo_tipo.png'
import {AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
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
        <a href="https://www.linkedin.com/in/dmaceda/" target='_blank'> <AiFillLinkedin/> </a>
        <a href="https://github.com/dmaceda" target='_blank'> <AiOutlineGithub/> </a>
        <a href="https://twitter.com/?lang=es" target='_blank'> <AiOutlineTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Diego Maceda. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer