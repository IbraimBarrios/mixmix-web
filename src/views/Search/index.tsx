import { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Typography } from "@mui/material";
import { API_BASE_V1 } from "../../utils/constants";
import type { Drink } from "../../types/drink";
import useCocktailData from "../../hooks/useCocktailsData";
import ResponsiveGrid from "../../components/ResponsiveGrid";
import DrinkCard from "../../components/DrinkCard";
import EmptyResultsMessage from "../../components/EmptyResultsMessage";
import RequestErrorMessage from "../../components/RequestErrorMessage";
import SkeletonSearch from "../../skeletons/SkeletonSearch";

type SearchResponse = {
  drinks: Drink[] | null | "no data found";
};

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("s");

  const { data, error, isLoading, fetchData } =
    useCocktailData<SearchResponse>();

  const handleDrinkClick = useCallback(
    (id: string) => {
      navigate(`/drink/${id}`);
    },
    [navigate]
  );

  const drinks = useMemo(() => data?.drinks, [data?.drinks]);

  useEffect(() => {
    fetchData(`${API_BASE_V1}/search.php?s=${searchTerm}`);
  }, [searchTerm]);

  if (isLoading) return <SkeletonSearch />;

  if (error) return <RequestErrorMessage />;

  if (!drinks || drinks === "no data found")
    return (
      <EmptyResultsMessage text="No se encontraron resultados en la busqueda" />
    );

  return (
    <>
      <Typography variant="h6" fontWeight="bold" paddingBottom="1rem">
        Explorar cócteles
      </Typography>
      {drinks.length > 0 ? (
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
        <EmptyResultsMessage
          text={`No se encontraron resultados al buscar: ${searchTerm}`}
        />
      )}
    </>
  );
};

export default Search;
