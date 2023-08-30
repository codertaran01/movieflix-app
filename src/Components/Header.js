import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.jpg'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className='header_icon' src={Logo} alt=''/></Link>
           <div className='header-content'>
           <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
           </div>
        </div>
      </div>
    </>
  )
}

export default Header
