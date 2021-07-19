import React, {useContext} from "react";
import listContext from '../list_context';
import {RemoveButton} from './UI/RemoveBtn';

function Cart({hendlerBy}) {

  const { cart } = useContext(listContext);

   const cartlist = cart.map((item,index) => {
      return (

        <div key={index} className="card card-modal">
            
            <article className="cocktail" key={item.id}>
                <div className="img-container">
                  <img src={item.image} alt={item.name} />
                </div>
               
                <div className="cocktail-footer">
                  <h3>{item.name}</h3>
                  <h4>{item.glass}</h4>
                </div>
                <div>
                  {'x'+item.count}
                  <RemoveButton item={item}/>
                </div>
            </article>
      </div>
      )
    })

    if(cart.length > 0) {

    return ( 

      <div className="page">
        <h1>Cart</h1>
        <div className="cocktails">
            {cartlist}
        </div>
        <div className="btn-cart-block">
         <button
            className="btn"
            onClick={hendlerBy}>
            Замовити
          </button>
        </div>

      </div>
      )

      } else{
        return <p>Не вибрано жодного коктейлю...</p>
      }
}

export default Cart;