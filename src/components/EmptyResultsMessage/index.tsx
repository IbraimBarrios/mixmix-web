import { Stack, Typography } from "@mui/material";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

type EmptyResultsMessageProps = {
  text: string;
};

const EmptyResultsMessage = ({ text }: EmptyResultsMessageProps) => {
  return (
    <Stack
      height={200}
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
    >
      <InfoOutlineIcon sx={{ color: "#2a94d5" }} fontSize="medium" />
      <Typography>{text}</Typography>
    </Stack>
  );
};

export default EmptyResultsMessage;
