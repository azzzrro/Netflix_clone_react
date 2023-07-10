import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-details'>
            <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            </div>
            <div className="nav-details">
            <ul>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My List</li>
            </ul>
            </div>
        </div>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default Navbar