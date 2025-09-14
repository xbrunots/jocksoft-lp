import React from 'react';
import { ArrowRight, Play, Smartphone, Brain, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} />
            <span>Especialistas em Web, Mobile & IA</span>
          </div>
          
          <h1 className="hero-title">
            Transformamos suas <span className="text-gradient">ideias</span> em 
            <br />produtos digitais <span className="text-gradient">inovadores</span>
          </h1>
          
          <p className="hero-description">
            Somos uma consultoria e fábrica de software especializada em desenvolvimento 
            mobile, web e soluções de inteligência artificial. Criamos produtos que impulsionam 
            o crescimento do seu negócio.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-large">
               Calculadora de preço
              <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary btn-large">
              <Play size={18} />
              Ver demonstração
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Apps Mobile</div>
            </div>
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Projetos IA</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Clientes</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-cards">
            <div className="hero-card card-mobile">
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
            
            <div className="hero-card card-ai">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;