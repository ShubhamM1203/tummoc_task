import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
export const Navbar = () => {
  return (
    <div className='navflex'> 
         <div>
            <Link className='navlink' to ={"/"}>Home</Link>
         </div>
         <div className='rightFlex'>
            <Link className='navlink' to={"/login"}>Login</Link>
            <Link className='navlink' to={"/signup"}>SignUp</Link>
         </div>
    </div>
  )
}
