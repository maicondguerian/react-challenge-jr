import styles from "./footer.module.scss";
import svg from "./../../assets/icon-dice.svg";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export const Footer = () => {
  const { handleSubmit } = useContext(MyContext)

  return (
    <footer className={styles.footerContainer} onClick={handleSubmit}>
        <button className={styles.btn}>
          <img src={svg} alt="123" />
        </button>
    </footer>
  );
};
