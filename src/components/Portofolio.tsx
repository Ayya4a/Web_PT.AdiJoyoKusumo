import React, { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    // SUMATERA
    { category: 'sumatera', title: 'Tol Trans-Jawa Segmen 4', location: 'Jawa Tengah', date: '12 April 2024', img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=800' },
    { category: 'sumatera', title: 'Peningkatan Jalan Pantura', location: 'Jawa Barat', date: '30 November 2023', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' },
    { category: 'sumatera', title: 'Perbaikan Jalan Nasional', location: 'Jawa Timur', date: '15 Oktober 2023', img: 'https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?w=800' },
    { category: 'sumatera', title: 'Pelebaran Jalan Akses Pelabuhan', location: 'Banten', date: '05 September 2023', img: 'https://images.unsplash.com/photo-1574359611678-75e1fe532eb6?w=800' },
    { category: 'sumatera', title: 'Rehabilitasi Jalan Kabupaten', location: 'Jawa Tengah', date: '20 Agustus 2023', img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=800' },
    // JAWA
    { category: 'jawa', title: 'Jembatan Cisumdawu Access', location: 'Jawa Barat', date: '08 Maret 2024', img: 'https://images.unsplash.com/photo-1545324412-cc8906179366?w=800' },
    { category: 'jawa', title: 'Jembatan Penghubung Desa', location: 'Jawa Timur', date: '12 Februari 2024', img: 'https://images.unsplash.com/photo-1513828583688-c526232ad1be?w=800' },
    { category: 'jawa', title: 'Jembatan Sungai Citarum', location: 'Jawa Barat', date: '01 Januari 2024', img: 'https://images.unsplash.com/photo-1545324412-cc8906179366?w=800' },
    { category: 'jawa', title: 'Jembatan Gantung Perbatasan', location: 'Jawa Tengah', date: '15 Desember 2023', img: 'https://images.unsplash.com/photo-1513828583688-c526232ad1be?w=800' },
    { category: 'jawa', title: 'Jembatan Beton Pratekan', location: 'Jawa Timur', date: '10 November 2023', img: 'https://images.unsplash.com/photo-1545324412-cc8906179366?w=800' },
    // SULAWESI
    { category: 'sulawesi', title: 'Fly Over Simpang Lima', location: 'Jawa Tengah', date: '22 Januari 2024', img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=800' },
    { category: 'sulawesi', title: 'Underpass Pertigaan Utama', location: 'Jawa Barat', date: '18 Desember 2023', img: 'https://images.unsplash.com/photo-1574359611678-75e1fe532eb6?w=800' },
    { category: 'sulawesi', title: 'Gerbang Tol Baru Seksi A', location: 'Jawa Timur', date: '05 November 2023', img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=800' },
    { category: 'sulawesi', title: 'Jembatan Layang Akses Tol', location: 'Banten', date: '20 Oktober 2023', img: 'https://images.unsplash.com/photo-1574359611678-75e1fe532eb6?w=800' },
    { category: 'sulawesi', title: 'Pelebaran Ruas Tol KM 45-50', location: 'Jawa Tengah', date: '10 September 2023', img: 'https://images.unsplash.com/photo-1590647688477-ec5a5a6b5b6d?w=800' },
    // PAPUA
    { category: 'papua', title: 'Gudang Logistik Sidoarjo', location: 'Jawa Timur', date: '15 Desember 2023', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
    { category: 'papua', title: 'Pabrik Tekstil Baru', location: 'Jawa Barat', date: '01 November 2023', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800' },
    { category: 'papua', title: 'Workshop Alat Berat', location: 'Jawa Timur', date: '15 Oktober 2023', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
    { category: 'papua', title: 'Gedung Kantor Pusat', location: 'Jakarta', date: '01 September 2023', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800' },
    { category: 'papua', title: 'Hanggar Pesawat Privat', location: 'Banten', date: '20 Agustus 2023', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const categoryLabels: { [key: string]: string } = {
    'sumatera': 'SUMATERA',
    'jawa': 'JAWA',
    'sulawesi': 'SULAWESI',
    'papua': 'PAPUA'
  };

  return (
    <section id="portofolio">
      <div className="section-title">
        <span className="badge" style={{ background: 'rgba(245,197,24,0.2)', color: 'var(--accent-yellow)' }}>PORTOFOLIO</span>
        <h2><b>Portofolio Proyek Kami</b></h2>
        <p>Setiap proyek adalah bukti komitmen kami terhadap kualitas dan inovasi berkelanjutan untuk mewujudkan infrastruktur jalan yang aman, andal, dan berstandar tinggi.</p>
      </div>
      <div className="portfolio-filter">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>SEMUA</button>
        <button className={`filter-btn ${filter === 'sumatera' ? 'active' : ''}`} onClick={() => setFilter('sumatera')}>SUMATERA</button>
        <button className={`filter-btn ${filter === 'jawa' ? 'active' : ''}`} onClick={() => setFilter('jawa')}>JAWA</button>
        <button className={`filter-btn ${filter === 'sulawesi' ? 'active' : ''}`} onClick={() => setFilter('sulawesi')}>SULAWESI</button>
        <button className={`filter-btn ${filter === 'papua' ? 'active' : ''}`} onClick={() => setFilter('papua')}>PAPUA</button>
      </div>
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div className="portfolio-item" key={index} data-category={project.category}>
            <img src={project.img} alt={project.title} referrerPolicy="no-referrer" />
            <div className="portfolio-overlay">
              <span className="portfolio-category">{categoryLabels[project.category]}</span>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p><i className="fas fa-map-marker-alt"></i> {project.location} &bull; {project.date}</p>
                <a href="#" className="portfolio-link">Lihat Detail Proyek <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
