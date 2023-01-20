import React from "react";
import "./style/art.css";
import Art from "./Art";
import About from "./About";
import Other from "./Other";
import Resume from "./Resume";
import { useState } from "react";

function Home({ renderId, setArtPage, artPageIs, setArtPageId }) {
  const arts = [
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "The Parasite Queen",
      description: "",
      id: 1,
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "The Parasite Queen",
      description: "",
      id: 2,
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "The Parasite Queen",
      description: "",
      id: 3,
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "The Parasite Queen",
      description: "",
      id: 4,
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "The Parasite Queen",
      description: "",
      id: 5,
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "The Parasite Queen",
      description: "",
      id: 6,
    },
  ];

  const otherArts = [
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "Other",
      description: "",
      id: "a",
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "Other",
      description: "",
      id: "b",
    },
    {
      img: "https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0",
      title: "Other",
      description: "",
      id: "c",
    },
  ];

  const [masked, setMasked] = useState(false);
  const classNameArt = artPageIs ? "homeMask" : "Home";

  return (
    <div className={classNameArt}>
      {renderId === "about" && <About />}
      {renderId === "characters" && (
        <>
          {arts.map((artData) => (
            <Art
              key={artData.id}
              artData={artData}
              setMasked={setMasked}
              masked={masked}
              setArtPage={setArtPage}
              setArtPageId={setArtPageId}
            />
          ))}
        </>
      )}

      {renderId === "other" && (
        <>
          {otherArts.map((artData) => (
            <Other
              key={artData.id}
              artData={artData}
              setMasked={setMasked}
              masked={masked}
              setArtPage={setArtPage}
              setArtPageId={setArtPageId}
            />
          ))}
        </>
      )}
      {renderId === "resume" && <Resume />}
    </div>
  );
}

export default Home;
