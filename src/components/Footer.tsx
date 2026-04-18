import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [stats, setStats] = useState({
    online: 12,
    todayViews: 99,
    todayVisitor: 1234,
    totalViews: 33094,
    totalVisitor: 333094
  });

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        let change = Math.floor(Math.random() * 5) - 2;
        let newOnline = prev.online + change;
        if (newOnline < 5) newOnline = 5;
        if (newOnline > 100) newOnline = 100;

        let newTodayViews = prev.todayViews;
        let newTotalViews = prev.totalViews;
        let newTodayVisitor = prev.todayVisitor;
        let newTotalVisitor = prev.totalVisitor;

        if (Math.random() > 0.7) {
          newTodayViews++;
          newTotalViews++;
          if (Math.random() > 0.8) {
            newTodayVisitor++;
            newTotalVisitor++;
          }
        }

        return {
          online: newOnline,
          todayViews: newTodayViews,
          todayVisitor: newTodayVisitor,
          totalViews: newTotalViews,
          totalVisitor: newTotalVisitor
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <i className="fas fa-building fa-2x" style={{ color: 'var(--accent-yellow)' }}></i>
            <div className="logo-text">
              <h1>PT ADI JOYO KUSUMO</h1>
              <span>EST. SOLUSI KEAMANAN JALAN TERPERCAYA</span>
            </div>
          </div>
          <p>Perusahaan konstruksi infrastruktur terpercaya sejak 2019 — membangun Indonesia dengan integritas, presisi, dan inovasi tanpa kompromi.</p>
          
          <div className="visitor-stats">
            <h4>JUMLAH PENGUNJUNG</h4>
            <div className="stat-row"><span>Online Visitor</span><span>{stats.online}</span></div>
            <div className="stat-row"><span>Today's Views</span><span>{formatNumber(stats.todayViews)}</span></div>
            <div className="stat-row"><span>Today's Visitor</span><span>{formatNumber(stats.todayVisitor)}</span></div>
            <div className="stat-row"><span>Total Views</span><span>{formatNumber(stats.totalViews)}</span></div>
            <div className="stat-row"><span>Total Visitor</span><span>{formatNumber(stats.totalVisitor)}</span></div>
          </div>
        </div>

        <div className="footer-map">
          <h3>Lokasi PT Adi Joyo Kusumo</h3>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4937680784656!2d112.6927701!3d-7.5155048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7df221b142d59%3A0x3d604ca040d185d9!2sPT.%20ADI%20JOYO%20KUSUMO!5e0!3m2!1sid!2sid!4v1713168000000!5m2!1sid!2sid" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 PT Adi Joyo Kusumo. Hak Cipta Dilindungi.</p>
        <div className="footer-links">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
          <a href="#">Sitemap</a>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/6287713490297?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20PT%20Adi%20Joyo%20Kusumo..." 
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          right: '30px', 
          background: '#25d366', 
          color: 'white', 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '2rem', 
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)', 
          zIndex: 999, 
          transition: 'transform 0.3s' 
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
}
