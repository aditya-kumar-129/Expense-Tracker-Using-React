import foodimage from '../../assets/meals.jpg'
import styles from '../Layout/Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return <div>
    <header className={styles.header}>
      <h1>React Food</h1>
      <HeaderCartButton/>
    </header>
    <div className={styles['main-image']}>
      <img src={foodimage} alt="A table full of delicious food!"/>
    </div>
  </div>;
};

export default Header;
