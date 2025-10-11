import { Box, Skeleton } from "@mui/material";
import SkeletonDrinkCard from "./SkeletonDrinkCard";

const SkeletonFavorites = () => {
  return (
    <Box>
      <Box paddingBottom="1rem">
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: { xs: "40%", sm: "45%", md: "30%" },
          }}
        />
      </Box>
      <SkeletonDrinkCard numberItems={6} />
    </Box>
  );
};

export default SkeletonFavorites;
