import React from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./UI/Spinner";
import CocktailItem from './CocktailItem'

export default function CocktailList({setOpen, cocktails, loading}) {
  
  const location = useLocation();

  if (loading) {
    return <Spinner/>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Use the search or filter to select a cocktail
      </h2>
    );
  }
  return (
    <section className="section search-section">
      <h3 className="section-title">Search result: {location.count} items</h3>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return (
            <CocktailItem item={item} setOpen={setOpen}/>
          )
        })}
      </div>
    </section>
  );
}
