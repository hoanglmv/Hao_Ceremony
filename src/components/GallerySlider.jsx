import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { photos } from '../photos';

const GallerySlider = ({ initialSlide, onClose }) => {
  return (
    <div className="modal-overlay open">
      <button className="modal-close-btn" onClick={onClose}>&times;</button>
      <div className="modal-content">
        <div className="gallery-container">
          <Swiper
            initialSlide={initialSlide}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <img src={photo.url} className="blur-shadow" alt="" />
                <div className="img-wrapper">
                  <img src={photo.url} className="main-img" alt={photo.title} />
                </div>
                <div className="slide-caption">
                  <h3>{photo.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default GallerySlider;
