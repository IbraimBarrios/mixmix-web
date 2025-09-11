import { Box, Typography } from "@mui/material";

type DrinkCardParams = {
  src: string;
  alt: string;
  name: string;
};

const DrinkCard = ({src, alt, name}: DrinkCardParams) => {
  return(
    <Box
      sx={{ width: "100%"}}
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