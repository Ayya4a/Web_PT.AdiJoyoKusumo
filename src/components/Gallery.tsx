import React, { useRef } from 'react';

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 320;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const galleryItems = [
    { img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=600', caption: 'Pemasangan Fondasi Jembatan' },
    { img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600', caption: 'Pengaspalan Jalan Tol' },
    { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600', caption: 'Instalasi Traffic Light ATCS' },
    { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600', caption: 'Pengecekan Kualitas Material' },
    { img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?w=600', caption: 'Tim Lapangan Di Lokasi' },
    { img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=600', caption: 'Penyelesaian Akhir Proyek' }
  ];

  return (
    <section id="galeri">
      <div className="section-title">
        <span className="badge">DOKUMENTASI</span>
        <h2>Galeri Kami</h2>
        <p>Momen-momen penting dalam setiap tahapan pembangunan yang kami abadikan sebagai bukti dedikasi dan transparansi kerja.</p>
      </div>
      
      <div className="gallery-wrapper">
        <div className="slider-arrow prev-arrow" onClick={() => scroll('left')}><i className="fas fa-chevron-left"></i></div>
        <div className="slider-arrow next-arrow" onClick={() => scroll('right')}><i className="fas fa-chevron-right"></i></div>
        
        <div className="gallery-track" ref={trackRef}>
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.img} alt={`Galeri ${index + 1}`} referrerPolicy="no-referrer" />
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
