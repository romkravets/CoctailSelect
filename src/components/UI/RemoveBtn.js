import React, {useContext } from 'react';
import listContext from '../../list_context';

export const RemoveButton = (props) => {

  const state = useContext(listContext);

  return(
   <button onClick={()=>state.removePd(state.cart.indexOf(props.item))}>
      x
   </button>
  )
}
