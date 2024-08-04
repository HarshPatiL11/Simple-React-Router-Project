import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <section className='Nav-Section'>
        <div className='Nav-LeftDiv'>
          <h3 className='WebBrand'>Patil</h3>
        </div>
        <div className='Nav-RightDiv'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/signup">Sign-Up</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
