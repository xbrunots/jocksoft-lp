import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Smartphone, Brain, Zap, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ativar animações após um pequeno delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'hero-content-visible' : ''}`}>
          <div className="hero-badge" style={{ '--delay': '0.2s' }}>
            <Zap size={16} />
            <span>+15 anos no mercado</span>
          </div>
          
          <h1 className="hero-title" style={{ '--delay': '0.4s' }}>
            Especialistas em <span className="text-gradient">Web</span>
            <br /><span className="text-gradient">Mobile</span> e IA
          </h1>
          
          <p className="hero-description" style={{ '--delay': '0.6s' }}>
            Somos uma consultoria e software house especializada em desenvolvimento 
            mobile, web e soluções de inteligência artificial. Criamos produtos que impulsionam 
            o crescimento do seu negócio.
          </p>
          
          <div className="hero-actions" style={{ '--delay': '0.8s' }}>
            <a href="#contact" className="btn btn-primary btn-large">
               Calculadora de projeto
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'hero-visual-visible' : ''}`} style={{ '--delay': '1.8s' }}>
          <div className="hero-cards">
            <div className={`hero-card card-mobile ${isVisible ? 'card-visible' : ''}`} style={{ '--delay': '2.0s' }}>
              <div className="card-header">
                <Smartphone size={20} />
                <span>Mobile Development</span>
              </div>
              <div className="card-content">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
                <div className="card-stats">
                  <span>Flutter</span>
                  <span>85%</span>
                </div>
              </div>
            </div>
            
            <div className={`hero-card card-ai ${isVisible ? 'card-visible' : ''}`} style={{ '--delay': '2.2s' }}>
              <div className="card-header">
                <Brain size={20} />
                <span>AI Solutions</span>
              </div>
              <div className="card-content">
                <div className="ai-nodes">
                  <div className="node active"></div>
                  <div className="node"></div>
                  <div className="node active"></div>
                  <div className="node"></div>
                </div>
                <div className="card-stats">
                  <span>Python</span>
                  <span>Active</span>
                </div>
              </div>
            </div>
            
            <div className={`hero-card card-squad ${isVisible ? 'card-visible' : ''}`} style={{ '--delay': '2.4s' }}>
              <div className="card-header">
                <Users size={20} />
                <span>Squad as a Service</span>
              </div>
              <div className="card-content">
                <div className="team-members">
                  <div className="member active"></div>
                  <div className="member active"></div>
                  <div className="member"></div>
                  <div className="member active"></div>
                </div>
                <div className="card-stats">
                  <span>Team</span>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;