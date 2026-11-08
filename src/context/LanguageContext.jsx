import React, { createContext, useContext, useState, useEffect } from 'react';
import { pt } from '../data/pt';
import { en } from '../data/en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Verifica se já existe preferência salva no LocalStorage, caso contrário define 'pt' (Português)
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('guilherme_portfolio_lang');
    return savedLang === 'en' || savedLang === 'pt' ? savedLang : 'pt';
  });

  useEffect(() => {
    // Salva a preferência no LocalStorage sempre que o idioma mudar
    localStorage.setItem('guilherme_portfolio_lang', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = (lang) => {
    if (lang === 'pt' || lang === 'en') {
      setLanguage(lang);
    }
  };

  // Objeto de traduções atual com base no idioma selecionado
  const t = language === 'pt' ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook customizado para facilitar o uso do idioma nas seções
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
}