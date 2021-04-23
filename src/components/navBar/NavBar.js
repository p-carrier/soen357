import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ children }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="not-active">Home</NavLink>
          </li>
          <li>Occasion</li>
          <li>
            <NavLink to="/resto" activeClassName="active">RestoFind</NavLink>
          </li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <NavLink to="/login" className="logout">login</NavLink>
      </nav>
      { children }
    </header>
  );
};

export default NavBar;