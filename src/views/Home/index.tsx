import { useEffect, useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../../components/CategoryCard";
import CocktailRandom from "../../components/CocktailRandom";
import { API_BASE_V1 } from "../../utils/constants";
import type { Cocktail } from "../../types/cocktail";
import useCocktailData from "../../hooks/useCocktailsData";

const categories = [
  {
    title: "Cocktail",
    image:
      "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  },
  {
    title: "Shot",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rswqpy1441246518.jpg",
  },
  {
    title: "Beer",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
  },
  {
    title: "Other / Unknown",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
  },
  {
    title: "Ordinary Drink",
    image:
      "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
  },
];

type CocktailAPIResponse = {
  drinks: Cocktail[];
};

const Home = () => {
  const { data, error, isLoading, fetchData } =
    useCocktailData<CocktailAPIResponse>();

  useEffect(() => {
    fetchData(`${API_BASE_V1}/random.php`);
  }, []);

  const cocktail = useMemo(() => data?.drinks?.[0] || null, [data]);

  return (
    <Box>
      <CocktailRandom cocktail={cocktail} loading={isLoading} error={error} />
      <Box paddingY="2rem">
        <Box paddingBottom="1rem">
          <Typography variant="h6" fontWeight="bold">
            Categorias
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {categories.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <CategoryCard
                  alt={item.title}
                  src={item.image}
                  categoryName={item.title}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
