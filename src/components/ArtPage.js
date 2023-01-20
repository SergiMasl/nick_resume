import React from "react";
import "./style/css/artPage.css";

function ArtPage({ artPageIs, setArtPage, artPageId, setArtPageId }) {
  const classNameArtPage = artPageIs ? "artPageMaskVisble Home" : "artPageMask";
  return (
    <div className={classNameArtPage}>
      <div
        className="btm_art-back"
        onClick={() => {
          setArtPage(false);
        }}
      >
        Go to art {artPageId + artPageIs}
      </div>
      <div
        className="next-art"
        onClick={() => {
          setArtPageId((artPageId += 1));
        }}
      >
        next
      </div>
      <div className="prev-art">before</div>
    </div>
  );
}

export default ArtPage;
