import Styles from './Sidebar.module.scss';
import React from 'react';
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className={Styles.Sidebar}>
        <ul>
          <li><NavLink to="Counter">Counter</NavLink></li>
          <li><NavLink to="Photos">Photos</NavLink></li>
          <li><NavLink to="CurrencyConvertor">CurrencyConvertor</NavLink></li>
          <li><NavLink to="Invitations">Invitations</NavLink></li>
          <li><NavLink to="Quiz">Quiz</NavLink></li>
          <li><NavLink to="Modal">Modal</NavLink></li>
        </ul>
    </div>
  );
}

export default Sidebar;