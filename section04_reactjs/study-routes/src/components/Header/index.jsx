import React from 'react';
import {Link} from 'react-router-dom'; // Importando o Link do React Router
import styles from './Header.module.css'; // Importando o arquivo CSS Module

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Study routes</h2>
      <div>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        <Link to="/products" className={styles.link}>Products</Link>
      </div>
    </header>
  );
};

export default Header;
