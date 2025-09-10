import { Box } from "@mui/material";
import { useEffect } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1 } from "../../utils/constants";

const Category = () => {
  const { data, isLoading, error, fetchData } = useCocktailData();
  useEffect(() => {
    fetchData(`${API_BASE_V1}/filter.php?c=Cocktail`);
  }, []);

  return <Box>Categoria...</Box>;
};

export default Category;
