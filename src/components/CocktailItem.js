import React from "react";
import { AddBtn } from './UI/AddBtn';
import DetailesBtn from './UI/DetailesBtn';

export default function CocktailItem({item, setOpen}) {
  const {id, name, image, glass, info} = item;
    return (
      <article className="cocktail" key={id}>
          <div className="img-container">
            <img src={image} alt={name} />
          </div>
          <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <div className="btn-block">
            <DetailesBtn item={id}/>
            <AddBtn item={item} setOpen={setOpen}/>
            </div>
          </div>
      </article>
    )
}
