import React from "react";
import "./style/css/NavbarAndFooter.css";

import Instagram from "./style/svg/Instagram.svg";
import LinkeId from "./style/svg/linkedin.svg";
import Link from "./style/svg/link.svg";
import Email from "./style/svg/email.svg";

function Navbar({ onChangeRenderId, setArtPage, setArtPageId }) {
  return (
    <div className="nav-contener">
      <div className="nav-home">
        <p className="nav-nick">Nicholas Huang</p>
        <p className="nav-home-description">Concept Art | Visual Development</p>
      </div>
      <div className="nav-content">
        <a
          href="#"
          className="nav-content_a"
          onClick={() => {
            onChangeRenderId("characters");
            setArtPage(false);
            setArtPageId(0);
          }}
        >
          Characters
        </a>
        <p>|</p>
        <a
          href="#"
          className="nav-content_a"
          onClick={() => {
            onChangeRenderId("other");
            setArtPage(false);
            setArtPageId(0);
          }}
        >
          Other
        </a>
        <p>|</p>
        <a
          href="#"
          className="nav-content_a"
          onClick={() => {
            onChangeRenderId("about");
            setArtPage(false);
            setArtPageId(0);
          }}
        >
          About
        </a>
        <p>|</p>
        <a
          href="#"
          className="nav-content_a"
          onClick={() => {
            onChangeRenderId("resume");
            setArtPage(false);
            setArtPageId(0);
          }}
        >
          Resume
        </a>
      </div>

      <div className="nav-icons">
        <a href="https://www.instagram.com/insomniacnick/" className="icon-nav">
          <img src={Instagram} alt="IG" className="nav-social-links" />
        </a>
        <a href="#" className="icon-nav">
          <img src={LinkeId} alt="LinkeId" className="nav-social-links" />
        </a>
        <a href="#" className="icon-nav">
          <img src={Email} alt="Email" className="nav-social-links" />
        </a>
        <a href="#" className="icon-nav">
          <img src={Link} alt="Other" className="nav-social-links" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
