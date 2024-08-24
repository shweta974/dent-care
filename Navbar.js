// src/components/Navbar.js
import React, {useState}from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

import logoImage from '../download (2).png';

const myStyle={
    width:"60px",
    height:"50px"
   
}


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (

   
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> <img src={logoImage} style={myStyle}/>Dent Care </Link>
        
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        ☰
      </div>
      <ul className="navbar-links">
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        {/* <i class="fa-regular fa-magnifying-glass"></i> */}
      </ul>
      <div className='btn' type="btn">Make appointment</div>
    </nav>
  );
};

export default Navbar;
