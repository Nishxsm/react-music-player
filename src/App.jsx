import { useState } from "react";
import { MusicPlayer, SongList } from "./components/MusicPlayer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <SongList setCurrentSongIndex={setCurrentSongIndex} />
      </div>
      <MusicPlayer currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} />
    </div>
  );
}

export default App;
