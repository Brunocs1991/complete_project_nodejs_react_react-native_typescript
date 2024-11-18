import styles from "./NotFound.module.css"

const Index = () => {
  return (

    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
    </div>
  );

}

export default Index
