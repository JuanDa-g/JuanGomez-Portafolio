import { useState } from 'react';
import './Projects.css';

const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Perfumeria SG',
    category: 'fullstack',
    description: 'Sistema web de gestión para perfumería desarrollado con React y Supabase, que permite administrar inventario, registrar ventas y controlar recargas de perfumes por mililitros, con actualización automática del stock e historial de movimientos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: '#6366f1',
    image: '/images/projects/perfumeria-sg.png',
    link: 'https://github.com/JuanDa-g/Perfumeria-sg',
    github: 'https://github.com/JuanDa-g/Perfumeria-sg',
  },
  {
    id: 2,
    title: 'BusGo',
    category: 'frontend',
    description: 'Plataforma web desarrollada con React y CSS para consultar rutas, horarios y precios de viajes en Colombia, seleccionar asientos en un mapa interactivo y realizar reservas de hasta 4 asientos.',
    tags: ['React', 'JavaScript', 'Supabase (PostgreSQL)', 'CSS'],
    color: '#06b6d4',
    image: '/images/projects/busgo.png',
    link: 'https://bus-go-nine.vercel.app/',
    github: 'https://github.com/JuanDa-g/BusGo',
  },
  {
    id: 3,
    title: 'Jurinmcoms',
    category: 'frontend',
    description: 'Web informativa sobre JURINMCONS Y Sistema para publicar propiedades',
    tags: ['HTML', 'CSS', 'JavaScript', 'ImgBB', 'FireBase'],
    color: '#f59e0b',
    image: '/images/projects/jurinmcons.png',
    link: 'https://jurinmcons.netlify.app/',
    github: 'https://github.com/JuanDa-g/JURINMCONS',
  },
  {
    id: 4,
    title: 'San Pedro Corre 5K/10K',
    category: 'fullstack',
    description: 'Sitio web de inscripcion para carrera 5k y 10k. con formulario de registro, almacenamiento de datos en Google Sheets, integración de pagos en línea mediante Wompi y envío de correos de confirmación con Brevo.',
    tags: ['HTML', 'JavaScript', 'WebSockets', 'Apps Script', 'Wompi','Brevo'],
    color: '#10b981',
    image: '/images/projects/san-pedro-corre.png',
    link: 'https://corresanpedro.vercel.app/',
    github: 'https://github.com/JuanDa-g/corresanpedro',
  },
  {
    id: 5,
    title: 'Sistemas de Reservas',
    category: 'frontend',
    description: 'Sistemas de Reservas, formulario, diferentes planes, web responsiva y dinamica, consumiendo una API REST.',
    tags: ['HTML', 'JavaScript','API REST','CSS', 'Figma','Postman'],
    color: '#ec4899',
    emoji: '🗓️',
    link: 'https://github.com/JuanDa-g/Sistemas-de-Reservas',
    github: 'https://github.com/JuanDa-g/Sistemas-de-Reservas',
  },
  {
    id: 6,
    title: 'Backend-BusGo',
    category: 'backend',
    description: 'API REST desarrollada con Node.js y Express, integrada con Supabase (PostgreSQL) para gestionar los datos y con Groq para incorporar un chatbot con inteligencia artificial capaz de consultar rutas y viajes disponibles.',
    tags: ['Node.js', 'Express', 'Supabase (PostgreSQL)', 'Groq (IA)'],
    color: '#6366f1',
    emoji: '⚙️',
    link: 'https://github.com/JuanDa-g/backend-buses',
    github: 'https://github.com/JuanDa-g/backend-buses',
  },
];


const FILTERS = [
  { id: 'all',      label: 'Todos' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend',  label: 'Backend' },
  { id: 'fullstack',label: 'Full Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">Una selección de trabajos que reflejan mi pasión y habilidades</p>

        {/* Filters */}
        <div className="projects__filters" role="group" aria-label="Filtrar proyectos">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              className={`projects__filter ${activeFilter === id ? 'active' : ''}`}
              onClick={() => setActiveFilter(id)}
              aria-pressed={activeFilter === id}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, description, tags, color, emoji, image, link, github } = project;
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card" style={{ '--card-accent': color }}>

      {/* Image banner (for projects with image) */}
      {image && (
        <div className="project-card__image-wrap">
          {!imgError ? (
            <img
              src={image}
              alt={`Captura de ${title}`}
              className="project-card__image"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="project-card__image-placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Agrega imagen en<br /><code>{image}</code></span>
            </div>
          )}
        </div>
      )}

      {/* Header row with emoji (for cards without image) + links */}
      <div className="project-card__top">
        {emoji && !image && (
          <span className="project-card__emoji">{emoji}</span>
        )}
        <div className={`project-card__links ${!emoji || image ? 'project-card__links--right' : ''}`}>
          <a href={github} className="project-card__icon-link" aria-label="Ver en GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href={link} className="project-card__icon-link" aria-label="Ver demo en vivo" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      <div className="project-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>

      <div className="project-card__glow" aria-hidden="true" />
    </article>
  );
}
