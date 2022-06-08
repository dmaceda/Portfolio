import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dmaceda/' target='_blank' ><BsLinkedin/></a>
        <a href='https://github.com/dmaceda' target='_blank' ><BsGithub/></a>
        <a href='https://www.instagram.com/shaman.crew' target='_blank' ><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial