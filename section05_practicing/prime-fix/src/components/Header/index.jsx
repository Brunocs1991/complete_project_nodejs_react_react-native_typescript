import styles from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className={styles.logo}>Prime fix</Link>
      <Link to={"/favorites"} className={styles.favorites}>My films</Link>
    </header>
  )
}

export default Header;
