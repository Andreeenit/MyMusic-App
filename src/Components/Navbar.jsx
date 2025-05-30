import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="header">
        <li className='home-link'><Link to="/">My Music App</Link></li>
        </div>
        <div className='navbar-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MusicList">Music list</Link></li>
      </div>
    </div>
  )
}

export default Navbar
