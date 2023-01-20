import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArtPage from "./components/ArtPage";

import { useState } from "react";

function App() {
  const [renderId, setRenderId] = useState("characters");
  const [artPageIs, setArtPage] = useState(false);
  const [artPageId, setArtPageId] = useState(0);
  console.log(artPageId);

  return (
    <div className="App">
      <Navbar
        onChangeRenderId={setRenderId}
        artPageIs={artPageIs}
        renderId={renderId}
        setArtPage={setArtPage}
        setArtPageId={setArtPageId}
      />

      <Home
        renderId={renderId}
        setArtPage={setArtPage}
        artPageIs={artPageIs}
        setArtPageId={setArtPageId}
      />
      <ArtPage
        artPageIs={artPageIs}
        setArtPage={setArtPage}
        setArtPageId={setArtPageId}
        artPageId={artPageId}
      />
      <Footer />
    </div>
  );
}

export default App;
