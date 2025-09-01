import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type RequestErrorMessageProps = {
  text?: string;
};

const RequestErrorMessage = ({ text }: RequestErrorMessageProps) => {
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
      <ErrorOutlineIcon fontSize="medium" color="error" />
      <Typography ml="0.5rem" color="error">
        {text ? text : "Error de solicitud"}
      </Typography>
    </Box>
  );
};

export default RequestErrorMessage;
