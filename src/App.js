import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;