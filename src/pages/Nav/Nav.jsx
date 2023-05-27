import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/mouseTracker">Moust Track</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav