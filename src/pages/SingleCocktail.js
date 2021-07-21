import React from "react";
import { useParams } from "react-router-dom";
import { useFetchItems } from '../api/fatchHook';
import Spinner from '../components/UI/Spinner';
import { AddBtn } from '../components/UI/AddBtn';

export default function SingleCocktail({setOpen}) {
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { loading, item } = useFetchItems(url); 

  if (loading) {
    return <Spinner/>;
  }
  if (!item) {
    return <h2 className="section-title">No cocktails on request</h2>;
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
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Contain:</strong> {info}</p>
            <p><strong>Glass:</strong> {glass}</p>
            <p><strong>Instruction:</strong> {instructions}</p>
            <div>
              <strong>Ingredients:</strong> {" "}
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