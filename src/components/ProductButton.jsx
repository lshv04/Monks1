import React from 'react';
import styles from './ProductButton.module.css'; 

const ProductButton = ({ label }) => {
  return <button className={styles.productButton}>{label}</button>;
};

export default ProductButton;
