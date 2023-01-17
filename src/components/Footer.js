import React from 'react';
import Instagram from'./style/svg/Instagram.svg';
import LinkeId from './style/svg/linkedin.svg';
import Link from './style/svg/link.svg';
import Email from './style/svg/email.svg';

function Footer() {
    return (
        <div className="footer-content">

            <div className='footer-email'>nhuangart@gmail.com</div>
            <div className='underline'></div>
            <div className='footer-icons footer-icons-footer'>
                <a herf='https://www.instagram.com/insomniacnick/' className="icon-footer">
                    <img src={Instagram} alt="IG" className='nav-social-links' />
                </a>
                <a herf='#' className="icon-footer">
                    <img src={LinkeId} alt="LinkeId" className='nav-social-links'/>
                </a>
                <a herf='#' className="icon-footer">
                    <img src={Email} alt="Email" className='nav-social-links'/>
                </a>
                <a herf='#' className="icon-footer">
                    <img src={Link} alt="Other" className='nav-social-links'/>
                </a>
            </div>
            <div className='footer-rights'>
                All images © 2021 Nicholas Huang
            </div>
        </div>
    )
}

export default Footer;



