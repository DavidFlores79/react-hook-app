import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">
                <img src="/vite.svg" alt="Logo Vite" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${(isActive) ? 'active' : ''}`}>
                        <span className='nav-link'>Home</span>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${(isActive) ? 'active' : ''}`}>
                        <span className='nav-link'>About</span>
                    </NavLink>
                </ul>
                <ul className="navbar-nav">
                    <NavLink to="/login" className={({ isActive }) => `nav-link ${(isActive) ? 'active' : ''}`}>
                        <span className='nav-link'>Login</span>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
