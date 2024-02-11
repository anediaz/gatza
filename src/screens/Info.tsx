/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { LanguageSelector } from '../components/LanguageSelector';
import { INFO_DATA, MOREINFO_DATA } from '../services/data';
import './info.css';
import { LocaleType } from '../services/constants';

const Info = () => {
  const [language, setLanguage] = useState<LocaleType>('EU');
  const languageClickHandler = (selectedLanguage:LocaleType) => setLanguage(selectedLanguage);
  return (
    <div className="info">
      <LanguageSelector
        language={language}
        handleLanguageClick={languageClickHandler}
      />

      <div className="content">
        <div className="text">
          {INFO_DATA[language].text.map((paragraph, key) => (
            <p key={`paragraph${key}`}>{paragraph}</p>
          ))}
        </div>

        <div className="contact">
          <div className="title">{INFO_DATA[language].contact.title}</div>
          <div className="line">
            <div>{MOREINFO_DATA.name}</div>
            <div>{MOREINFO_DATA.phone}</div>
          </div>
          <div className="line">
            <div>
              {INFO_DATA[language].contact.mail}
              :
              {' '}
              <a href={`mailto:${MOREINFO_DATA.mail}`} target="_top">
                {MOREINFO_DATA.mail}
              </a>
            </div>
            <div>
              <a href={MOREINFO_DATA.site} target="_blank" rel="noopener noreferrer">
                Flickr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
