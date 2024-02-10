import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import { info } from "../data/data";
import './info.css';

const Info = () => {
  const { more } = info;
  const [language, setLanguage] = useState("EU");
  const languageClickHandler = selectedLanguage =>
    setLanguage(selectedLanguage);
  return (
    <div className="info">
      <LanguageSelector
        language={language}
        handleLanguageClick={languageClickHandler}
      />

      <div className="content">
        <div className="text">
          {info[language].text.map((paragraph, key) => (
            <p key={`paragraph${key}`}>{paragraph}</p>
          ))}
        </div>

        <div className="contact">
          <div className="title">{info[language].contact.title}</div>
          <div className="line">
            <div>{more.name}</div>
            <div>{more.phone}</div>
          </div>
          <div className="line">
            <div>
              {info[language].contact.mail}:{" "}
              <a href={`mailto:${more.mail}`} target="_top">
                {more.mail}
              </a>
            </div>
            <div>
              <a href={more.site} target="_blank" rel="noopener noreferrer">
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
