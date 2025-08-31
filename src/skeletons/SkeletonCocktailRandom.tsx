import { Box, Skeleton, Stack } from "@mui/material";

const SkeletonCocktailRandom = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 4, sm: 2 }}>
      <Box flex={1}>
        <Box
          sx={{
            width: { xs: 320, sm: 320, md: 400 },
            aspectRatio: "1 / 1",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <Skeleton variant="rectangular" width="100%" height="100%" />
        </Box>
      </Box>
      <Box flex={1}>
        <Stack direction="column" spacing={2}>
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width="100%" height={40} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SkeletonCocktailRandom;
