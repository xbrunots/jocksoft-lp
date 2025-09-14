import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Define tema escuro permanentemente
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;