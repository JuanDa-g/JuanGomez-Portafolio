import './Footer.css';

const SOCIALS = [
  {
    label: 'GitHub', href: 'https://github.com/JuanDa-g', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-david-gomez-ariz-33a7891ab/', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    )
  },
  {
    label: 'Twitter / X', href: 'https://twitter.com', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
];

const NAV = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            Juan<span className="footer__logo-accent">Dev</span>
            <span className="footer__logo-bracket">/&gt;</span>
          </a>
          <p className="footer__tagline">Construyendo el futuro, una línea de código a la vez.</p>
          <div className="footer__socials">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="footer__nav" aria-label="Footer nav">
          <h4 className="footer__nav-heading">Navegación</h4>
          <ul role="list">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="footer__nav-link">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="footer__cta">
          <h4 className="footer__cta-heading">¿Tienes un proyecto?</h4>
          <p className="footer__cta-text">Hablemos sobre cómo puedo ayudarte a construirlo.</p>
          <a href="mailto:juan@example.com" className="btn btn-primary">
            Envíame un correo
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          © {new Date().getFullYear()} Juan David Gomez Ariz - Desarrollador Web.
        </p>
        <p className="footer__made">
          Construido con <strong>React</strong> + <strong>Vite</strong>
        </p>
      </div>
    </footer>
  );
}
