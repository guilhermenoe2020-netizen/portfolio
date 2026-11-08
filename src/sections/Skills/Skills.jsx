import { useLanguage } from '../../context/LanguageContext';
import { Braces, Code2, Server, Terminal } from 'lucide-react';
import HudGlobe from '../../components/HudGlobe/HudGlobe';
import TechnologyIcon from '../../components/TechnologyIcon';
import './Skills.css';

export default function Skills() {
  const { t } = useLanguage();

  const getCategoryIcon = (categoryKey) => {
    switch (categoryKey) {
      case 'main':
        return <Server size={16} />;
      case 'web':
        return <Braces size={16} />;
      case 'tools':
        return <Terminal size={16} />;
      default:
        return <Code2 size={16} />;
    }
  };

  const skillsData = t?.skills || {
    sectionTitle: "STACK",
    subtitle: "Stack de tecnologias",
    description: "ferramentas que estudo e uso nos meus projetos",
    inventoryLabel: "MINHA STACK",
    globeTitle: "TECNOLOGIAS QUE JÁ EXPLOREI",
    globeInstruction: "Gire o globo e passe o mouse pelos ícones para ver cada tecnologia.",
    categories: {
      main: "Principal",
      web: "Front-end",
      tools: "Infra & IA",
    },
    items: [
      { name: "Java", category: "main" },
      { name: "Spring Boot", category: "main" },
      { name: "MySQL", category: "main" },
      { name: "JavaScript", category: "web" },
      { name: "React", category: "web" },
      { name: "HTML", category: "web" },
      { name: "CSS", category: "web" },
      { name: "Git", category: "tools" },
      { name: "Claude AI", category: "tools" },
      { name: "Vercel", category: "tools" },
      { name: "Supabase", category: "tools" },
    ],
    globeItems: [],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-heading">
          <p className="section-level">{skillsData.sectionTitle}</p>
          <h2 className="section-title">{skillsData.subtitle}</h2>
          <p className="section-subtitle">{skillsData.description}</p>
        </div>

        <div className="skills-showcase">
          <div className="skills-grid">
            {skillsData.categories &&
              Object.entries(skillsData.categories).map(([key, categoryTitle], index) => {
                const items = skillsData.items?.filter((skill) => skill.category === key) ?? [];
                if (!items.length) return null;

                return (
                  <article key={key} className={`skill-category-card${index === 0 ? ' skill-category-primary' : ''}`}>
                    <div className="category-header">
                      <span className="category-icon">{getCategoryIcon(key)}</span>
                      <h3 className="category-title">{categoryTitle}</h3>
                      <span className="category-count" aria-label={`${items.length} tecnologias`}>
                        {String(items.length).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="skill-items-list">
                      {items.map((skill) => (
                        <span key={skill.name} className="skill-item">
                          <span className="skill-icon">
                            <TechnologyIcon name={skill.name} />
                          </span>
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
          </div>

          <div className="skills-globe-panel">
            <h3 className="skills-globe-title">{skillsData.globeTitle}</h3>
            <HudGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}