import styles from "./Navbar.module.css";
import logo from "../../assets/logo-mimix.png";
import { Link } from "react-router";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
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
