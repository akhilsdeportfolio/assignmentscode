import React from 'react'
import {Link} from 'react-router-dom';

function NavBar({hide}) {
  return (
    <>
      <div style={{display:'flex',direction:'column',justifyContent:'space-evenly'}}>
        {hide=='home' ? <></>:<Link to="/">Home</Link>}
        {hide=='login' ? <></>:<Link to="/login">Login</Link>}
        {hide=='about' ? <></>:<Link to="/about-us">About</Link>}
        {hide=='contact' ? <></>:<Link to="/contact">Contact</Link>}
        {hide=='services' ? <></>:<Link to="/services">Services</Link>}
          
          
          
          
          
      </div>
    </>
  )
}

export default NavBar
