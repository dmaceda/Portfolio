import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
      <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
        
        <h5>Experience</h5>
        <div className='about__icon'>
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        </div>
        </article>

        <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5>Co-Work</h5>
        <div className='about__icon'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        </article>

        <article className='about__card'>
        <VscFolder className='about__icon'/>
        <h5>Proyects</h5>
        <div className='about__icon'>
        <AiFillStar />
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        </div>
        </article>
      </div>

      <p className='texto'>
        I'm a passionte for art, design and technology.
        I have a background in the development of web applications, but I'm also familiar with the development of mobile applications.
        I'm currently working on freelance projects and I'm always looking for new opportunities.
        I  love to create solutions to problems.
        Work colaboration and teamwork are my strengths.
      </p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>

    </section>
  )
}

export default About