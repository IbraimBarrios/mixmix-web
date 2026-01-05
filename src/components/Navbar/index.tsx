import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.css";
import LogoMixmix from "../LogoMixmix";
import useScroll from "../../hooks/useScroll";
import NavDrawer from "../NavDawer";

const Navbar = () => {
  const navigate = useNavigate();
  const { scrolled } = useScroll();
  const [search, setSearch] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const encodedSearch = encodeURIComponent(search.trim());
      if (encodedSearch) {
        navigate(`/search?s=${search}`);
        setSearch("");
      }
    }
  };

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
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: { md: "center" },
            justifyContent: { md: "center" },
          }}
        >
          <TextField
            id="search"
            placeholder="Buscar..."
            variant="outlined"
            size="small"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
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
