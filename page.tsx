
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Gallery />
      <Stats />
      <Footer />
    </div>
  );
}
