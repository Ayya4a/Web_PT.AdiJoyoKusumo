import React from 'react';

export default function About() {
  return (
    <section id="tentang">
      <div className="about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="Tentang Kami" referrerPolicy="no-referrer" />
          <div className="experience-badge">
            <h3>7+</h3>
            <p>TAHUN</p>
          </div>
        </div>
        <div className="about-content">
          <span className="badge">TENTANG PERUSAHAAN</span>
          <h2>Precision Crafting, The Future Of Road Safety.</h2>
          <p>PT Adi Joyo Kusumo adalah produsen dan penyedia perlengkapan jalan serta aplikator profesional dalam pekerjaan konstruksi jalan. Kami berdedikasi untuk mendukung pembangunan infrastruktur jalan yang memadai, karena kami percaya kualitas jalan mencerminkan kemajuan sebuah daerah.</p>
                    <div className="features">
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Teknologi Terkini dan Standar Kualitas Tinggi.</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Bersertifikasi TKDN dan Uji Kesesuaian.</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Sesuai Spesifikasi Kementrian Perhubungan RI.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
