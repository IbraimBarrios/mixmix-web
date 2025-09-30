import { Box, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1 } from "../../utils/constants";
import { useNavigate, useParams } from "react-router";
import type { DrinkCategory } from "../../types/drink";
import TopBanner from "../../components/TopBanner";
import ResponsiveGrid from "../../components/ResponsiveGrid";
import DrinkCard from "../../components/DrinkCard";
import RequestErrorMessage from "../../components/RequestErrorMessage";
import EmptyResultsMessage from "../../components/EmptyResultsMessage";
import SkeletonCategory from "../../skeletons/SkeletonCategory";

type CategoryResponse = {
  drinks: DrinkCategory[];
};

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading, fetchData } =
    useCocktailData<CategoryResponse>();

  useEffect(() => {
    if (categoryName) {
      fetchData(
        `${API_BASE_V1}/filter.php?c=${encodeURIComponent(categoryName)}`
      );
    }
  }, []);

  const drinks = useMemo(() => data?.drinks || [], [data?.drinks]);

  const handleDrinkClick = useCallback(
    (id: string) => {
      navigate(`/drink/${id}`);
    },
    [navigate]
  );

  if (isLoading)
    return (
      <>
        <TopBanner title={categoryName || ""} />
        <SkeletonCategory />
      </>
    );

  if (error)
    return (
      <RequestErrorMessage
        text={`Error al solicitar la categoria ${categoryName}`}
      />
    );

  return (
    <Box>
      <TopBanner title={categoryName || ""} />
      {drinks.length > 0 ? (
        <>
          <Box marginTop="2rem" marginBottom="1rem">
            <Typography component="h1" variant="h6">
              {" "}
              Drinks
            </Typography>
          </Box>
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
        </>
      ) : (
        <EmptyResultsMessage text="No se encontraron drinks" />
      )}
    </Box>
  );
};

export default Category;
