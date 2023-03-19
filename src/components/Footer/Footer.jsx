import style from "./footer.module.scss";
import svg from "./../../assets/icon-dice.svg";

export const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.buttonWrapper}>
        <button>
          <img src={svg} alt="123" />
        </button>
      </div>
    </footer>
  );
};
