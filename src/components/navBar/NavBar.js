import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Search from '../search/Search';

const NavBar = () => {
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

        <button className="logout">Logout</button>
      </nav>

      <div className="search">
        <Search />
      </div>


    </header>
  );
};

export default NavBar;