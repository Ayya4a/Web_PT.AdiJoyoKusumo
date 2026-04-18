import React, { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apa saja produk PT Adi Joyo Kusumo?',
      a: 'PT. Adi Joyo Kusumo sebuah perusahaan yang bergerak dalam bidang jasa pelaksana konstruksi dan produksi perlengkapan alat keselamatan jalan, dengan produk antara lain : APILL (Alat Pemberi Isyarat Lalu Lintas), WL (Warning Light), PCTL (Pedestrian Crossing Traffic Light), Rambu Lalu lintas, Rambu Elektronik, RPPJ, Lampu dan Tiang PJU, Marka jalan, Paku jalan, Guardrail, Water Road Barrier, Traffic Cone, Cermin Tikung, Pembuatan Tiang, Box Aspek dan Box Controller.'
    },
    {
      q: 'Di daerah mana saja PT Adi Joyo Kusumo melayani proyek?',
      a: 'Kami melayani proyek di seluruh wilayah Indonesia sesuai permintaan klien.'
    },
    {
      q: 'Apakah PT Adi Joyo Kusumo mempunyai Workshop sendiri untuk produksi?',
      a: 'Ya, kami memiliki workshop khusus untuk memproduksi dengan standar kualitas tinggi, dikerjakan oleh tim profesional dan berpengalaman di bidangnya.'
    },
    {
      q: 'Apakah PT Adi Joyo Kusumo juga menangani pemasangan dan pemeliharaan?',
      a: 'Ya, Kami menangani langsung pemasangan dan pemeliharaan komponen yang dilakukan oleh tim teknis profesional kami.'
    },
    {
      q: 'Apakah PT Adi Joyo Kusumo melayani proyek skala besar?',
      a: 'Tentu. Kami telah berpengalaman menangani berbagai proyek berskala besar baik dari sektor swasta maupun pemerintah, dan mampu bekerja sama dengan berbagai subkontraktor sesuai kebutuhan proyek.'
    },
    {
      q: 'Apakah bisa mengajukan penawaran atau konsultasi proyek?',
      a: 'Tentu, Anda dapat menghubungi kami melalui: Email: kusumoadijoyo95@gmail.com, WhatsApp : Klik tombol konsultasi di halaman Kontak.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="section-title">
        <span className="badge">FAQ</span>
        <b><h2>Pertanyaan yang Sering Diajukan</h2></b>
        <p>Temukan jawaban atas pertanyaan umum seputar layanan dan proses kerja kami.</p>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.q}
              <i className="fas fa-plus"></i>
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="faq-cta">
        <p style={{ marginBottom: '1rem' }}>Masih memiliki pertanyaan spesifik?</p>
        <a href="#contact" className="btn-primary">Hubungi Tim Kami <i className="fas fa-arrow-right"></i></a>
      </div>
    </section>
  );
}
