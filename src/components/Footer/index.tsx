import styles from "./Footer.module.css";
import logo from "../../assets/logo-mimix.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <p className={styles.rightsReserved}>
          © {new Date().getFullYear()} MixMix - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
