import { useLanguage } from '../../context/LanguageContext';
import StudyTerminal from '../../components/StudyTerminal';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-heading">
          <p className="section-level">{t.about.level}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className="about-content">
          <figure className="about-portrait">
            <img src="/guilherme-noe.png" alt={t.about.photoAlt} />
            <figcaption>
              <span>{t.about.profileLabel}</span>
              <span>{t.about.age}</span>
            </figcaption>
          </figure>

          <div className="about-text-block">
            <div className="about-biography">
              <p className="about-paragraph">{t.about.paragraph1}</p>
              <p className="about-paragraph">{t.about.paragraph2}</p>
              <p className="about-paragraph">{t.about.paragraph3}</p>
            </div>
          </div>
        </div>
        <StudyTerminal />
      </div>
    </section>
  );
}