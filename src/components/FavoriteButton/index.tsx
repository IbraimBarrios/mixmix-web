import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFavoriteDrink from "../../hooks/useFavoriteDrinks";

type FavoriteButtonProps = {
  id: string;
};

const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const { isFavoriteDrink, toggleFavoriteDrink } = useFavoriteDrink(id);

  const handleFavoriteClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    toggleFavoriteDrink();
  };

  return (
    <>
      <IconButton
        aria-label="favorite"
        size="small"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          color: isFavoriteDrink ? "red" : "black",
        }}
        onClick={handleFavoriteClick}
      >
        {isFavoriteDrink ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </>
  );
};

export default FavoriteButton;
