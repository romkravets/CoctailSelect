import React from 'react';
import Spinner from './UI/Spinner';
import CocktailItem from './CocktailItem';
import { useFetchItems } from '../api/fatchHook';

const RandomCocktail = ({setOpen}) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const { loading, item } = useFetchItems(url); 
  
  if (loading) {
    return <Spinner/>;
  }
  if (!item) {
    return <h2 className="section-title">No cocktails on request</h2>;
  } else {
     return (
      <section className="section">
        <h3 className="section-title">Personal offer...</h3>
          <div className="cocktails-center">
            <CocktailItem item={item} setOpen={setOpen}/>
        </div>
    </section>
  );
  }
}

export default RandomCocktail;