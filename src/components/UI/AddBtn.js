import React, {useEffect, useContext } from 'react';
import listContext from '../../list_context';

export function AddBtn({item, setOpen}) {

  useEffect( timeOutFunction, [setOpen]);

    function timeOutFunction() {
      const timeout = setTimeout(() => {
          setOpen(false);   
        }, 1000);
        return () => clearTimeout(timeout);
    };

    const stt = useContext(listContext);

    return(
      <button className="btn" onClick={()=> {
        stt.addNew(item);
        setOpen(true);
        timeOutFunction();
      }}>
        {stt.cart.indexOf(item.id) ? 'Додати' : 'Додати ще...'}
      </button>    
    )
  }