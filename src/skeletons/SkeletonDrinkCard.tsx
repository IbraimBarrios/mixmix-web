import { Box, Grid, Skeleton } from "@mui/material";

type SkeletonDrinkCardProps = {
  numberItems: number;
};

const SkeletonDrinkCard = ({ numberItems }: SkeletonDrinkCardProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from({ length: numberItems }).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 8 / 3, md: 3 }}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkeletonDrinkCard;
