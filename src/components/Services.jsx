import React from 'react';
import { Smartphone, Users, Globe, Zap, Rocket, Plus } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Users size={48} />,
      title: 'Alocação de squads ágeis',
      description: 'Possui o roadmap do produto pronto? Contrate horas de desenvolvimento para coloca-lo no ar.',
      color: 'emerald'
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Aplicativos Mobile',
      description: 'De app para fintechs á aplicativos de mobilidade urbana, temos know-how em diversos tipos de aplicativos.',
      color: 'blue'
    },
    {
      icon: <Zap size={48} />,
      title: 'IA',
      description: 'Desenvolvimento de agentes de IA inteligentes e MCP servers para automação avançada e integração de sistemas.',
      color: 'purple'
    },
    {
      icon: <Globe size={48} />,
      title: 'Aplicações Web',
      description: 'Desenvolvimento de aplicações web modernas, escaláveis e responsivas para atender às necessidades do seu negócio.',
      color: 'indigo'
    },
    {
      icon: <Rocket size={48} />,
      title: 'Venture Builder',
      description: 'Transformamos suas ideias em negócios escaláveis. Da validação ao lançamento, construímos startups do zero.',
      color: 'red'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Nossos serviços
          </h2>
          <p className="section-description">
            Da contratação de horas de desenvolvimento à uma consultoria completa.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card service-${service.color}`}>
              <div className="service-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
          
          {/* Item especial com botão */}
          <div className="service-card service-add-button">
            <div className="service-add-content">
              <div className="service-add-icon">
                <Plus size={48} />
              </div>
              <h3 className="service-add-title">Tem uma ideia diferente?</h3>
              <p className="service-add-description">
                Vamos conversar sobre seu projeto e encontrar a solução ideal para suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;