import React from "react";
import RandomCocktail from './../components/RandomCocktail';

export default function Home({setOpen}) {
  return (
    <main>
      <h2 className="section-title">Use the search or filter to select a cocktail</h2>
      <RandomCocktail setOpen={setOpen} />
    </main>
  );
}