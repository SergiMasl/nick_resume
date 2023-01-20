import React from "react";

function Other({ artData, setMasked, masked, setArtPage, setArtPageId }) {
  const classNameArt = masked ? "art art-masked" : "art";
  return (
    <div
      className={classNameArt}
      onMouseOver={() => {
        setMasked(true);
      }}
      onMouseLeave={() => {
        setMasked(false);
      }}
      onClick={() => {
        setArtPage(true);
        setArtPageId(artData.id);
      }}
    >
      <img src={artData.img} alt="Art" className="art-img" />
      <div className="art-title">
        <p>{artData.title}</p>
      </div>
    </div>
  );
}

export default Other;
