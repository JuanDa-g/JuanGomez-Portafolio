import { useState } from 'react';
import './Skills.css';

const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',       level: 92, icon: '⚛️' },
      { name: 'React',       level: 85, icon: '🟦' },
      { name: 'JavaScript',  level: 80, icon: '▲' },
      { name: 'CSS / SCSS',  level: 90, icon: '🎨' },
      { name: 'Tailwind',    level: 55, icon: '💨' },
      { name: 'Vite',        level: 75, icon: '⚡' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',     level: 65, icon: '🟩' },
      { name: 'Express',     level: 65, icon: '🚂' },
      { name: 'MySQL',       level: 80, icon: '🐘' },
      { name: 'PostgreSQL',  level: 75, icon: '🐘' },
      { name: 'Supabase',    level: 78, icon: '🍃' },
      { name: 'Python',      level: 65, icon: '🔷' },
      { name: 'REST APIs',   level: 90, icon: '🔌' },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: [
      { name: 'Git / GitHub',  level: 90, icon: '🐙' },
      { name: 'Postman',       level: 68, icon: '🐳' },
      { name: 'AWS',           level: 60, icon: '☁️' },
      { name: 'Figma',         level: 75, icon: '🖌️' },
      { name: 'NPM',           level: 72, icon: '🧪' },
      { name: 'CI/CD',         level: 65, icon: '🔄' },
      { name: 'PoweBI',        level: 65, icon: '🔄' },
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
        <p className="section-subtitle">Estas son algunas de las tecnologías y herramientas que he utilizado durante mi formación
          y en el desarrollo de mis proyectos.</p>

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

        {/* Skill bars */}
        <div className="skills__grid" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          {category.skills.map(({ name, level, icon }) => (
            <div className="skill-card" key={name}>
              <div className="skill-card__header">
                <span className="skill-card__icon">{icon}</span>
                <span className="skill-card__name">{name}</span>
                <span className="skill-card__level">{level}%</span>
              </div>
              <div className="skill-card__bar-bg" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
                <div
                  className="skill-card__bar"
                  style={{ '--skill-level': `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
