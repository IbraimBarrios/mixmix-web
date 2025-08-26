import styles from "./Navbar.module.css";
import logo from "../../assets/logo-mimix.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
      <div className={styles.navLinks}>
        <Link to="/favorites">Favoritos</Link>
        <Link to="jokes">Chistes</Link>
        <button>Inicio</button>
      </div>
    </nav>
  );
};

export default Navbar;
