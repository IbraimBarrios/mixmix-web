import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1 } from "../../utils/constants";
import { useParams } from "react-router";
import { underscoresToSpaces } from "../../utils/utils";

const Category = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error, fetchData } = useCocktailData();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/filter.php?c=${categoryName}`);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "rgb(9, 43, 73)",
          padding: "1rem",
          borderRadius: "12px",
        }}
      >
        <Typography color="white" fontSize="1.5rem">
          {categoryName ? underscoresToSpaces(categoryName) : null}
        </Typography>
      </Box>
    </Box>
  );
};

export default Category;
