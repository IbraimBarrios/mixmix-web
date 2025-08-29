import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SquareImage from "../../components/SquareImage";
import CategoryCard from "../../components/CategoryCard";

const categories = [
  {
    title: "Cocktail",
    image:
      "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  },
  {
    title: "Shot",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rswqpy1441246518.jpg",
  },
  {
    title: "Beer",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
  },
  {
    title: "Other / Unknown",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
  },
  {
    title: "Ordinary Drink",
    image:
      "https://www.thecocktaildb.com/images/media/drink/mr30ob1582479875.jpg",
  },
];

const Home = () => {
  return (
    <Box>
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
            <Typography variant="h5" fontWeight="bold">
              Mojito
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Cocktail
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Mezcle las hojas de menta con el azúcar y el zumo de lima. Añada
              un chorrito de soda y llene el vaso con hielo picado. Verter el
              ron y completar con soda. Decorar y servir con pajita.
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
      <Box paddingY="2rem">
        <Box paddingBottom="1rem">
          <Typography variant="h6" fontWeight="bold">
            Categorias
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {categories.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <CategoryCard
                  alt={item.title}
                  src={item.image}
                  categoryName={item.title}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
