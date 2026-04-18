import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <i className="fas fa-building"></i>
          <div className="logo-text">
            <h1>PT ADI JOYO KUSUMO</h1>
            <span>SOLUSI KESELAMATAN JALAN TERPERCAYA</span>
          </div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'flex' : ''}`} style={{ display: isMenuOpen ? 'flex' : undefined, flexDirection: isMenuOpen ? 'column' : undefined, position: isMenuOpen ? 'absolute' : undefined, top: isMenuOpen ? '70px' : undefined, left: 0, width: isMenuOpen ? '100%' : undefined, background: isMenuOpen ? 'var(--primary-blue)' : undefined, padding: isMenuOpen ? '2rem' : undefined }}>
          <li><a href="#beranda" onClick={() => setIsMenuOpen(false)}>Beranda</a></li>
          <li><a href="#tentang" onClick={() => setIsMenuOpen(false)}>Tentang Perusahaan</a></li>
          <li><a href="#layanan" onClick={() => setIsMenuOpen(false)}>Layanan</a></li>
          <li><a href="#portofolio" onClick={() => setIsMenuOpen(false)}>Portofolio</a></li>
          <li><a href="#galeri" onClick={() => setIsMenuOpen(false)}>Galeri</a></li>
          <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontak</a></li>
          <li><a href="#contact" className="btn-konsultasi" onClick={() => setIsMenuOpen(false)}>Konsultasi Proyek</a></li>
        </ul>
        <div className="mobile-menu" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </nav>
    </header>
  );
}
