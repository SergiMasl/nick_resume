import React from 'react';
import './style/NavbarAndFooter.css';

import Instagram from'./style/svg/Instagram.svg';
import LinkeId from './style/svg/linkedin.svg';
import Link from './style/svg/link.svg';
import Email from './style/svg/email.svg';


function Navbar() {

    return (
        <div className="nav-contener">
            <div className="nav-home">   
                    <p className="nav-nick">Nicholas Huang</p>
                    <p className='nav-home-description'>Concept Art | Visual Development</p>
              
            </div>
            <div className="nav-content">
            <a href="#" className="nav-content_a">Characters</a>
            <p>|</p>
            <a href="#" className="nav-content_a">Other</a>
            <p>|</p>
            <a href="#" className="nav-content_a">About</a>
            <p>|</p>
            <a href="#" className="nav-content_a">Resume</a>
            </div>

            <div className="nav-icons">
                <a herf='https://www.instagram.com/insomniacnick/' className="icon-nav">
                    <img src={Instagram} alt="IG" className='nav-social-links' />
                </a>
                <a herf='#' className="icon-nav">
                    <img src={LinkeId} alt="LinkeId" className='nav-social-links'/>
                </a>
                <a herf='#' className="icon-nav">
                    <img src={Email} alt="Email" className='nav-social-links'/>
                </a>
                <a herf='#' className="icon-nav">
                    <img src={Link} alt="Other" className='nav-social-links'/>
                </a>
            </div>
        </div>
    )
}

export default Navbar;