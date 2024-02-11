import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import { MENU_DATA } from '../services/data';

export const Menu = () => (
  <div className="menu">
    <ul className="list">
      {Object.values(MENU_DATA).map(({ text, path }) => (
        <div key={text} className="element">
          <NavLink to={path} activeClassName="is-active" exact>
            {text}
          </NavLink>
        </div>
      ))}
    </ul>
  </div>
);
