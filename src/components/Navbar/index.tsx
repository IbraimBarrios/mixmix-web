import styles from "./Navbar.module.css";
import { Link } from "react-router";
import { Box, Button } from "@mui/material";
import LogoMixmix from "../LogoMixmix";

const Navbar = () => {
  return (
    <Box component="header" className={styles.navbar}>
      <LogoMixmix />
      <Box component="div" className={styles.navLinks}>
        <Link className={styles.link} to="favorites">
          Favoritos
        </Link>
        <Link className={styles.link} to="jokes">
          Chistes
        </Link>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to="/"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            fontSize: 16,
          }}
        >
          Inicio
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
