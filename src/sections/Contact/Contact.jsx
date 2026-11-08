import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, GraduationCap, Mail } from 'lucide-react';
import { siYoutube } from 'simple-icons';
import './Contact.css';

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={siYoutube.path} />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();
  const contactData = t.contact;
  const footerData = t.footer;
  const socialLinks = [
    {
      label: contactData.email,
      value: 'guilhermenoe2020@gmail.com',
      href: 'mailto:guilhermenoe2020@gmail.com',
      icon: <Mail size={20} />,
    },
    {
      label: contactData.github,
      value: 'github.com/guilhermenoe2020-netizen',
      href: 'https://github.com/guilhermenoe2020-netizen',
      icon: <GithubIcon />,
      external: true,
    },
    {
      label: contactData.linkedin,
      value: 'linkedin.com/in/guilherme-noé-636a73336',
      href: 'https://www.linkedin.com/in/guilherme-no%C3%A9-636a73336/',
      icon: <LinkedinIcon />,
      external: true,
    },
    {
      label: contactData.youtube,
      value: 'youtube.com/@guiHUB',
      href: 'https://www.youtube.com/@guiHUB',
      icon: <YoutubeIcon />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-heading">
          <p className="section-level">{contactData.level}</p>
          <h2 className="section-title">{contactData.sectionTitle}</h2>
          <p className="section-subtitle">{contactData.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-column">
            <article className="contact-info-card contact-status-card">
              <p className="contact-card-kicker">
                <span className="status-dot" />
                01 · {contactData.statusLabel}
              </p>
              <h3>{contactData.statusTitle}</h3>
              <p>{contactData.statusDescription}</p>
            </article>

            <article className="contact-info-card contact-journey-card">
              <p className="contact-card-kicker">
                <GraduationCap size={15} />
                02 · {contactData.journeyLabel}
              </p>
              <h3>{contactData.journeyTitle}</h3>
              <p>{contactData.journeyDescription}</p>
            </article>
          </div>

          <article className="contact-links-panel">
            <div className="contact-links-heading">
              <span>03 · {contactData.linksLabel}</span>
              <span className="contact-links-mark" aria-hidden="true">↗</span>
            </div>
            <div className="contact-direct-links">
              {socialLinks.map(({ label, value, href, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  aria-label={`${label}: ${value}`}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <span className="social-link-icon">{icon}</span>
                  <span className="social-link-copy">
                    <span className="social-link-label">{label}</span>
                    <span className="social-link-value">{value}</span>
                  </span>
                  <ArrowUpRight className="social-link-arrow" size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        </div>

        <footer className="footer-hud">
          <p>&copy; {new Date().getFullYear()} GUILHERME NOÉ. {footerData.rights}</p>
          <span className="footer-status">{footerData.systemStatus}</span>
        </footer>
      </div>
    </section>
  );
}
