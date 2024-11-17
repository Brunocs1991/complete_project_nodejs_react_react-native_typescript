import styles from './Home.module.css'; // Importando o arquivo CSS Module

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to home</h1>
      <span>This is the home page</span>
    </div>
  );
};

export default Home;
