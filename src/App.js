import './App.scss';
import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Content from './Components/Content/Content';
import Sidebar from './Components/Sidebar/Sidebar';
import Counter from './Components/Progects/Counter/Counter';
import CurrencyConvertor from './Components/Progects/CurrencyConvertor/CurrencyConvertor';
import Photos from './Components/Progects/Photos/Photos';
import Invitations from './Components/Progects/Invitations/Invitations';
import Quiz from './Components/Progects/Quiz/Quiz';
import Modal from './Components/Progects/Modal/Modal';


function App() {
  return (
    <div className="App">
      <div className="main_content">
        <div className="pogects">
          <Routes>
            <Route path="Counter" element={<Counter />} />
            <Route path="Photos" element={<Photos />} />
            <Route path="CurrencyConvertor" element={<CurrencyConvertor />} />
            <Route path="Invitations" element={<Invitations />} />
            <Route path="Quiz" element={<Quiz />} />
            <Route path="Modal" element={<Modal />} />
          </Routes>
        </div>
        <div className="right_sidebar">
          <div className="menu">
            <ul>
              <li><NavLink to="Counter">Counter</NavLink></li>
              <li><NavLink to="Photos">Photos</NavLink></li>
              <li><NavLink to="CurrencyConvertor">CurrencyConvertor</NavLink></li>
              <li><NavLink to="Invitations">Invitations</NavLink></li>
              <li><NavLink to="Quiz">Quiz</NavLink></li>
              <li><NavLink to="Modal">Modal</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
