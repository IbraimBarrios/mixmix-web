import { Link } from "react-router";
import { Box, Button } from "@mui/material";
import styles from "./Navbar.module.css";
import LogoMixmix from "../LogoMixmix";
import useScroll from "../../hooks/useScroll";
import NavDrawer from "../NavDawer";
import SearchInput from "../SearchInput";

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
        borderBottom: scrolled ? "1px solid rgb(221, 221, 221)" : "transparent",
      }}
    >
      <Box className={styles.container}>
        <Box className={styles.navbarContainer}>
          <NavDrawer />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <LogoMixmix />
          </Box>
          <Box
            component="div"
            className={styles.navLinks}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: { md: "center" },
              justifyContent: { md: "center" },
            }}
          >
            <SearchInput />
            <Link className={styles.link} to="/categories">
              Categorias
            </Link>
            <Link className={styles.link} to="/favorites">
              Favoritos
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
                fontSize: "1rem",
                "&:focus": {
                  color: "white",
                },
              }}
            >
              Inicio
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <SearchInput fullWidth={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
