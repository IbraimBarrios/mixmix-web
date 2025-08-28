import { Box, Button, Stack, Typography } from "@mui/material";
import SquareImage from "../../components/SquareImage";

const Home = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 4, sm: 2 }}>
      <Box flex={1}>
        <SquareImage
          alt="mojito"
          src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
          size={{ xs: 320, sm: 320, md: 400 }}
        />
      </Box>
      <Box flex={1}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" fontWeight="bold">
            Mojito
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Cocktail
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Mezcle las hojas de menta con el azúcar y el zumo de lima. Añada un
            chorrito de soda y llene el vaso con hielo picado. Verter el ron y
            completar con soda. Decorar y servir con pajita.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              fontSize: 16,
            }}
          >
            Ver detalle
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
