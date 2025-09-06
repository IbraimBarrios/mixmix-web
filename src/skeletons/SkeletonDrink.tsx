import { Box, Grid, Skeleton, Stack } from "@mui/material";

const SkeletonDrink = () => {
  return (
    <Box>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        <Box flex={1}>
          <Stack direction="column" spacing={1}>
            <Skeleton variant="text" />
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Skeleton variant="text" width="20%" />
              <Skeleton variant="rounded" width={80} height={32} />
            </Stack>
            <Skeleton variant="text" width="40%" />
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton variant="text" width={120} height={28} />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Box>

        <Box
          flex={1}
          justifyContent={{ sx: "center", md: "start" }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
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
      </Box>
      <Stack direction="column" spacing={2}>
        <Box paddingTop={{ xs: "1rem", md: 0 }}>
          <Skeleton variant="text" sx={{ width: { xs: "40%", md: "20%" } }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="50%" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Skeleton variant="text" width={120} />
          <Skeleton variant="text" width={120} />
        </Box>
      </Stack>
    </Box>
  );
};

export default SkeletonDrink;
