import { ExternalLink, Lock, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './ProjectCard.css';

const GithubIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectCard({ project, index }) {
  const { t } = useLanguage();

  return (
    <div className={`project-card ${project.favorite ? 'favorite-border' : ''}`}>
      <div className="project-card-header">
        <span className="project-id">&gt; {t.missions.itemLabel} {String(index + 1).padStart(2, '0')}</span>
        {project.favorite && (
          <span className="favorite-badge">
            <Star size={12} /> {t.missions.favoriteTag}
          </span>
        )}
        {project.isPrivate && (
          <span className="private-badge">
            <Lock size={12} /> {t.missions.privateProject}
          </span>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-techs">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link demo-link"
            aria-label={`${t.missions.viewDemo}: ${project.title}`}
          >
            <ExternalLink size={14} /> {t.missions.viewDemo}
          </a>
        ) : null}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
            aria-label={`${t.missions.viewCode}: ${project.title}`}
          >
            <GithubIcon size={14} /> {t.missions.viewCode}
          </a>
        ) : null}

        {project.isPrivate && (
          <span className="project-link disabled-link">
            <Lock size={14} /> {t.missions.privateProject}
          </span>
        )}
      </div>
    </div>
  );
}