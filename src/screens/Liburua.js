import React from "react";
import { liburua } from "../data/data.json";
import liburuaImg from './liburua.png'
import './liburua.css';

const Liburua = () => (
  <div className="liburua">
    <a href={liburua.url} target="_blank" rel="noopener noreferrer">
      <img
        src={liburuaImg}
        title={liburua.title}
        alt={liburua.alt}
        className="content-image"
      />
    </a>
  </div>
);
export default Liburua;
