import { Box, Chip, Stack, Typography } from "@mui/material";
import SquareImage from "../../components/SquareImage";

const Drink = () => {
  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
      <Box flex={1}>
        <Stack direction="column" spacing={1}>
          <Typography component="h1" variant="h4" fontWeight="bold">
            Mojito
          </Typography>
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="body2" color="text.secondary">
              Alcohólico
            </Typography>
            <Chip label="Cocktail" sx={{ fontSize: "0.875rem" }} />
          </Stack>
          <Typography variant="h5">Ingredientes</Typography>
        </Stack>
      </Box>

      <Box flex={1}>
        <SquareImage
          alt="mijito"
          src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"
          size={{ xs: 320, sm: 320, md: 400 }}
        />
      </Box>
    </Box>
  );
};

export default Drink;
