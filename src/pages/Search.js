import React from "react";
import CocktailsList from "../components/CocktailList";

export default function Search({loading, cocktails}) {
  return (
    <section class="section search-section">
      {loading ? <CocktailsList loading={loading} cocktails={cocktails}/> :
      <h3 className="section-title">Для вибору коктейлю скористайтесь пошуком бо фільтром</h3> }
    </section>
  );
}
