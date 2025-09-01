import { useEffect, useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../../components/CategoryCard";
import CocktailRandom from "../../components/CocktailRandom";
import { API_BASE_V1 } from "../../utils/constants";
import type { Cocktail } from "../../types/cocktail";
import useCocktailData from "../../hooks/useCocktailsData";
import type { Category } from "../../types/category";

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

type CategoriesAPIResponse = {
  drinks: Category[];
};

const Home = () => {
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

  console.log(allCategories);

  return (
    <Box>
      <CocktailRandom
        cocktail={cocktail}
        loading={isLoadingRandom}
        error={randomError}
      />
      <Box paddingY="2rem">
        <Box paddingBottom="1rem">
          <Typography variant="h5" fontWeight="bold">
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
