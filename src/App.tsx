/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services';
import Portfolio from './components/Portofolio.tsx';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Stats />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
