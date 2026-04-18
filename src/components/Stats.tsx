import React from 'react';

export default function Stats() {
  return (
    <section id="angka">
      <div className="stats-container">
        <div className="stats-images">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="Statistik Utama" className="stats-main-img" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600" alt="Statistik Kecil" className="stats-small-img" referrerPolicy="no-referrer" />
        </div>
        <div className="stats-content">
          <span className="badge">DOKUMENTASI</span>
          <b><h2>GALERI<span> KAMI</span></h2></b>
          <p>Momen-momen penting dalam setiap tahapan pembangunan yang kami abadikan sebagai bukti dedikasi dan transparansi kerja.</p>
          <div className="stats-grid">
            {[1, 2, 3, 4].map((item) => (
              <div className="stat-card" key={item}>
                <i className="fas fa-chart-line"></i>
                <h3>98%</h3>
                <p>Kepuasan Klien<br />Tingkat kepuasan mitra yang konsisten selama 25+ tahun</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary" style={{ marginTop: '2rem' }}>
            Mulai Proyek Anda <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
