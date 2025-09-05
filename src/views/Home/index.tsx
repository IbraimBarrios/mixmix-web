import { useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import CocktailRandom from "../../components/CocktailRandom";
import { API_BASE_V1 } from "../../utils/constants";
import type { Cocktail } from "../../types/cocktail";
import useCocktailData from "../../hooks/useCocktailsData";
import type { Category } from "../../types/category";
import Categories from "../../components/Categories";
import { useNavigate } from "react-router";

type CocktailAPIResponse = {
  drinks: Cocktail[];
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
  } = useCocktailData<CocktailAPIResponse>();

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

  const cocktail = useMemo(() => randomData?.drinks?.[0] || null, [randomData]);

  const allCategories = useMemo(
    () => categoriesData?.drinks || [],
    [categoriesData]
  );

  const handleDrinkClick = (id: string) =>{
    navigate(`drink/${id}`);
  };

  return (
    <Box>
      <CocktailRandom
        cocktail={cocktail}
        loading={isLoadingRandom}
        error={randomError}
        onDrinkClick={handleDrinkClick}
      />
      <Box paddingY="2rem">
        <Categories
          categories={allCategories}
          loading={isLoadingCategories}
          error={categoriesError}
        />
      </Box>
    </Box>
  );
};

export default Home;
