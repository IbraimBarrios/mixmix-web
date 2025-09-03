import styles from "./Navbar.module.css";
import { Link } from "react-router";
import { Box, Button } from "@mui/material";
import LogoMixmix from "../LogoMixmix";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const { scrolled } = useScroll();

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        transition: "border-bottom 0.2s ease",
        borderBottom: scrolled ? "1px solid rgb(221, 221, 221)" : "none",
      }}
    >
      <Box className={styles.navbarContainer}>
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
    </Box>
  );
};

export default Navbar;
