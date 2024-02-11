import React from 'react';
import { LIBURUA_DATA } from '../services/data';
import liburuaImg from './liburua.png';
import './liburua.css';

const Liburua = () => (
  <div className="liburua">
    <a href={LIBURUA_DATA.url} target="_blank" rel="noopener noreferrer">
      <img
        src={liburuaImg}
        title={LIBURUA_DATA.title}
        alt={LIBURUA_DATA.alt}
        className="content-image"
      />
    </a>
  </div>
);

export default Liburua;
