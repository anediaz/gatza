import React from "react";
import { NavLink } from "react-router-dom";
import './menu.css';

const Menu = ({ items }) => (
  <div className="menu">
    <ul className="list">
      {items.map((item, index) => (
        <div key={index} className="element">
          <NavLink to={item.path} activeClassName="is-active" exact>
            {item.text}
          </NavLink>
        </div>
      ))}
    </ul>
  </div>
);

export default Menu;
