import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Components/NavBar.css"
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { DiMongodb } from 'react-icons/di';


function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <IconContext.Provider value={{color: "white"}}>
            <nav className="navbar">
                <div className="navbar-container container">
                    <Link to="/" 
                    className="navbar-logo"
                    onClick={closeMobileMenu}
                    >
                        <DiMongodb 
                        className="navbar-icon"
                        />
                        DB Manager
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink 
                            to="/" 
                            className={({ isActive }) => "nav-links" + (isActive ? " activated" : "") }
                            onClick={closeMobileMenu}
                            >
                                Home
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            to="/login" 
                            className={({ isActive }) => "nav-links" + (isActive ? " activated" : "") }
                            onClick={closeMobileMenu}
                            >
                                Login
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            to="/products" 
                            className={({ isActive }) => "nav-links" + (isActive ? " activated" : "") }
                            onClick={closeMobileMenu}
                            >
                                Products
                            </NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            to="/categories/post" 
                            className={({ isActive }) => "nav-links" + (isActive ? " activated" : "") }
                            onClick={closeMobileMenu}
                            >
                                Categories
                            </NavLink> 
                        </li>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default NavBar