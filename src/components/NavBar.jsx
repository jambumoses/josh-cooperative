import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div>
          <span className='navbar-mobile-logo'><img src="" alt="" /></span>

          <span className='navbar-link'><Link to="/" className='a' href="">home</Link></span>
          <span className='navbar-link'><Link to="/about" className='a' href="">about</Link></span>
          <span className='navbar-link'><Link to="/blog" className='a' href="">blog</Link></span>
          <span className='navbar-link'><Link to="/farmers" className='a' href="">farmers</Link></span>
        </div>

        <div>
          <span className='navbar-logo'>
            logo
            <img src="" alt="" />
          </span>
        </div>

        <div className='navbar-right'>
          <span className='navbar-right-cart'>
            <i className="fa fa-shopping-cart"></i>
            <sup>5</sup>
          </span>

          <span className='navbar-right-socials'><i className="fab fa-facebook"></i></span>
          <span className='navbar-right-socials'><i className="fab fa-twitter"></i></span>
          <span className='navbar-right-socials'><i className="fab fa-linkedin"></i></span>
          <span className='navbar-right-socials'><i className="fab fa-instagram"></i></span>
          <span className='navbar-right-socials'><i className="fab fa-youtube"></i></span>
        </div>
      </nav>
    </>
  )
}
