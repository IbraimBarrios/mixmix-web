import { Box } from "@mui/material";
import { useEffect, useMemo } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1 } from "../../utils/constants";
import Categories from "../../components/Categories";
import type { Category } from "../../types/category";

type CategoriesResponse = {
  drinks: Category[];
};

const AllCategories = () => {
  const { data, isLoading, error, fetchData } =
    useCocktailData<CategoriesResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/list.php?c=list`);
  }, []);

  const allCategories = useMemo(() => data?.drinks || [], [data]);

  return (
    <Box>
      <Categories
        categories={allCategories}
        loading={isLoading}
        error={error}
      />
    </Box>
  );
};

export default AllCategories;
