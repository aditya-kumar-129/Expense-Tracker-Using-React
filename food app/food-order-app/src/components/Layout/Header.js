import foodimage from "../../assets/meals.jpg";
import styles from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>React Food</h1>
        <HeaderCartButton onclick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={foodimage} alt="A table full of delicious food!" />
      </div>
    </div>
  );
};

export default Header;
