import { useEffect, useMemo, useCallback } from "react";
import { Box } from "@mui/material";
import CocktailRandom from "../../components/CocktailRandom";
import { API_BASE_V1 } from "../../utils/constants";
import useCocktailData from "../../hooks/useCocktailsData";
import Categories from "../../components/Categories";
import { useNavigate } from "react-router";
import type { Category } from "../../types/category";
import type { Drink } from "../../types/drink";

type DrinkResponse = {
  drinks: Drink[];
};

type CategoriesAPIResponse = {
  drinks: Category[];
};

const Home = () => {
  const navigate = useNavigate();

  const {
    data: randomData,
    error: randomError,
    isLoading: isLoadingRandom,
    fetchData: fetchRandom,
  } = useCocktailData<DrinkResponse>();

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: isLoadingCategories,
    fetchData: fetchCategories,
  } = useCocktailData<CategoriesAPIResponse>();

  useEffect(() => {
    fetchRandom(`${API_BASE_V1}/random.php`);
    fetchCategories(`${API_BASE_V1}/list.php?c=list`);
  }, []);

  const drink = useMemo(() => randomData?.drinks?.[0] || null, [randomData]);

  const allCategories = useMemo(
    () => categoriesData?.drinks || [],
    [categoriesData]
  );

  const handleDrinkClick = useCallback(
    (id: string) => {
      navigate(`/drink/${id}`);
    },
    [navigate]
  );

  return (
    <Box>
      <CocktailRandom
        drink={drink}
        loading={isLoadingRandom}
        error={randomError}
        onDrinkClick={handleDrinkClick}
      />
      <Box marginTop="2rem">
        <Categories
          categories={allCategories}
          loading={isLoadingCategories}
          error={categoriesError}
          resultsLimit={6}
        />
      </Box>
    </Box>
  );
};

export default Home;
