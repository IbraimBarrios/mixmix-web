import { Box } from "@mui/material";

type ImageParams = {
  src: string;
  alt: string;
  size: number | object;
};

const SquareImage = ({ src, alt, size }: ImageParams) => {
  return (
    <Box
      sx={{
        width: size,
        aspectRatio: "1 / 1",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default SquareImage;
