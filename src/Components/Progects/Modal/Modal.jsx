import React from 'react';
import Styles from './Modal.module.scss';


const Modals = ({ open, setOpen, children }) => (
  <div className={`${Styles.overlay} ${Styles.animated} ${open ? `${Styles.show}` : ''}`}>
    <div className={Styles.modal}>
      <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
)

function Modal() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={Styles.Modal}>
        <button className={Styles.open_modal_btn} onClick={() => setOpen(true)}>✨ Открыть окно</button>
        <Modals open={open} setOpen={setOpen}>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </Modals>
    </div>
  );
}

export default Modal;
