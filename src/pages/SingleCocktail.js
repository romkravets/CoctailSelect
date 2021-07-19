import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { AddBtn } from '../components/UI/AddBtn';

export default function SingleCocktail({setOpen}) {

  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
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
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Завантаження...</h2>;
  }
  if (!item) {
    return <h2 className="section-title">Немає коктейлів за запитом</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = item;
    return (
      <section className="section-info cocktail-section">
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p><strong>Назва:</strong> {name}</p>
            <p><strong>Категорія:</strong> {category}</p>
            <p><strong>Інформація:</strong> {info}</p>
            <p><strong>Посуд:</strong> {glass}</p>
            <p><strong>Інструкція:</strong> {instructions}</p>
            <div>
              <strong>Інгредієнти:</strong> {" "}
              <ul>
              {ingredients.map((item, index) => {
                return item ? <li key={index}>{item}</li> : null;
              })}
              </ul>
            </div>
             <AddBtn item={item} setOpen={setOpen}/>
          </div>
        </div>
      </section>
    );
  }
}