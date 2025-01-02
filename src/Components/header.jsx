import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/header.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="navbar">
      <div className="navbar-title">Liftly</div>
      <div className='navbar-right'>
        <div className="navbar-links">
          <Link  to="/SearchPage.jsx" className="navbar-btn">Search</Link>
          <Link  to="/riderPage.jsx"   className="navbar-btn">Offer a Ride</Link>
          <Link  to=""    className="navbar-btn">Login/Register</Link>
          
        </div>
     
        <div className='toogle-btn'>

          <Link className="navbar-toggle" onClick={toggleMenu}>
            &#9776;
          </Link>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <Link to="/SearchPage.jsx" className="navbar-btn">Search</Link>
              <Link to="/riderPage.jsx"  className="navbar-btn">Offer a Ride</Link>
              <Link className="navbar-btn">Login</Link>
              <Link className="navbar-btn">Register</Link>
            </div>
          )}
        </div>
      </div>
       
   
    </div>
   
    </>
    
  );
};

export default Navbar;
