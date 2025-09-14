import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-shape"></div>
            </div>
            <span className="logo-text">JockSoft</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          </nav>

          <div className="header-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={`Trocar para tema ${isDark ? 'claro' : 'escuro'}`}
              title={`Trocar para tema ${isDark ? 'claro' : 'escuro'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="btn btn-ghost">
              Falar com vendas
            </a>
            <a href="#contact" className="btn btn-primary">
              Calculadora de preço
              <ArrowRight size={16} />
            </a>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;