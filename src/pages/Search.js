import React from "react";
import CocktailsList from "../components/CocktailList";

export default function Search({loading, cocktails}) {
  return (
    <section class="section search-section">
      {loading ? <CocktailsList loading={loading} cocktails={cocktails}/> :
      <h3 className="section-title">Use the filter search to select a cocktail</h3> }
    </section>
  );
}