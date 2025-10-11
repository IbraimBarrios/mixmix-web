import { Box, Button, Stack, Typography } from "@mui/material";
import SquareImage from "../SquareImage";
import { SkeletonCocktailRandom } from "../../skeletons";
import EmptyResultsMessage from "../EmptyResultsMessage";
import RequestErrorMessage from "../RequestErrorMessage";
import type { Drink } from "../../types/drink";

type CocktailRandom = {
  drink: Drink | null;
  loading: boolean;
  error: Error | unknown;
  onDrinkClick: (id: string) => void;
};

const CocktailRandom = ({
  drink,
  loading,
  error,
  onDrinkClick,
}: CocktailRandom) => {
  const handleSeeDetailsClick = () => {
    if (drink) {
      onDrinkClick(drink.idDrink);
    }
  };

  if (loading) return <SkeletonCocktailRandom />;
  if (error)
    return <RequestErrorMessage text="Error de solicitud de cocktail" />;
  if (!drink)
    return <EmptyResultsMessage text="No se encontró ningún cóctel" />;

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, sm: 2 }}>
      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        <SquareImage
          id={drink.idDrink}
          alt={drink.strDrink}
          src={drink.strDrinkThumb}
          size={{ xs: 320, sm: 400, md: 400 }}
        />
      </Box>
      <Box flex={1}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" fontWeight="bold">
            {drink.strDrink}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {drink.strCategory}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {drink.strInstructionsES}
          </Typography>
          <Button
            onClick={handleSeeDetailsClick}
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              fontSize: 16,
            }}
          >
            Ver detalle
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CocktailRandom;
