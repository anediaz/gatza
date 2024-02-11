import React from 'react';
import './language-selector.css';
import { LocaleType } from '../services/constants';

interface LanguageSelectorProps {
  language?: string;
  handleLanguageClick: (language: LocaleType) => void;
}

export const LanguageSelector = ({ language = 'EU', handleLanguageClick }:LanguageSelectorProps) => {
  const getClassName = (key:string) => `element ${key === language ? 'is-active' : ''}`;
  return (
    <div className="language-selector" role="menuitem">
      <ul className="list">
        <div
          title="euskara"
          onClick={() => handleLanguageClick('EU')}
          className={getClassName('EU')}
          role="menuitem"
          onKeyDown={() => { }}
          tabIndex={0}
        >
          EU
        </div>
        <div
          title="castellano"
          onClick={() => handleLanguageClick('ES')}
          className={getClassName('ES')}
          role="menuitem"
          onKeyDown={() => { }}
          tabIndex={0}
        >
          ES
        </div>
        <div
          title="english"
          onClick={() => handleLanguageClick('EN')}
          className={getClassName('EN')}
          role="menuitem"
          onKeyDown={() => { }}
          tabIndex={0}
        >
          EN
        </div>
        <div
          title="français"
          onClick={() => handleLanguageClick('FR')}
          className={getClassName('FR')}
          role="menuitem"
          onKeyDown={() => { }}
          tabIndex={0}

        >
          FR
        </div>
        <div
          title="català"
          onClick={() => handleLanguageClick('CA')}
          className={getClassName('CA')}
          role="menuitem"
          onKeyDown={() => { }}
          tabIndex={0}
        >
          CA
        </div>
      </ul>
    </div>
  );
};
