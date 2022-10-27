import Styles from './Content.module.scss';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Counter from '../Progects/Counter/Counter';
import CurrencyConvertor from '../Progects/CurrencyConvertor/CurrencyConvertor';
import Photos from '../Progects/Photos/Photos';
import Invitations from '../Progects/Invitations/Invitations';
import Quiz from '../Progects/Quiz/Quiz';
import Modal from '../Progects/Modal/Modal';

function Content() {
  return (
    <div className={Styles.Content}>
      <Routes>
            <Route path="Counter" element={<Counter />} />
            <Route path="Photos" element={<Photos />} />
            <Route path="CurrencyConvertor" element={<CurrencyConvertor />} />
            <Route path="Invitations" element={<Invitations />} />
            <Route path="Quiz" element={<Quiz />} />
            <Route path="Modal" element={<Modal />} />
          </Routes>
    </div>
  );
}

export default Content;