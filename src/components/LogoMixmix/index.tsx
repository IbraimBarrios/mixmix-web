import { Link } from "react-router";
import logo from "../../assets/logo-mimix.png";
import styles from "./LogoMixMix.module.css";

const LogoMixmix = () => {
  return (
    <>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
    </>
  );
};

export default LogoMixmix;
