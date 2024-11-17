import {Link} from "react-router-dom";
import styles from './Products.module.css';

const Products = () => {
  const products = Array.from({length: 10}, (_, i) => ({id: i + 1}));

  return (
    <div className={styles.productsContainer}>
      <h1>Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2>Product {product.id}</h2>
            <Link to={`/product/${product.id}`} className={styles.button}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
