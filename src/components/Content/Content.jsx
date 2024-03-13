import Styles from './Content.module.scss';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import TicTacToe from '../projects/TicTacToe/TicTacToe';
import Photos from '../projects/Photos/Photos';
import CurrencyConvertor from '../projects/CurrencyConvertor/CurrencyConvertor';
import Invitations from '../projects/Invitations/Invitations';
import Quiz from '../projects/Quiz/Quiz';
import Counter from '../projects/Counter/Counter';
import Modal from '../projects/Modal/Modal';

function Content() {
  return (
    <div className={Styles.Content}>
      <Routes>
        <Route path="TicTacToe" element={<TicTacToe />} />
        <Route path="Photos" element={<Photos />} />
        <Route path="CurrencyConvertor" element={<CurrencyConvertor />} />
        <Route path="Invitations" element={<Invitations />} />
        <Route path="Quiz" element={<Quiz />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="Modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default Content;