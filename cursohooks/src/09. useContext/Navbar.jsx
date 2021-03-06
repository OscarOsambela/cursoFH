import React from 'react'
import { NavLink } from 'react-router-dom'
import '../09. useContext/style.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
