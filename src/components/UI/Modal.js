import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isOpen, content}) => isOpen && ReactDOM.createPortal(  
   <div className="modal">
         <div className="modal-wrap">
            <div className="modal-content">
              {content}
            </div>
      </div>
   </div>,
      document.getElementById('modal'),
);

export default Modal;
