import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Konsultasi Anda telah terkirim. Tim kami akan menghubungi Anda dalam 1x24 jam.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h3>MULAI PROYEK</h3>
          <b><h2>Konsultasikan <span>Proyek Anda</span></h2></b>
          <p>Tim kami siap membantu Anda dari tahap konsultasi awal hingga eksekusi proyek di lapangan. Hubungi kami untuk solusi perlengkapan dan infrastruktur jalan terbaik.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div><strong>Lokasi</strong><p>Jl. Sumbermulyo RT. 12 RW. 02 Desa Wunut, Kec. Porong, Kab. Sidoarjo, Jawa Timur.</p></div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div><strong>Telepon</strong><p>+62 877 1349 0297 (Marketing) </p></div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div><strong>Email</strong><p>kusumoadijoyo95@gmail.com</p></div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/adijoyokusumo.office?igsh=MW42eDd3NmI5aGg4eg=="><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/share/1FBqsXVuZM/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/pt-adi-joyo-kusumo/"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div>
            <a href="https://wa.me/6287713490297?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20PT%20Adi%20Joyo%20Kusumo..."></a>
          </div>
        </div>
      </div>
    </section>
  );
}
