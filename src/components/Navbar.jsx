import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo/whiteLogo.svg";
import menuIcon from "../assets/Icons/hamburgerMenu.svg";
import closeIcon from "../assets/Icons/close.svg";
import Arrow from "../assets/Icons/top-arrow-right-up.svg";
import ArrowRight from "../assets/Icons/arrow-right.svg";

// Css
import "../styles/Navbar.css";

// js files
import { observeElements } from "../animations.js";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        observeElements();
    }, []);

    return (
        <nav className="navbar blur">
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? (
                    <img src={closeIcon} alt="Close Menu" />
                ) : (
                    <img src={menuIcon} alt="Open Menu" />
                )}
            </div>
            <ul className={`hidden nav-links ${menuOpen ? "active" : ""}`}>
                <div className="nav-row1">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {menuOpen ? (
                            <img src={closeIcon} alt="Close Menu" />
                        ) : (
                            <img src={menuIcon} alt="Open Menu" />
                        )}
                    </div>
                </div>
                <ol className="nav-menu">
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>
                            <div className="link-container">
                                <div className="nav-text">
                                    <p>Home</p>
                                    <span>&#40;01&#41;</span>
                                </div>
                                <div className="nav-icon">
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" onClick={toggleMenu}>
                            <div className="link-container">
                                <div className="nav-text">
                                    <p>Services</p>
                                    <span>&#40;02&#41;</span>
                                </div>
                                <div className="nav-icon">
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>
                            <div className="link-container">
                                <div className="nav-text">
                                    <p>About</p>
                                    <span>&#40;03&#41;</span>
                                </div>
                                <div className="nav-icon">
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/groupCompanies" onClick={toggleMenu}>
                            <div className="link-container">
                                <div className="nav-text">
                                    <p>Group Companies</p>
                                    <span>&#40;04&#41;</span>
                                </div>
                                <div className="nav-icon">
                                    <img src={ArrowRight} alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </li>
                </ol>

                <ol className="navRow2">
                    <div className="socials">
                        <div className="socials-row1">
                            <h3>Follow Us</h3>
                        </div>
                        <div className="socials-row2">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/company/ivari-security-systems-pvt-ltd/"
                            >
                                <p>LinkedIn</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/ivari.in/"
                            >
                                <p>Instagram</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/ivari_in"
                            >
                                <p>Twitter</p>
                                <img src={Arrow} alt="->" />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/ivari.in/"
                            >
                                <p>Facebook</p>
                                <img src={Arrow} alt="->" />
                            </a>
                        </div>
                    </div>
                    <div className="login-links">
                        <a
                            target="_blank"
                            href="http://tracking.ivari.in/Vendor.aspx"
                        >
                            <p>Vendor Registation</p>
                            <img src={ArrowRight} alt="->" />
                        </a>

                        {/* <a target="_blank" rel="noopener noreferrer" href="/">
                            <p>Employee Login</p>
                            <img src={ArrowRight} alt="->" />
                        </a> */}
                    </div>
                </ol>
            </ul>
        </nav>
    );
}

export default Navbar;
