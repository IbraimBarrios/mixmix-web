import { Box, Chip, Stack, Typography } from "@mui/material";
import SquareImage from "../../components/SquareImage";
import { useEffect, useMemo } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1 } from "../../utils/constants";
import { useParams } from "react-router";
import type { Drink } from "../../types/drink";
import EmptyResultsMessage from "../../components/EmptyResultsMessage";
import RequestErrorMessage from "../../components/RequestErrorMessage";

type DrinkResponse = {
  drinks: Drink[];
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
