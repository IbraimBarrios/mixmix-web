import { Box, Skeleton } from "@mui/material";
import SkeletonDrinkCard from "./SkeletonDrinkCard";

const SkeletonSearch = () => {
  return (
    <>
      <Box marginTop="2rem" marginBottom="1rem">
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: { xs: "30%", md: "20%" },
          }}
        />
      </Box>
      <SkeletonDrinkCard numberItems={4} />
    </>
  );
};

export default SkeletonSearch;
