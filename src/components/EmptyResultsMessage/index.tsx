import { Box, Typography } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

type EmptyResultsMessageProps = {
  text: string;
};

const EmptyResultsMessage = ({ text }: EmptyResultsMessageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 200,
      }}
    >
      <InfoOutlineIcon sx={{ color: "#2a94d5" }} fontSize="medium" />
      <Typography ml="0.5rem">Opss.. {text}</Typography>
    </Box>
  );
};

export default EmptyResultsMessage;
