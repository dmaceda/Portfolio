import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dmaceda/' target='_blank' ><BsLinkedin/></a>
        <a href='https://github.com/dmaceda' target='_blank' ><BsGithub/></a>
        <a href='https://www.twitter.com/dmaceda' target='_blank' ><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial