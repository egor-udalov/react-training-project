import Styles from './Sidebar.module.scss';
import React from 'react';
import { NavLink } from "react-router-dom";

function Sidebar() {
  const setActive = ({isActive}) => isActive ? `${Styles.active_link}` : '';
  return (
    <div className={Styles.Sidebar}>
        <ul>
          <li><NavLink to="Photos" className={setActive}>Photos</NavLink></li>
          <li><NavLink to="CurrencyConvertor" className={setActive}>CurrencyConvertor</NavLink></li>
          <li><NavLink to="Invitations" className={setActive}>Invitations</NavLink></li>
          <li><NavLink to="Quiz" className={setActive}>Quiz</NavLink></li>
          <li><NavLink to="Counter" className={setActive}>Counter</NavLink></li>
          <li><NavLink to="Modal" className={setActive}>Modal</NavLink></li>
        </ul>
    </div>
  );
}

export default Sidebar;