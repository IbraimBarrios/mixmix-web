import styles from "./Navbar.module.css";
import { Link } from "react-router";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import LogoMixmix from "../LogoMixmix";
import useScroll from "../../hooks/useScroll";
import NavDrawer from "../NavDawer";
import SearchIcon from "@mui/icons-material/Search";

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
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <TextField
            id="search"
            placeholder="Buscar..."
            variant="outlined"
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
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
    </Box>
  );
};

export default Navbar;
