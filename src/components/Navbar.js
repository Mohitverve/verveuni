
import React from 'react';
import { useState } from 'react';


import '../styles/navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar (){

    const [isNavOpen, setIsNavOpen] = useState(false);
    

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return(
                      <div className="navbar">
                                    <div className="hamburger" onClick={toggleNav}>
                                        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                                        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                                        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
                                    </div>
                                    <a className="logo">VerveIN</a>
                                    <div className="nav-logo">
                                        <a>
                                            <img loading="lazy" src="/images/vervein.png" alt="vervein" />
                                        </a>
                                    </div>
                                    <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
                                        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
                                        <ul>
                                            <li><Link to="#about-us">About</Link></li>
                                            <li><Link to="#portfolio-loc">Services</Link></li>
                                            <li><Link to="/Home">Home</Link></li>
                                            <li><Link to="#FAQ">FAQs</Link></li>
                                            <li><Link to="#contact">Contact us</Link></li>
                                            
                                        </ul>
                                    </div>
                                    {/* <div className="nav-search">
                                        <input type="text" placeholder="All results..." />
                                    </div> */}
                                   
                                </div>
                           
    )
}