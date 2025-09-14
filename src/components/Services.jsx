import React from 'react';
import { Smartphone, Brain, Globe, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Smartphone size={24} />,
      title: 'Desenvolvimento Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com as melhores tecnologias do mercado.',
      features: ['Flutter', 'iOS & Android', 'UI/UX Design'],
      color: 'emerald'
    },
    {
      icon: <Brain size={24} />,
      title: 'Inteligência Artificial',
      description: 'Soluções de IA e Machine Learning para automatizar processos e gerar insights.',
      features: ['Machine Learning','Agentes' ,'MCP' ,'Deep Learning', 'NLP', 'Computer Vision'],
      color: 'blue'
    },
    {
      icon: <Globe size={24} />,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas, rápidas e responsivas com tecnologias de ponta.',
      features: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter Web'],
      color: 'purple'
    },
    {
      icon: <Zap size={24} />,
      title: 'Automação de Processos',
      description: 'Automatize tarefas repetitivas e otimize a produtividade da sua empresa.',
      features: ['RPA', 'APIs', 'Integração', 'Workflows'],
      color: 'yellow'
    },
    {
      icon: <Shield size={24} />,
      title: 'Segurança Digital',
      description: 'Proteja seus dados e sistemas com soluções de segurança avançadas.',
      features: ['Criptografia', 'Autenticação', 'Monitoramento', 'Compliance'],
      color: 'red'
    },
    {
      icon: <Users size={24} />,
      title: 'Consultoria Tech',
      description: 'Orientação estratégica para transformação digital e inovação tecnológica.',
      features: ['Estratégia', 'Arquitetura', 'Mentoria', 'Roadmap'],
      color: 'indigo'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Zap size={16} />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="section-title">
            Soluções completas em <span className="text-gradient">tecnologia</span>
          </h2>
          <p className="section-description">
            Oferecemos um portfólio completo de serviços para transformar sua visão em realidade digital
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card service-${service.color}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="service-action">
                <span>Saiba mais</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;