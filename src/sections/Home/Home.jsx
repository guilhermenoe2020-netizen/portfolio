import { useLanguage } from '../../context/LanguageContext';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();

  const homeData = t?.home || {
    statusLabel: "STATUS",
    title: "Guilherme Noé",
    subtitle: "Desenvolvedor Full Stack · Estudante de ADS",
    experienceLabel: "XP",
    experienceValue: "Em busca do 1° estágio",
    locationLabel: "LOCALIZAÇÃO",
    locationValue: "Brasil",
    educationLabel: "FORMAÇÃO",
    educationValue: "Análise e Desenvolvimento de Sistemas",
    exploreBtn: "VER PROJETOS",
    internshipLabel: "Buscando estágio",
    mainStackLabel: "ESTUDOS ATUAIS · EM APRENDIZADO",
    mainStack: [
      { name: "Java", level: 3 },
      { name: "Spring Boot", level: 3 },
      { name: "MySQL", level: 2 },
      { name: "JavaScript", level: 2 },
    ],
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-card">
          <div className="home-intro">
            <h1 className="home-title">{homeData.title}</h1>
            <p className="home-eyebrow">{homeData.subtitle}</p>
            <div className="home-actions">
              <a href="#missions" className="home-cta-btn">
                {homeData.exploreBtn} <ArrowRight size={16} />
              </a>
              <a href="#about" className="home-about-link">
                {t.nav.about} <ArrowDownRight size={16} />
              </a>
            </div>
          </div>
          <div className="home-profile-panel">
              <figure className="home-profile-portrait">
                <img className="home-profile-photo" src="/guilherme-noe.png" alt={t.about.photoAlt} />
              </figure>
              <div className="home-profile-info">
                <div className="home-panel-heading">
                  <span className="status-dot" />
                  <span>{homeData.statusLabel}</span>
                  <strong>{homeData.internshipLabel}</strong>
                </div>
                <div className="home-core-stack">
                  <span>{homeData.mainStackLabel}</span>
                  <div className="home-skill-list">
                    {homeData.mainStack.map(({ name, level }) => (
                      <div className="home-skill-row" key={name}>
                        <strong>{name}</strong>
                        <span className="home-skill-meter" role="img" aria-label={`${name}: ${level} de 5, em aprendizado`}>
                          {Array.from({ length: 5 }, (_, index) => (
                            <i className={index < level ? 'filled' : ''} key={index} />
                          ))}
                        </span>
                        <small>{String(level).padStart(2, '0')}/05</small>
                      </div>
                    ))}
                  </div>
                </div>
                <dl className="home-profile-details">
                  <div>
                    <dt>{homeData.experienceLabel}</dt>
                    <dd>{homeData.experienceValue}</dd>
                  </div>
                  <div>
                    <dt>{homeData.locationLabel}</dt>
                    <dd>{homeData.locationValue}</dd>
                  </div>
                  <div>
                    <dt>{homeData.educationLabel}</dt>
                    <dd>{homeData.educationValue}</dd>
                  </div>
                </dl>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}