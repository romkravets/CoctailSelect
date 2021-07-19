import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddBtn } from './UI/AddBtn';


export default function CocktailList({setOpen, cocktails, loading}) {
  
  const location = useLocation();

  if (loading) {
    return <h2 className="section-title">Завантажити...</h2>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Для вибору коктейлю скористайтесь пошуком! 
      </h2>
    );
  }
  return (
    <section className="section search-section">
      <h3 className="section-title">Результат пошуку: {location.count} елементів</h3>
      <div className="cocktails-center">
     
        {cocktails.map((item) => {
          return (
    <article className="cocktail" key={item.id}>
       <div className="img-container">
         <img src={item.image} alt={item.name} />
       </div>
       <div className="cocktail-footer">
         <h3>{item.name}</h3>
         <h4>{item.glass}</h4>
         <p>{item.info}</p>
        <div className="btn-block">
         <Link to={`/cocktail/${item.id}`} className="btn">
           Детальніше...
         </Link>
         <AddBtn item={item} setOpen={setOpen}/>
        </div>
      </div>
    </article>
          )
        })}
      </div>
    </section>
  );
}
