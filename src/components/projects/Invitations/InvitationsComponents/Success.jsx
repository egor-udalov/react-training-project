import React from 'react';
import Styles from'../Invitations.module.scss';

export const Success = ({ count }) => {
  return (
    <div className={Styles.success_block}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className={Styles.send_invite_btn}>Назад</button>
    </div>
  );
};
