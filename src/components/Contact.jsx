import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const services = [
    'Desenvolvimento Mobile',
    'Inteligência Artificial',
    'Desenvolvimento Web',
    'Consultoria Tech',
    'Automação de Processos',
    'Outro'
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={16} />
            <span>Entre em Contato</span>
          </div>
          <h2 className="section-title">
            Vamos transformar sua <span className="text-gradient">ideia</span> em realidade
          </h2>
          <p className="section-description">
            Pronto para começar seu próximo projeto? Nossa equipe está aqui para ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Fale Conosco</h3>
              <p className="info-description">
                Estamos aqui para ajudar você a encontrar a melhor solução tecnológica 
                para o seu negócio. Entre em contato e vamos começar seu projeto hoje mesmo.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={20} />
                  </div>
                  <div className="method-content">
                    <h4>Email</h4>
                    <p>contato@jocksoft.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={20} />
                  </div>
                  <div className="method-content">
                    <h4>Telefone</h4>
                    <p>+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="method-content">
                    <h4>Localização</h4>
                    <p>São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-cards">
              <div className="cta-card">
                <div className="cta-icon">
                  <MessageSquare size={24} />
                </div>
                <h4>WhatsApp</h4>
                <p>Resposta em até 1 hora</p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-small"
                >
                  Chamar agora
                </a>
              </div>

              <div className="cta-card">
                <div className="cta-icon">
                  <Calendar size={24} />
                </div>
                <h4>Reunião</h4>
                <p>Agende uma conversa</p>
                <button className="btn btn-secondary btn-small">
                  Agendar call
                </button>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Serviço de Interesse</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;