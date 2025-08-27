import styles from "./Footer.module.css";
import LogoMixmix from "../LogoMixmix";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoMixmix />
        <p className={styles.rightsReserved}>
          © {new Date().getFullYear()} MixMix - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
