import React, { useRef, useState } from 'react';
import { photos } from '../photos';

const PolaroidGrid = ({ onPhotoClick }) => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Giảm tốc độ cuộn xuống 1 (1:1 với chuột gốc)
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
    // Only detect as drag if mouse moves significantly
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
  };

  const handleClick = (e, index) => {
    // Prevent click if we were dragging
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onPhotoClick(index);
  };

  return (
    <div 
      className="polaroid-scroll-container"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ cursor: isDown ? 'grabbing' : 'grab' }}
    >
      <div className={`polaroid-grid ${isDown ? 'is-dragging' : ''}`}>
        {photos.map((photo, index) => (
          <div 
            className="polaroid-card" 
            key={photo.id}
            onClick={(e) => handleClick(e, index)}
          >
            <div className="pin"></div>
            <div className="polaroid-img-wrapper">
              <img 
                src={photo.url} 
                alt={photo.title} 
                loading="lazy" 
                draggable="false" 
              />
            </div>
            <div className="polaroid-caption">
              <p>{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolaroidGrid;
