import React from 'react';

export default function Services() {
  const services = [
    {
      icon: 'fa-road',
      title: 'Traffic Light ',
      desc: 'Pengadaan dan pemasangan Alat Pemberi Isyarat Lalu Lintas (APILL), Warning Light (WL), dan Pelican Crossing Traffic Light untuk keamanan jalan umum, daerah, hingga nasional.',
      tags: ['TRAFFIC LIGHT', 'APILL', 'WARNING LIGHT']
    },
    {
      icon: 'fa-traffic-light',
      title: 'Rambu - Rambu & Perlengkapan Jalan',
      desc: 'Pengadaan dan pemasangan berbagai jenis rambu-rambu lalu lintas, Rambu Pendahulu Petunjuk Jurusan (RPPJ), dan patok delineator sesuai standar spesifikasi kementerian.',
      tags: ['RAMBU JALAN', 'RPPJ', 'DELINEATOR']
    },
    {
      icon: 'fa-drafting-compass',
      title: 'Marka Jalan & Marka & Keamanan Jalan',
      desc: 'Pengecatan marka Layanan aplikator profesional untuk pengecatan marka jalan, pemasangan paku marka, pembuatan pembatas lajur, dan instalasi pagar pengaman jalan (guardrail)., pemasangan rambu lalu lintas, guardrail, dan paku jalan.',
      tags: ['MARKA', 'PAKU MARKA', 'GUARDRAIL']
    },
    {
      icon: 'fa-lightbulb',
      title: 'Penerangan Penerangan Jalan Umum (PJU)',
      desc: 'Pemasangan Pengadaan dan pemasangan Alat Penerangan Jalan (APJ) beserta kelengkapannya untuk memastikan visibilitas dan keamanan berkendara di malam hari. jalan dan warning light dengan teknologi LED hemat energi.',
      tags: ['LAMPU LAMPU PJU', 'LUMINER', 'APJ']
    },
    {
      icon: 'fa-hard-hat',
      title: 'Fabrikasi Tiang & Box Controller',
      desc: 'Proses manufaktur dan fabrikasi struktur baja untuk tiang APILL, tiang Warning Light, tiang PJU, tiang rambu, box aspek, hingga box controller.',
      tags: ['FABRIKASI', 'BOX ASPEK', 'KONSTRUKSI']
    },
    {
      icon: 'fa-tools',
      title: 'Software Development',
      desc: 'Pembuatan dan perakitan komponen internal berkualitas tinggi termasuk luminer jalan, controller untuk APILL/PJU, dan perakitan battery system.',
      tags: ['CONTROLLER', 'BATERAI', 'KELISTRIKAN']
    }
  ];

  return (
    <section id="layanan">
      <div className="section-title">
        <span className="badge">LAYANAN TERINTEGRASI</span>
        <h2><b>Lingkup Produksi & Lingkup Pekerjaan</b></h2>
        <p>Layanan terpadu sebagai produsen dan aplikator profesional untuk menghadirkan infrastruktur jalan berstandar tinggi dan inovatif</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon"><i className={`fas ${service.icon}`}></i></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
