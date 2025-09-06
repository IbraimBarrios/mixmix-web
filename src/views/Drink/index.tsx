import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";
import SquareImage from "../../components/SquareImage";
import { useEffect, useMemo } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1, URL_IMAGES } from "../../utils/constants";
import { useParams } from "react-router";
import type { Drink } from "../../types/drink";
import EmptyResultsMessage from "../../components/EmptyResultsMessage";
import RequestErrorMessage from "../../components/RequestErrorMessage";
import { lowerCaseText } from "../../utils/utils";

type Ingredient = {
  measure: string;
  ingredient: string;
};

type DrinkResponse = {
  drinks: Drink[];
};

const getIngredients = (drink: Drink) => {
  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}` as keyof Drink];
    const measure = drink[`strMeasure${i}` as keyof Drink];

    if (ingredient) {
      ingredients.push({
        measure: measure ?? "",
        ingredient,
      });
    }
  }

  return ingredients;
};

const Drink = () => {
  const { drinkId } = useParams();
  const { data, isLoading, error, fetchData } =
    useCocktailData<DrinkResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/lookup.php?i=${drinkId}`);
  }, []);

  const drink = useMemo(() => data?.drinks[0] || null, [data?.drinks]);

  if (isLoading) return <Box>Cargando...</Box>;
  if (error) return <RequestErrorMessage text="Error al solicitar bebida " />;
  if (!drink)
    return <EmptyResultsMessage text="No se encontró ningúna bebida" />;

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
      <Box flex={1}>
        <Stack direction="column" spacing={1}>
          <Typography component="h1" variant="h4" fontWeight="bold">
            {drink?.strDrink}
          </Typography>
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="body2" color="text.secondary">
              {drink?.strAlcoholic === "Alcoholic"
                ? "Alcohólico"
                : "Sin alcohol"}
            </Typography>
            <Chip label={drink?.strCategory} sx={{ fontSize: "0.875rem" }} />
          </Stack>
          <Typography variant="h5">Ingredientes</Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {getIngredients(drink).map((item, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                  <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Avatar
                      alt={item.ingredient}
                      src={`${URL_IMAGES}/ingredients/${lowerCaseText(
                        item.ingredient
                      )}-medium.png`}
                    />
                    <Typography>
                      {item.measure} {item.ingredient}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Box>

      <Box flex={1}>
        <SquareImage
          alt={drink?.strDrink || "image"}
          src={drink?.strDrinkThumb || ""}
          size={{ xs: 320, sm: 320, md: 400 }}
        />
      </Box>
    </Box>
  );
};

export default Drink;
