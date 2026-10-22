import './About.css';

/* SVG icons for value cards — inline, monochrome, sized via CSS */
const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);
const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l1.71 1.71"/>
    <path d="m2 2 20 20"/><path d="M8.35 8.35 6 11l2 2a1 1 0 1 0 3-3"/>
  </svg>
);

const TIMELINE = [
  {
    year: '2025 – Actualidad',
    title: 'Desarrollador Freelance',
    company: 'Proyectos independientes',
    description: 'Creación de soluciones web a medida para negocios.',
  },
  {
    year: 'Febrero-2025 – Agosto-2025',
    title: 'Desarrollador FrontEnd',
    company: 'Ingeniería Sistemas y Servicios E.U',
    description: 'Desarrollo de interfaces web responsivas y funcionalidades frontend, trabajando en la implementación y mejora de soluciones digitales según los requerimientos de la empresa.',
  },
];

const VALUES = [
  { icon: <IconTarget />, title: 'Orientado a resultados', desc: 'Entrego soluciones que generan impacto real.' },
  { icon: <IconSearch />,  title: 'Atención al detalle',   desc: 'El 1% extra marca la diferencia entre bueno y excelente.' },
  { icon: <IconRocket />,  title: 'Aprendizaje continuo',  desc: 'Me mantengo al día con las últimas tecnologías.' },
  { icon: <IconHandshake />, title: 'Trabajo en equipo',  desc: 'Creo que los mejores resultados nacen de la colaboración.' },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Quién soy</h2>
        <p className="section-subtitle">Desarrollador Frontend apasionado por crear soluciones digitales</p>

        <div className="about__grid">
          {/* Left: bio */}
          <div className="about__bio">
            <p className="about__text">
              Soy un desarrollador Frontend en formación, Tecnólogo en Desarrollo de Sistemas de Información y Software y estudiante de Ingeniería de Sistemas. 
              Me apasiona crear aplicaciones web modernas, funcionales y enfocadas en ofrecer una buena experiencia al usuario.
            </p>
            <p className="about__text">
              Mi stack principal incluye <strong>HTML</strong>, <strong>React</strong>,
              <strong> JavaScript</strong>, complementando con tecnologías como <strong>Bootstrap</strong>,<strong>Tailwind CSS</strong>  y bases de datos como <strong>MySQL</strong> y
              <strong> Supabase</strong>. Me gusta transformar ideas en soluciones funcionales y seguir aprendiendo nuevas tecnologías a través de cada proyecto.
            </p>

            <div className="about__values">
              {VALUES.map(({ icon, title, desc }) => (
                <div className="about__value-card" key={title}>
                  <span className="about__value-icon">{icon}</span>
                  <div>
                    <h4 className="about__value-title">{title}</h4>
                    <p className="about__value-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary about__cta">
              Trabajemos juntos
            </a>
          </div>

          {/* Right: timeline */}
          <div className="about__timeline">
            <h3 className="about__timeline-heading">Experiencia</h3>
            {TIMELINE.map(({ year, title, company, description }, i) => (
              <div className="about__timeline-item" key={i}>
                <div className="about__timeline-dot" aria-hidden="true" />
                <div className="about__timeline-content">
                  <span className="about__timeline-year">{year}</span>
                  <h4 className="about__timeline-title">{title}</h4>
                  <span className="about__timeline-company">{company}</span>
                  <p className="about__timeline-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
