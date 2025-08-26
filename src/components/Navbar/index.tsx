import styles from "./Navbar.module.css";
import logo from "../../assets/logo-mimix.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.navLinks}>
        <a href="/">Favoritos</a>
        <a href="/about">Chistes</a>
        <button>Inicio</button>
      </div>
    </nav>
  );
};

export default Navbar;
