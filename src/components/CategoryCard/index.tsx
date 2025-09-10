import { Box, Typography } from "@mui/material";
type CategoryParams = {
  alt: string;
  src: string;
  categoryName: string;
  onCategoryClick: (name: string) => void;
};

const CategoryCard = ({
  alt,
  src,
  categoryName,
  onCategoryClick,
}: CategoryParams) => {
  const handleSeeCategoryClick = () => {
    onCategoryClick(categoryName);
  };

  return (
    <Box
      sx={{ width: "100%", cursor: "pointer" }}
      onClick={handleSeeCategoryClick}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "404 / 240",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        align="left"
        paddingY={1}
      >
        {categoryName}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
