import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isOpen}) => isOpen && ReactDOM.createPortal(  
   <div className="modal">
         <div className="modal-wrap">
            <div className="modal-content">
               Коктейль додано до кошика! <br/>
               Продовжуємо!
            </div>
      </div>
   </div>,
      document.getElementById('modal'),
);

export default Modal;
