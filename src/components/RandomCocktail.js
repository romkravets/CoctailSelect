import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {AddBtn} from './UI/AddBtn';

const RandomCocktail = ({setOpen}) => {

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

    useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strAlcoholic: info,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            id,
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setItem(newCocktail);
        } else {
          setItem(null);
        }
      } catch (error) {
      }
      setLoading(false);
    }
    getCocktail();
  }, [])

  if (loading) {
    return <h2 className="section-title">Завантаження...</h2>;
  }
  if (!item) {
    return <h2 className="section-title">Немає коктейлів за запитом</h2>;
  } else {
     return (
      <section className="section">
       <h3 className="section-title">Пеpсональна пропозиція...</h3>
        <div className="cocktails-center">
     
              <article className="cocktail random-coctail" key={item.id}>
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
      </div>
    </section>
  );
  }
}

export default RandomCocktail;
