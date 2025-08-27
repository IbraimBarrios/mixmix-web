import styles from "./Navbar.module.css";
import { Link } from "react-router";
import { Button } from "@mui/material";
import LogoMixmix from "../LogoMixmix";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <LogoMixmix />
      <div className={styles.navLinks}>
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
      </div>
    </nav>
  );
};

export default Navbar;
