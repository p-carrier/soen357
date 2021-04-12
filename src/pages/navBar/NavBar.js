import { useEffect } from 'react';
import { Link, BrowserRouter, useLocation } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
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

            <button className="logout">Logout</button>

        </header>
    );
}

export default NavBar;