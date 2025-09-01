import { Box, Grid, Skeleton } from "@mui/material";

const SkeletonCategories = () => {
  return (
    <>
      <Box paddingBottom="1rem">
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: { xs: "40%", sm: "45%", md: "30%" },
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "404 / 240",
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
    </>
  );
};

export default SkeletonCategories;
