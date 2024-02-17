import React from 'react';
import './language-selector.css';
import { LANGUAGES, LocaleType } from '../services/constants';

interface LanguageSelectorProps {
  language?: string;
  handleLanguageClick: (language: LocaleType) => void;
}

export const LanguageSelector = ({ language = 'EU', handleLanguageClick }:LanguageSelectorProps) => {
  const getClassName = (key:LocaleType) => `element ${key === language ? 'is-active' : ''}`;
  return (
    <div className="language-selector" role="menuitem">
      <ul className="list">
        {
          Object.entries(LANGUAGES).map(([locale, value]) => (
            <div
              title={value}
              onClick={() => handleLanguageClick(locale as LocaleType)}
              className={getClassName(locale as LocaleType)}
              role="menuitem"
              onKeyDown={() => { }}
              tabIndex={0}
            >
              {locale}
            </div>
          ))
}
      </ul>
    </div>
  );
};
