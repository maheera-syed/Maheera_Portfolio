import React from 'react'
//react fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
        <div className='container'>
          <a class='navbar-brand text-light' href='#'>
            <h3 className='mt-2'>Maheera.</h3>
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </button>

          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav ms-auto'>
              <li class='nav-item active'>
                <a class='nav-link' href='#'>
                  Home <span class='sr-only'></span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  About
                </a>
              </li>{' '}
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Services
                </a>
              </li>{' '}
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Experience
                </a>
              </li>{' '}
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Portfolio
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
