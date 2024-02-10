import React from "react";
import { liburua } from "../data/data.json";

import './liburua.css';

const Liburua = () => (
  <div className="liburua">
    <a href={liburua.url} target="_blank" rel="noopener noreferrer">
      <img
        src={`${process.env.PUBLIC_URL}/${liburua.src}`}
        title={liburua.title}
        alt={liburua.alt}
        className="content-image"
      />
    </a>
  </div>
);
export default Liburua;
