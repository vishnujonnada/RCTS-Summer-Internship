import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar sticky-top">
      <ul className="navbar-nav navbar-left">
        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <NavLink exact to="/" className="nav-link">REDA</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav navbar-right">
        {(location.pathname === '/form')  && (
          <li className={`nav-item ${location.pathname === '/form' ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
        )}
  
        
        {location.pathname === '/form' && (
          <li className={`nav-item ${location.pathname === '/form' ? 'active' : ''}`}>
            <NavLink to="/visualize" className="nav-link">View Data</NavLink>
          </li>

          
        )}
        {location.pathname === '/excel' && (
          <li className={`nav-item ${location.pathname === '/excel' ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
        )}
        {location.pathname === '/Visualize' && (
          <li className={`nav-item ${location.pathname === '/Visualize' ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
        )}
         {(location.pathname === '/bar' || location.pathname === '/pie' || location.pathname === '/line' || location.pathname === '/area' ) && (
          <li className={`nav-item ${(location.pathname === '/bar' || location.pathname === '/pie' || location.pathname === '/line' || location.pathname === '/area') ? 'active' : ''}`}>
            <NavLink to="/Visualize" className="nav-link">Back</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
