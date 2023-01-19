import React from "react";
import AboutLogo from './style/About_logo.jpg'
import './style/css/About.css';

function About() {
    return(
        <div className="about-contener">
            <div className="about-logo">
                <img src={AboutLogo} alt="Logo" className='about-img' />
            </div>
           <div className="about-content">
                <h1>Hi! My name is Nicholas Huang </h1>
                <p>(you can call me Nick)</p>
                <p>I am a concept designer who loves working in games
                and films. Graduate from Art Center College of Design.</p>
                <p>I have worked with many amazing clients, 
                from AAA companies like Riot Games to 
                smaller indie studios. I am passionate about 
                telling stories through design and imagery. </p>
                <p>In my spare time, you can find me playing
                video games, DnD, music, anime, and running.</p>
                <p>You can reach me at:  nhuangart@gmail.com</p>

           </div>
        </div>
    )
}

export default About;
