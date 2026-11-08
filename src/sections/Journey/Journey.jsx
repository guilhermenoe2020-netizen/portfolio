import { useLanguage } from '../../context/LanguageContext';
import './Journey.css';

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        <div className="section-heading">
          <p className="section-level">{t.journey.level}</p>
          <h2 className="section-title">{t.journey.title}</h2>
          <p className="section-subtitle">{t.journey.subtitle}</p>
        </div>

        <div className="journey-grid">
          {t.journey.timeline.map((item, index) => (
            <article key={`${item.period}-${item.title}`} className="timeline-card">
              <div className="timeline-card-top">
                <span className="timeline-quest">{t.journey.questLabel} {String(index + 1).padStart(2, '0')}</span>
                <span className="timeline-period">{item.period}</span>
              </div>
              <h3 className="timeline-item-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-loot">
                <span>{t.journey.learningLabel}</span>
                <p>{item.skills}</p>
              </div>
            </article>
          ))}
          </div>
      </div>
    </section>
  );
}