import { useRef, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const songs = [
  { 
    title: "Chase Atlantic Swim", 
    src: "/react-music-player/music/Chase-Atlantic-Swim.mp3",
    image: "/react-music-player/images/swim-thumbnail.jpeg" 
  },
  { 
    title: "Dont Laugh", 
    src: "/react-music-player/music/Chase_Atlantic-Dont_Laugh.mp3",
    image: "/react-music-player/images/dont-laugh-thumbnail.jpg" 
  },
  { 
    title: "My Love Mine all mine", 
    src: "/react-music-player/music/Mitski-My-Love-Mine-All-Mine.mp3",
    image: "/react-music-player/images/mitski-thumbnail.jpeg" 
  },
  {
    title: "Chk Chk Boom", 
    src: "/react-music-player/music/chk-chk-boom.mp3",
    image: "/react-music-player/images/chk-chk-boom.png"
  },
  { 
    title: "Washing Machine Heart", 
    src: "/react-music-player/music/washing-machine-heart.mp3",
    image: "/react-music-player/images/washing-machine-heart.png" 
  }
];



function MusicPlayer({ currentSongIndex, setCurrentSongIndex }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current
        .play()
        .catch((err) => console.warn("Autoplay blocked, user must interact first:", err));
    }
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={songs[currentSongIndex].src} />
      <button onClick={prevSong}>⏮</button>
      <button onClick={togglePlayPause}>▶️/⏸</button>
      <button onClick={nextSong}>⏭</button>
      <p>{songs[currentSongIndex].title}</p>
    </div>
  );
}

// **SongList Component**
function SongList({ setCurrentSongIndex }) {
  return (
    <div className="song-list">
      <h2>Songs</h2>
      <div className="song-cards">
        {songs.map((song, index) => (
          <div key={index} className="music-card" onClick={() => setCurrentSongIndex(index)}>
            {/* Thumbnail Image */}
            <div className="thumbnail">
              <img src={song.image} alt={song.title} />
            </div>
            
            {/* Song Title */}
            <div className="song-title">{song.title}</div>
            
            {/* Play Button */}
            <button className="play-button" onClick={(e) => { 
              e.stopPropagation(); // Prevent parent onClick
              setCurrentSongIndex(index);
            }}>
              ▶
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}




// **PropTypes validation**
MusicPlayer.propTypes = {
  currentSongIndex: PropTypes.number.isRequired,
  setCurrentSongIndex: PropTypes.func.isRequired,
};

SongList.propTypes = {
  setCurrentSongIndex: PropTypes.func.isRequired,
};

export { MusicPlayer, SongList };
