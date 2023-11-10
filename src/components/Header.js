import React from 'react'
import Typed from 'react-typed'
import Fade from 'react-reveal'
import 'font-awesome/css/font-awesome.min.css'

const Header = () => {
  return (
    <div className='header-wraper'>
      <div className='main-info'>
        <h2>Hello, Iam Maheera Syed </h2>
        {/* <p>Iam Maheera Syed </p> */}
        <Typed
          className='typed-text'
          strings={[
            'Web designer',
            'Web Developer',
            'Full Stack Developer',
            'Software Developer',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#' className='main-btn'>
          Contact Me
        </a>
        <div className='row banner'>
          <div className='banner-text'>
            <Fade bottom>
              <h1 className='responsive-headline'></h1>
            </Fade>
            <Fade bottom duration='1200'>
              <h3></h3>
            </Fade>
            <hr />
            <Fade bottom duration='2000'>
              <ul className='social'>
                <a href='' className='button btn project-btn'>
                  <i className='fa fa-book fa-2x'></i>Project
                </a>
                <a href='' className='button btn github-btn'>
                  <i className='fa fa-github fa-2x'></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>
        <p className='scrolldown'>
          <br />
          <a className='smoothscroll' href='#about'>
            <i class='fa fa-chevron-circle-down fa-3x' aria-hidden='true'></i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Header
