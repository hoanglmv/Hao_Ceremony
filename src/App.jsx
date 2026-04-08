import React, { useState, useRef } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import PolaroidGrid from './components/PolaroidGrid';
import GallerySlider from './components/GallerySlider';

function App() {
  const { width, height } = useWindowSize();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Autoplay blocked'));
    }
    setIsPlaying(!isPlaying);
  };

  const attemptPlayMusic = () => {
    if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(err => console.log("Autoplay prevented"));
    }
  };

  const handlePhotoClick = (index) => {
    attemptPlayMusic(); // Try to play music on first interaction
    setSelectedPhotoIndex(index);
  };

  const closeGallery = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Confetti width={width} height={height} numberOfPieces={150} gravity={0.05} />
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" />
      
      <button 
        className={`music-btn ${isPlaying ? 'playing' : ''}`} 
        onClick={toggleMusic}
        title="Bật/Tắt Nhạc Nền"
      >
        {isPlaying ? '🎵 🔊' : '🎵 🔇'}
      </button>

      <main className="gallery-section">
        <PolaroidGrid onPhotoClick={handlePhotoClick} />
        
        {selectedPhotoIndex !== null && (
          <GallerySlider 
            initialSlide={selectedPhotoIndex} 
            onClose={closeGallery} 
          />
        )}
      </main>
    </>
  );
}

export default App;
