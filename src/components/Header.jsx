import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determinar seção ativa
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset para o header
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = 64; // altura do header
          const elementPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          
          setActiveSection(targetId);
          setIsMenuOpen(false);
        }
      }
    };

    // Adicionar event listeners para links de navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="JockSoft" className="logo-image" />
          </div>
          
          <nav 
            className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
            role="navigation"
            aria-label="Navegação principal"
          >
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Início
            </a>
            <a 
              href="#services" 
              className={activeSection === 'services' ? 'active' : ''}
              aria-current={activeSection === 'services' ? 'page' : undefined}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              aria-current={activeSection === 'about' ? 'page' : undefined}
            >
              Sobre
            </a>
            <a 
              href="#portfolio" 
              className={activeSection === 'portfolio' ? 'active' : ''}
              aria-current={activeSection === 'portfolio' ? 'page' : undefined}
            >
              Cases
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contato
            </a>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-ghost">
              Falar com vendas
            </a>
            <a href="https://budget.jocksoft.com/" className="btn btn-primary">
              Calculadora de projeto
              <ArrowRight size={16} />
            </a>
          </div>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;