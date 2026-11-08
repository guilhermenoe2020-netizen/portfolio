import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Missions.css';

export default function Missions() {
  const { t } = useLanguage();

  return (
    <section id="missions" className="missions-section">
      <div className="missions-container">
        <div className="section-heading">
          <p className="section-level">{t.missions.level}</p>
          <h2 className="section-title">
            {t.missions.title} <span className="section-title-accent">{t.missions.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.missions.subtitle}</p>
        </div>

        <div className="missions-grid">
          {t.missions.items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          </div>
      </div>
    </section>
  );
}