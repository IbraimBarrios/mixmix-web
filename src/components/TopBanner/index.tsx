import { Box, Typography } from "@mui/material";

type TopBannerProps = {
  title: string;
};

const TopBanner = ({ title }: TopBannerProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(9, 43, 73)",
        padding: "1rem",
        borderRadius: "12px",
      }}
    >
      <Typography color="white" fontSize="1.5rem">
        {title}
      </Typography>
    </Box>
  );
};

export default TopBanner;
