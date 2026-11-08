import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="lang-selector-container">
      <button
        className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
        onClick={() => toggleLanguage('pt')}
        aria-label="Mudar para Português"
      >
        <span className="lang-code">PT</span>
        <span className="lang-name">Português</span>
      </button>

      <span className="lang-divider">|</span>

      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => toggleLanguage('en')}
        aria-label="Switch to English"
      >
        <span className="lang-code">EN</span>
        <span className="lang-name">English</span>
      </button>
    </div>
  );
}