import './About.css';

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
  { icon: '🎯', title: 'Orientado a resultados', desc: 'Entrego soluciones que generan impacto real.' },
  { icon: '🔍', title: 'Atención al detalle', desc: 'El 1% extra marca la diferencia entre bueno y excelente.' },
  { icon: '🚀', title: 'Aprendizaje continuo', desc: 'Me mantengo al día con las últimas tecnologías.' },
  { icon: '🤝', title: 'Trabajo en equipo', desc: 'Creo que los mejores resultados nacen de la colaboración.' },
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
