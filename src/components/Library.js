import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ setSongs, songs, setCurrentSong, audioRef, isPlaying, libraryStatus, currentSong }) => {
  return (
    <div className={`library-container ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
