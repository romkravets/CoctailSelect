import {useState, useEffect} from 'react';

export const useFetchItems = (url) => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
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
                  ingredients
                };
                setItem(newCocktail);
                setLoading(false);
            }
        };
      fetchData();
    }, [url]);

  return { loading, item };
};