import React from "react";
import './language-selector.css';
const propTypes = {
  //language: React.PropTypes.string.isRequired,
  //handleLanguageClick: React.PropTypes.func.isRequired
};
const defaultProps = {
  language: "EU"
};

const LanguageSelector = ({ language, handleLanguageClick }) => {
  const getClassName = (key)=> `element ${key === language ? "is-active" : ""}`
  return (
    <div className="language-selector">
      <ul className="list">
        <div
          active={"EU" === language}
          title="euskara"
          onClick={() => handleLanguageClick("EU")}
          className={getClassName("EU")}
        >
          EU
        </div>
        <div
          title="castellano"
          onClick={() => handleLanguageClick("ES")}
          className={getClassName("ES")}
        >
          ES
        </div>
        <div
          title="english"
          onClick={() => handleLanguageClick("EN")}
          className={getClassName("EN")}

        >
          EN
        </div>
        <div
          title="français"
          onClick={() => handleLanguageClick("FR")}
          className={getClassName("FR")}

        >
          FR
        </div>
        <div
          title="català"
          onClick={() => handleLanguageClick("CA")}
          className={getClassName("CA")}
        >
          CA
        </div>
      </ul>
    </div>
  );
};

LanguageSelector.propTypes = propTypes;
LanguageSelector.defaultProps = defaultProps;

export default LanguageSelector;
