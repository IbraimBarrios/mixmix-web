import { FAVORITE_DRINKS_STORAGE_KEY } from "../utils/constants";

export const lowerCaseText = (text: string) => {
  return text.toLowerCase();
};

export const getFavoriteDrinks = () => {
  const storage = localStorage.getItem(FAVORITE_DRINKS_STORAGE_KEY);

  return storage ? JSON.parse(storage) : [];
};
