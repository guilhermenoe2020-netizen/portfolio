import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { Menu, X } from 'lucide-react';
import { siGithub, siYoutube } from 'simple-icons';
import './Navigation.css';

const sectionHrefs = ['#home', '#about', '#missions', '#journey', '#skills', '#contact'];

function BrandIcon({ icon }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Navigation() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const activeSectionRef = useRef('home');
  const progressRef = useRef(null);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#missions', label: t.nav.missions },
    { href: '#journey', label: t.nav.journey },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    let frame = 0;
    const updateScrollState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
          : 0;
        progressRef.current?.style.setProperty('--scroll-progress', progress);

        const marker = window.scrollY + 110;
        const currentSection = [...sectionHrefs]
          .reverse()
          .find((href) => {
            const section = document.querySelector(href);
            return section && section.getBoundingClientRect().top + window.scrollY <= marker;
          });
        const nextSection = currentSection?.slice(1) ?? 'home';
        if (nextSection !== activeSectionRef.current) {
          activeSectionRef.current = nextSection;
          setActiveSection(nextSection);
        }
      });
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  return (
    <header className="nav-header">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Guilherme Noé<span className="nav-logo-dot">.</span>
        </a>

        <div className={`nav-links-wrapper ${isOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-social-links">
            <a href="https://github.com/guilhermenoe2020-netizen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BrandIcon icon={siGithub} />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-no%C3%A9-636a73336/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://www.youtube.com/@guiHUB" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <BrandIcon icon={siYoutube} />
            </a>
          </div>
          <div className="nav-lang-container">
            <LanguageSelector />
          </div>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t.ui.toggleNavigation}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <span className="nav-scroll-progress" aria-hidden="true" ref={progressRef} />
    </header>
  );
}