import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top m-2'>
      <div className='col-md-4 d-flex align-items-center'>
        {/* <a
          href='/'
          className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
        >
          <img src='/logo.png' alt='Company Logo' width='30' height='24' />
        </a> */}
        <span>© {new Date().getFullYear()} FoodGo, Inc</span>
      </div>

      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
        <li className='ms-3'>
          <a
            className='text-muted'
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter size={24} />
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-muted'
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={24} />
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-muted'
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook size={24} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
