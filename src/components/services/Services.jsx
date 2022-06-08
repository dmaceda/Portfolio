import React from 'react'
import './services.css'
import {MdOutlineDarkMode} from 'react-icons/md'
import {HiOutlineLightBulb} from 'react-icons/hi'


const Services = () => {
  return (
    <div className='btn__theme'>
      <button className='btn__theme-btn' ><HiOutlineLightBulb/></button>
      <button className='btn__theme-btn'><MdOutlineDarkMode/></button>
    </div>
  )
}

export default Services