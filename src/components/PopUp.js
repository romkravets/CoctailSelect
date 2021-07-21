import React from 'react';
import Cart from './Cart';
const PopUp = ({toggleCloseModal, children, hendlerBy}) => {

    return (
       <>
         <div className="modalOverlay" onClick={() => toggleCloseModal()} />
         <div className="modalWrap">
            <div className="modal">
               <div className="btn-close" onClick={() => toggleCloseModal()}>
                  <i className="fa fa-times" aria-hidden="true"></i>
               </div>
                  <Cart  hendlerBy={hendlerBy} />
               {children}
            </div>
         </div> 
      </>
    );
}

export default PopUp;
