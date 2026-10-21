import { useState } from 'react';
import './Contact.css';

const CONTACT_INFO = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'jg4140237@gmail.com',
    href: 'mailto:jg4140237@gmail.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/juandavidgomez',
    href: 'https://www.linkedin.com/in/juan-david-gomez-ariz-33a7891ab/',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/JuanDa-g',
    href: 'https://github.com/JuanDa-g',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Ubicación',
    value: 'Colombia 🇨🇴',
    href: null,
  },
];


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async send
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      {/* Background glow */}
      <div className="contact__bg-glow" aria-hidden="true" />

      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes un proyecto en mente? Me encantaría escucharte</p>

        <div className="contact__grid">
          {/* Info column */}
          <div className="contact__info">
            <h3 className="contact__info-heading">Trabajemos juntos</h3>
            <p className="contact__info-text">
              Estoy disponible para proyectos freelance, posiciones full-time y colaboraciones
              interesantes. No dudes en escribirme.
            </p>

            <div className="contact__items">
              {CONTACT_INFO.map(({ icon, label, value, href }) => (
                <div className="contact__item" key={label}>
                  <div className="contact__item-icon">{icon}</div>
                  <div>
                    <span className="contact__item-label">{label}</span>
                    {href
                      ? <a href={href} className="contact__item-value" target="_blank" rel="noopener noreferrer">{value}</a>
                      : <span className="contact__item-value">{value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Availability chip */}
            <div className="contact__availability">
              <span className="contact__availability-dot" aria-hidden="true" />
              Disponible para nuevas oportunidades
            </div>
          </div>

          {/* Form column */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject" className="contact__label">Asunto</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="contact__input"
                placeholder="¿Sobre qué quieres hablar?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              id="contact-submit-btn"
              className={`btn btn-primary contact__submit ${status === 'sending' ? 'loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              {status !== 'sending' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              )}
            </button>

            {status === 'success' && (
              <p className="contact__success" role="status">
                ✅ ¡Mensaje enviado! Te responderé pronto.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
