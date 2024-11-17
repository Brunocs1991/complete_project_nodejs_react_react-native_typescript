import {Link, useParams} from "react-router-dom";
import styles from './Detail.module.css';

const DetailProduct = () => {
  const {id} = useParams();
  return (
    <div className={styles.details}>
      <h1>Detail Product</h1>
      <span>Product {id}</span>
      <Link to="/products" className={styles.button}>Back to Products</Link>
    </div>
  );
};

export default DetailProduct;
