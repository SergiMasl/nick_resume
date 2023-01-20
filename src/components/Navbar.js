import React from "react";
import "./style/css/NavbarAndFooter.css";

import Instagram from "./style/svg/Instagram.svg";
import LinkeId from "./style/svg/linkedin.svg";
import Link from "./style/svg/link.svg";
import Email from "./style/svg/email.svg";

function Navbar({
  onChangeRenderId,
  setArtPage,
  setArtPageId,
  renderId,
  artPageIs,
}) {
  console.log(renderId);
  const btmActive1 = renderId === "resume" ? " onActive" : "offActive ";
  const btmActive2 = renderId === "characters" ? " onActive" : "offActive ";
  const btmActive3 = renderId === "other" ? " onActive" : "offActive ";
  const btmActive4 = renderId === "about" ? " onActive" : "offActive ";

  return (
    <div className="nav-contener">
      <div className="nav-home">
        <p className="nav-nick">Nicholas Huang</p>
        <p className="nav-home-description">Concept Art | Visual Development</p>
      </div>
      <div className="nav-content">
        <a
          href="#"
          className={btmActive2}
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
          className={btmActive3}
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
          className={btmActive4}
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
          className={btmActive1}
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
