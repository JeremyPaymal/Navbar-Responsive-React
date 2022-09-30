import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import './Navbar.css';


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <h1>LOGO</h1>
        </div>
        <ul className='app__navbar-links'>
            <li>Home</li>
            <li>Find a doctor</li>
            <li>Apps</li>
            <li>Testimonials</li>
            <li>About us</li>
        </ul>


        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu color='black' fontSize={27} onClick= {() => setToggleMenu(true)} />

            {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                       <MdOutlineHealthAndSafety
                       fontSize={27}
                       className="overlay_close"
                       onClick={() => setToggleMenu(false)}
                       />
                       <ul className="app__navbar-smallscreen-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Find a doctor</a></li>
                        <li><a href="/">Apps</a></li>
                        <li><a href="/">Testimonials</a></li>
                        <li><a href="/">About us</a></li>
                        </ul> 
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar