import { Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type RequestErrorMessageProps = {
  text?: string;
};

const RequestErrorMessage = ({ text }: RequestErrorMessageProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
    >
      <ErrorOutlineIcon fontSize="medium" color="error" />
      <Typography variant="body1" color="error">
        {text ? text : "Error de solicitud"}
      </Typography>
    </Stack>
  );
};

export default RequestErrorMessage;
