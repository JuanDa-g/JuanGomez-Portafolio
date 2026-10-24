import { useState } from 'react';
import './Skills.css';
import {
  LogoHTML5, LogoReact, LogoJavaScript, LogoCSS3, LogoTailwind, LogoVite,
  LogoNodejs, LogoExpress, LogoMySQL, LogoPostgreSQL, LogoSupabase, LogoPython, LogoRestAPI,
  LogoGitHub, LogoPostman, LogoAWS, LogoFigma, LogoNPM, LogoCICD, LogoPowerBI,
} from './TechLogos.jsx';

const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',      level: 92, logo: <LogoHTML5 /> },
      { name: 'React',      level: 85, logo: <LogoReact /> },
      { name: 'JavaScript', level: 80, logo: <LogoJavaScript /> },
      { name: 'CSS / SCSS', level: 90, logo: <LogoCSS3 /> },
      { name: 'Tailwind',   level: 55, logo: <LogoTailwind /> },
      { name: 'Vite',       level: 75, logo: <LogoVite /> },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',   level: 65, logo: <LogoNodejs /> },
      { name: 'Express',   level: 65, logo: <LogoExpress /> },
      { name: 'MySQL',     level: 80, logo: <LogoMySQL /> },
      { name: 'PostgreSQL',level: 75, logo: <LogoPostgreSQL /> },
      { name: 'Supabase',  level: 78, logo: <LogoSupabase /> },
      { name: 'Python',    level: 65, logo: <LogoPython /> },
      { name: 'REST APIs', level: 90, logo: <LogoRestAPI /> },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: [
      { name: 'Git / GitHub', level: 90, logo: <LogoGitHub /> },
      { name: 'Postman',      level: 68, logo: <LogoPostman /> },
      { name: 'AWS',          level: 60, logo: <LogoAWS /> },
      { name: 'Figma',        level: 75, logo: <LogoFigma /> },
      { name: 'NPM',          level: 72, logo: <LogoNPM /> },
      { name: 'CI/CD',        level: 65, logo: <LogoCICD /> },
      { name: 'Power BI',     level: 65, logo: <LogoPowerBI /> },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const category = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Mi Stack</h2>
        <p className="section-subtitle">
          Estas son algunas de las tecnologías y herramientas que he utilizado durante mi formación
          y en el desarrollo de mis proyectos.
        </p>

        {/* Tabs */}
        <div className="skills__tabs" role="tablist" aria-label="Categorías de skills">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              className={`skills__tab ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
              id={`tab-${id}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="skills__grid" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          {category.skills.map(({ name, level, logo }) => (
            <div className="skill-card" key={name}>
              <div className="skill-card__header">
                <span className="skill-card__logo">{logo}</span>
                <span className="skill-card__name">{name}</span>
                <span className="skill-card__level">{level}%</span>
              </div>
              <div
                className="skill-card__bar-bg"
                role="progressbar"
                aria-valuenow={level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={name}
              >
                <div className="skill-card__bar" style={{ '--skill-level': `${level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
