import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import useCocktailData from "../../hooks/useCocktailsData";
import { API_BASE_V1 } from "../../utils/constants";
import { useParams } from "react-router";
import type { DrinkCategory } from "../../types/drink";
import DrinkCard from "../../components/DrinkCard";
import TopBanner from "../../components/TopBanner";

type CategoryResponse = {
  drinks: DrinkCategory[];
};

const Category = () => {
  const { categoryName } = useParams();

  const { data, fetchData } = useCocktailData<CategoryResponse>();

  useEffect(() => {
    if (categoryName) {
      fetchData(
        `${API_BASE_V1}/filter.php?c=${encodeURIComponent(categoryName)}`
      );
    }
  }, []);

  const drinks = useMemo(() => data?.drinks || [], [data?.drinks]);

  return (
    <Box>
      <TopBanner title={categoryName || ""}/>
      <Box marginTop="2rem" marginBottom="1rem">
        <Typography component="h1" variant="h6">
          {" "}
          Drinks
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {drinks.map((item, index) => (
            <Grid key={index} size={{ xs: 2, sm: 8 / 3, md: 3 }}>
              <DrinkCard
                alt={item.strDrink}
                src={item.strDrinkThumb}
                name={item.strDrink}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Category;
