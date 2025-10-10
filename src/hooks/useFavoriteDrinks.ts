import { useState } from "react";
import { FAVORITE_DRINKS_STORAGE_KEY } from "../utils/constants";

const getFavoriteDrinks = () => {
  const storage = localStorage.getItem(FAVORITE_DRINKS_STORAGE_KEY);

  return storage ? JSON.parse(storage) : [];
};

const checkIsFavoriteDrink = (idDrink: string) => {
  const favoriteDrinks = getFavoriteDrinks();

  return favoriteDrinks.includes(idDrink);
};

const useFavoriteDrink = (idDrink: string) => {
  const [isFavoriteDrink, setIsFavoriteDrink] = useState<boolean>(
    checkIsFavoriteDrink(idDrink)
  );

  const toggleFavoriteDrink = () => {
    const favoriteDrinks = getFavoriteDrinks();
    const drinkIndex = favoriteDrinks.indexOf(idDrink);

    if (drinkIndex !== -1) {
      favoriteDrinks.splice(drinkIndex, 1);
      setIsFavoriteDrink(false);
    } else {
      favoriteDrinks.push(idDrink);
      setIsFavoriteDrink(true);
    }

    localStorage.setItem(
      FAVORITE_DRINKS_STORAGE_KEY,
      JSON.stringify(favoriteDrinks)
    );
  };

  return {
    isFavoriteDrink,
    toggleFavoriteDrink,
  };
};

export default useFavoriteDrink;
