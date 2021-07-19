import React from "react";
import RandomCocktail from './../components/RandomCocktail';

export default function Home({setOpen}) {
  return (
    <main>
      <h2 className="section-title">Для вибору коктейлю скористайтесь пошуком бо фільтром</h2>
      <RandomCocktail setOpen={setOpen} />
    </main>
  );
}