import styles from "./NotFound.module.css"
import {Link} from "react-router-dom";

const Index = () => {
  return (

    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>Oops! The page you&#39;re looking for doesn&#39;t exist.</p>
      <Link to={"/"} className={styles.link}>Go back to the home page</Link>
    </div>
  );

}

export default Index
