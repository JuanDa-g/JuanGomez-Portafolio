import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const PROFILE_IMG = '/images/profile.jpg';

const ROLES = [
  'Desarrollador de Software',
  'Desarrollador Frontend',
  'Desarrollador Web',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="hero section">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="hero__inner container">
        {/* Text side */}
        <div className="hero__text">
          {/* <span className="badge">✦ Disponible para proyectos</span> */}

          <h1 className="hero__title">
            Hola, soy{' '}
            <span className="hero__name gradient-text">Juan</span>
            <br />
            <span className="hero__role">
              {displayed}
              <span className="hero__cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          <p className="hero__description">
            Construyo aplicaciones web funcionales y modernas, combinando desarrollo frontend, lógica de negocio y bases de datos para convertir ideas en soluciones digitales.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              Ver proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">Contáctame</a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {[
              { value: '2+', label: 'Años de exp.' },
              { value: '3+', label: 'Proyectos' },
              { value: '4+', label: 'Clientes' },
            ].map(({ value, label }) => (
              <div className="hero__stat" key={label}>
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar side */}
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring" aria-hidden="true" />
          <div className="hero__avatar" aria-label="Foto de perfil">
            {!imgError ? (
              <img
                src={PROFILE_IMG}
                alt="Foto de perfil"
                className="hero__avatar-photo"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero__avatar-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Agrega tu foto en<br /><code>public/images/profile.jpg</code></span>
              </div>
            )}
          </div>
          {/* Tech pills floating */}
          <div className="hero__pill hero__pill--1">React</div>
          <div className="hero__pill hero__pill--2">Node.js</div>
          <div className="hero__pill hero__pill--3">JavaScript</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll" aria-label="Ir a la siguiente sección">
        <div className="hero__scroll-dot" />
      </a>
    </section>
  );
}
