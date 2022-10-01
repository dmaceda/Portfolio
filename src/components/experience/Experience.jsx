import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experiences'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend & UX</h3>
          <div className='experience__content'>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>JavasCript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Material UI</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Figma</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Adobe XD</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>

        </div>

        <div className="experience__frontend">
          <h3>Backend & DB</h3>
          <div className='experience__content'>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Express</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Sequelize</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Mongo DB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience