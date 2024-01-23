import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="sticky">
    <div className='navbar'>
      <div className="navcontainer">
        <span className="logo">Omkar Hotels & Travellers</span>
        <div className="navitems">
            <button className='navButton'>Register</button>
            <button className='navButton'>Login</button>
        </div>
      </div>
    </div>
    </div>
  )
}



export default Navbar
