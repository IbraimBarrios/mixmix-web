import { Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Home = () => {
  return (
    <div>
      Bienvenido a mixmix!
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <HomeIcon color="primary" />
      <IconButton color="primary">
        <HomeIcon />
      </IconButton>
    </div>
  );
};

export default Home;
