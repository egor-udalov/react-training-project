import Styles from './Counter.module.scss';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className={Styles.Counter}>
      <div className={Styles.wrapper}>
        <div>
          <h2>Счетчик:</h2>
          <h1>{count}</h1>
          <button className={Styles.minus} onClick={onClickMinus}>- Минус</button>
          <button className={Styles.plus} onClick={onClickPlus}>Плюс +</button>
        </div>
      </div>

    </div>
  );
}

export default Counter;
