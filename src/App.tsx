import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Gallery from './components/Gallery';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionIndicator from './components/SectionIndicator';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <main>
        <Hero />
        <Studio />
        <Gallery />
        <History />
        <Contact />
      </main>
      <Footer />
      <SectionIndicator />
      <SocialIcons />
    </div>
  );
}

export default App;