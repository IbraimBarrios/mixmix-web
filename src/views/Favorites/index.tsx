import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import { getFavoriteDrinks } from "../../utils/utils";
import { API_BASE_V1 } from "../../utils/constants";
import type { Drink } from "../../types/drink";
import ResponsiveGrid from "../../components/ResponsiveGrid";
import DrinkCard from "../../components/DrinkCard";
import RequestErrorMessage from "../../components/RequestErrorMessage";
import EmptyResultsMessage from "../../components/EmptyResultsMessage";

const Favorites = () => {
  const navigate = useNavigate();

  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | unknown>();

  const handleDrinkClick = useCallback(
    (id: string) => {
      navigate(`/drink/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds = getFavoriteDrinks();

      if (favoriteIds.length === 0) {
        setDrinks([]);
        setLoading(false);
        return;
      }

      try {
        const responses = await Promise.all(
          favoriteIds.map((id: string) =>
            fetch(`${API_BASE_V1}/lookup.php?i=${id}`).then((res) => res.json())
          )
        );

        const allDrinks = responses
          .map((data) => data.drinks?.[0])
          .filter(Boolean);

        setDrinks(allDrinks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <Box>Cargando...</Box>;
  if (error)
    return <RequestErrorMessage text="Error al solicitar bebidas favoritas" />;

  return (
    <Box>
      <Box paddingBottom="1rem">
        <Typography variant="h6" fontWeight="bold">
          Favoritos
        </Typography>
      </Box>
      {drinks.length != 0 ? (
        <ResponsiveGrid
          items={drinks}
          perRow={{ xs: 2, sm: 8 / 3, md: 3 }}
          renderItem={(item) => (
            <DrinkCard
              id={item.idDrink}
              alt={item.strDrink}
              src={item.strDrinkThumb}
              name={item.strDrink}
              onDrinkClick={handleDrinkClick}
            />
          )}
        />
      ) : (
        <EmptyResultsMessage text="Sin favoritos guradados" />
      )}
    </Box>
  );
};

export default Favorites;
