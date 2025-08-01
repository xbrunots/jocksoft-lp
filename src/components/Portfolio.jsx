import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Brain, Globe, ArrowRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinanceApp Mobile',
      category: 'Mobile',
      icon: <Smartphone size={20} />,
      description: 'App de gestão financeira pessoal com IA para análise de gastos e recomendações inteligentes.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'TensorFlow', 'MongoDB'],
      metrics: { users: '10K+', rating: '4.8', downloads: '50K+' }
    },
    {
      title: 'ChatBot Inteligente',
      category: 'IA',
      icon: <Brain size={20} />,
      description: 'Sistema de atendimento automatizado com processamento de linguagem natural avançado.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
      metrics: { accuracy: '95%', response: '< 1s', languages: '12' }
    },
    {
      title: 'E-commerce Platform',
      category: 'Web',
      icon: <Globe size={20} />,
      description: 'Plataforma completa de e-commerce com painel administrativo e sistema de pagamentos.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'Vercel'],
      metrics: { conversion: '12%', uptime: '99.9%', speed: '< 2s' }
    },
    {
      title: 'Delivery App',
      category: 'Mobile',
      icon: <Smartphone size={20} />,
      description: 'Aplicativo de delivery com rastreamento em tempo real e sistema de avaliações.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
      metrics: { orders: '1M+', drivers: '5K+', cities: '50+' }
    },
    {
      title: 'Análise Preditiva',
      category: 'IA',
      icon: <Brain size={20} />,
      description: 'Sistema de análise preditiva para otimização de estoque e previsão de vendas.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Docker'],
      metrics: { accuracy: '92%', savings: '30%', efficiency: '+40%' }
    },
    {
      title: 'Corporate Website',
      category: 'Web',
      icon: <Globe size={20} />,
      description: 'Website corporativo responsivo com CMS personalizado e otimização SEO avançada.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Gatsby', 'Contentful', 'Netlify'],
      metrics: { performance: '98', seo: '100', accessibility: '95' }
    }
  ];

  const categories = ['Todos', 'Mobile', 'IA', 'Web'];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Globe size={16} />
            <span>Nosso Portfolio</span>
          </div>
          <h2 className="section-title">
            Projetos que <span className="text-gradient">transformam</span> negócios
          </h2>
          <p className="section-description">
            Conheça alguns dos projetos inovadores que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button className="action-btn">
                      <ExternalLink size={18} />
                    </button>
                    <button className="action-btn">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-header">
                  <div className="portfolio-category">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-metrics">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
                
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="portfolio-action">
                  <span>Ver detalhes</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;