import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  let location = useLocation();
  
  useEffect(() => {
      console.log(location.pathname);
  }, [location])

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Occasion</li>
          <li>
            <Link to="/resto">RestoFind</Link>
          </li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
      <Link to="/" className="logout">Logout</Link>

    </header>
  );
}

export default NavBar;