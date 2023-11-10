import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <section id='about' className='py-5 about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 order-lg-2'>
            <img
              className='img-fluid rounded-circle mb-4'
              src='profile-pic.jpeg'
              alt='Your Profile'
            />
          </div>
          <div className='col-lg-6 order-lg-1'>
            <h2 className='section-heading text-uppercase'>About Me</h2>
            <p className='text-muted'>
              Hello! I'm Maheera Batool, a passionate web developer with a
              strong foundation in front-end and back-end technologies. I love
              creating interactive and user-friendly websites that leave a
              positive impact on users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
