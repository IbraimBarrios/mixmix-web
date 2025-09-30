import { Box, Typography } from "@mui/material";

type DrinkCardParams = {
  id: string;
  src: string;
  alt: string;
  name: string;
  onDrinkClick: (id: string) => void;
};

const DrinkCard = ({ id, src, alt, name, onDrinkClick }: DrinkCardParams) => {
  const handleSeeDrinkClick = () => {
    onDrinkClick(id);
  };

  return (
    <Box
      sx={{ width: "100%", cursor: "pointer" }}
      onClick={handleSeeDrinkClick}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "1 / 1",
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
        {name}
      </Typography>
    </Box>
  );
};

export default DrinkCard;
