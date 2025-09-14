import React from 'react';
import { ExternalLink, Github, Smartphone, Brain, Globe, ArrowRight } from 'lucide-react';
import './Portfolio.css';

// Importando os logos reais das empresas
import capitaniLogo from '../assets/logos/capitani_logo.jpeg';
import mioVinciLogo from '../assets/logos/mio_vinci_partners_logo.jpeg';
import magnaLogo from '../assets/logos/magna_sistemas_logo.jpeg';
import governoSpLogo from '../assets/logos/governo.jpg';
import agrisolusLogo from '../assets/logos/agrisolus.webp';
import evolveTecLogo from '../assets/logos/evolve_tec_logo.jpeg';
import cimedLogo from '../assets/logos/cimed.png';
import caLogo from '../assets/logos/cea-logo.webp';
import xpLogo from '../assets/logos/xpinc.webp';
import itauLogo from '../assets/logos/itau.png';
import nttDataLogo from '../assets/logos/ntt-data.png';
import tinpetsLogo from '../assets/logos/tinpets.png';
import jockbaseLogo from '../assets/logos/jockbase.png';
import jockpayLogo from '../assets/logos/jockpay.png';
import iproLogo from '../assets/logos/ipro.svg';

const Portfolio = () => {
  const logos = [
    { src: capitaniLogo, alt: 'Capitani Group' },
    { src: mioVinciLogo, alt: 'Mio Vinci Partners' },
    { src: magnaLogo, alt: 'Magna Sistemas' },
    { src: governoSpLogo, alt: 'Governo de São Paulo' },
    { src: agrisolusLogo, alt: 'Agrisolus' },
    { src: evolveTecLogo, alt: 'Evolve Tec' },
    { src: cimedLogo, alt: 'Cimed' },
    { src: caLogo, alt: 'C&A' },
    { src: xpLogo, alt: 'XP Inc' },
    { src: itauLogo, alt: 'Itaú' },
    { src: nttDataLogo, alt: 'NTT Data' },
    { src: tinpetsLogo, alt: 'Tinpets' },
    { src: jockbaseLogo, alt: 'JockBase' },
    { src: jockpayLogo, alt: 'JockPay' },
    { src: iproLogo, alt: 'iPro' }
  ];

  // Duplica os logos para criar efeito infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Globe size={16} />
            <span>Nossos Cases</span>
          </div>
          <h2 className="section-title">
            Cases que <span className="text-gradient">transformam</span> negócios
          </h2>
          <p className="section-description">
            Conheça algumas das empresas que confiam em nossas soluções tecnológicas
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;