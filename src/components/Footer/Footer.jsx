import styles from "./footer.module.scss";
import svg from "./../../assets/icon-dice.svg";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.teste}>
          <img src={svg} alt="123" />
        </div>
    </footer>
  );
};
