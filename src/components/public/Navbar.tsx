import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [ user, setUser ] = useState(true);
  return (
    <div className='navbar-public'>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/projects">Projets</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {user && <li><Link to="/dashboard">Admin</Link></li>}
            </ul>
        </nav>
    </div>
  )
}
