import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../CategoryCard";
import type { Category } from "../../types/category";
import { All_CATEGORIES } from "../../utils/categories";
import Other from "../../assets/other.png";
import { useMemo } from "react";

type CategoriesProps = {
  categories: Category[];
  lading: boolean;
  error: Error | unknown;
};

const Categories = ({ categories }: CategoriesProps) => {
  const visibleCategories = useMemo(() => categories.slice(0, 6), [categories]);

  const resolvedCategories = useMemo(() => {
    const categories = visibleCategories.map((category) => {
      const categoryFound = All_CATEGORIES.categories.find(
        (item) => item.name === category.strCategory
      );

      return {
        ...category,
        src: categoryFound?.url ?? Other,
      };
    });

    return categories;
  }, [visibleCategories]);

  return (
    <>
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
          {resolvedCategories.map((item, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <CategoryCard
                alt={item.strCategory}
                src={item.src}
                categoryName={item.strCategory}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Categories;
