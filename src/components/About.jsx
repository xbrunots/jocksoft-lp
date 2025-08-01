import React from 'react';
import { Award, Target, Users, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Award size={20} />,
      title: 'Excelência',
      description: 'Comprometidos com a qualidade e inovação em cada projeto'
    },
    {
      icon: <Target size={20} />,
      title: 'Foco no Cliente',
      description: 'Suas necessidades são nossa prioridade número um'
    },
    {
      icon: <Users size={20} />,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria para alcançar os melhores resultados'
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'Inovação',
      description: 'Sempre buscando as tecnologias mais avançadas do mercado'
    }
  ];

  const achievements = [
    { number: '5+', label: 'Anos de Experiência' },
    { number: '100+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '99%', label: 'Taxa de Sucesso' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-badge">
              <Users size={16} />
              <span>Sobre a JockSoft</span>
            </div>
            
            <h2 className="about-title">
              Transformando o futuro através da <span className="text-gradient">tecnologia</span>
            </h2>
            
            <p className="about-description">
              Somos uma consultoria e fábrica de software especializada em desenvolvimento 
              mobile e soluções de inteligência artificial. Com anos de experiência no 
              mercado, transformamos ideias em produtos digitais que geram resultados reais.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Equipe especializada em tecnologias de ponta</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Metodologias ágeis e entregas rápidas</span>
              </div>
              <div className="feature-item">
                <CheckCircle size={20} />
                <span>Suporte contínuo e manutenção</span>
              </div>
            </div>
            
            <div className="about-action">
              <a href="#contact" className="btn btn-primary">
                Conhecer nossa equipe
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{achievement.number}</div>
                  <div className="stat-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="values-section">
          <h3 className="values-title">Nossos Valores</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;