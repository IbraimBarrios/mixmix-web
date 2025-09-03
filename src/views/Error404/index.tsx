import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const Error404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" alignItems="center">
        <Typography component="h1" variant="h4" fontWeight="bold">
          404
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: "1rem" }} />
        <Typography component="h1">No se pudo encontrar esta página</Typography>
      </Stack>
      <Button
        variant="contained"
        href="/"
        sx={{ fontSize: "1rem", textTransform: "none", marginTop: "1rem" }}
      >
        Ir a Inicio
      </Button>
    </Box>
  );
};

export default Error404;
