import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-grid"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <img src={logo} alt="JockSoft" className="footer-logo-image" />
              <span className="logo-text">JockSoft</span>
            </div>
            <p className="footer-description">
              Transformamos ideias em soluções digitais inovadoras. 
              Especialistas em desenvolvimento mobile e inteligência artificial.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link">
                <Github size={18} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-links">
              <li><a href="#services">Desenvolvimento Mobile</a></li>
              <li><a href="#services">Inteligência Artificial</a></li>
              <li><a href="#services">Desenvolvimento Web</a></li>
              <li><a href="#services">Consultoria Tech</a></li>
              <li><a href="#services">Automação de Processos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#portfolio">Cases</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreiras</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-description">
              Receba as últimas novidades sobre tecnologia e nossos projetos.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Seu email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 JockSoft. Todos os direitos reservados.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;