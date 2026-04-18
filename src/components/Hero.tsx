import React from 'react';

export default function Hero() {
  return (
    <section id="beranda">
      <div className="hero-container">
        <div className="hero-content">
          <h2><b>Infrastruktur Jalan Aman, <span>Andal dan Berstandar Tinggi.</span></b></h2>
          <p>Produsen dan aplikator perlengkapan jalan profesional sejak 2019. Mitra terpercaya untuk infrastruktur berstandar tinggi.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Hubungi Kami <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#portofolio" className="btn-secondary">
              <i className="fas fa-play-circle"></i> Lihat Lini Proyek
            </a>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Proyek Selesai</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Tahun Pengalaman</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Kepuasan Mitra</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" alt="Konstruksi" referrerPolicy="no-referrer" />
        </div>
      </div>
      
      <div className="trusted-by">
        <p>MITRA TERPERCAYA INFRASTRUKTUR JALAN NASIONAL & DAERAH</p>
        <div className="marquee-container">
          <div className="marquee-content">
            {[1, 2].map((set) => (
              <React.Fragment key={set}>
                <div className="marquee-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Kementerian_Perhubungan_Republik_Indonesia.svg/1200px-Logo_Kementerian_Perhubungan_Republik_Indonesia.svg.png" alt="" referrerPolicy="no-referrer" />
                  <span>DISHUB</span>
                </div>
                <div className="marquee-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jasa_Marga_logo.svg/1200px-Jasa_Marga_logo.svg.png" alt="" referrerPolicy="no-referrer" />
                  <span>JASA MARGA</span>
                </div>
                <div className="marquee-item">
                  <img src="pertamina.png" alt="" referrerPolicy="no-referrer" />
                  <span>PERTAMINA</span>
                </div>
                <div className="marquee-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Adhi_Karya_Logo.svg/1200px-Adhi_Karya_Logo.svg.png" alt="" referrerPolicy="no-referrer" />
                  <span>PLN</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
