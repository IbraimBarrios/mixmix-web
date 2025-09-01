import { Box, Grid, Typography } from "@mui/material";
import CategoryCard from "../CategoryCard";
import type { Category } from "../../types/category";
import { All_CATEGORIES } from "../../utils/categories";
import Other from "../../assets/other.png";
import { useMemo } from "react";
import SkeletonCategories from "../../skeletons/SkeletonCategories";
import EmptyResultsMessage from "../EmptyResultsMessage";
import RequestErrorMessage from "../RequestErrorMessage";

type CategoriesProps = {
  categories: Category[];
  loading: boolean;
  error: Error | unknown;
};

const CategoryTitle = () => {
  return (
    <Box paddingBottom="1rem">
      <Typography variant="h6" fontWeight="bold">
        Categorias
      </Typography>
    </Box>
  );
};

const Categories = ({ categories, loading, error }: CategoriesProps) => {
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

  if (loading) return <SkeletonCategories />;
  if (error)
    return (
      <>
        <CategoryTitle />
        <RequestErrorMessage text="Error de solicitud de categoría" />
      </>
    );

  return (
    <>
      <CategoryTitle />
      {categories.length != 0 ? (
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
      ) : (
        <EmptyResultsMessage text="No se encontraron categorias" />
      )}
    </>
  );
};

export default Categories;
