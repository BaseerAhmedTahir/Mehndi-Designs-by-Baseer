import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LatestDesigns } from './components/LatestDesigns';
import { BlogSection } from './components/BlogSection';
import { PopularDesigns } from './components/PopularDesigns';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LatestDesigns />
        <BlogSection />
        <PopularDesigns />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;