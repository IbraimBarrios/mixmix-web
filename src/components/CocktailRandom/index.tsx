import { Box, Button, Stack, Typography } from "@mui/material";
import SquareImage from "../SquareImage";
import type { Cocktail } from "../../types/cocktail";
import { SkeletonCocktailRandom } from "../../skeletons";
import EmptyResultsMessage from "../EmptyResultsMessage";

type CocktailRandom = {
  cocktail: Cocktail | null;
  loading: boolean;
  error: Error | unknown;
};

const CocktailRandom = ({ cocktail, loading, error }: CocktailRandom) => {
  if (loading) return <SkeletonCocktailRandom />;
  if (error) return <Typography color="error">Error al cargar</Typography>;
  if (!cocktail)
    return <EmptyResultsMessage text="No se encontró ningún cóctel" />;

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 4, sm: 2 }}>
      <Box flex={1}>
        <SquareImage
          alt={cocktail.strDrink}
          src={cocktail.strDrinkThumb}
          size={{ xs: 320, sm: 320, md: 400 }}
        />
      </Box>
      <Box flex={1}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" fontWeight="bold">
            {cocktail.strDrink}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {cocktail.strCategory}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {cocktail.strInstructionsES}
          </Typography>
          <Button
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
