import React from 'react';
import styles from './ProductButton.module.css'; // Importa a folha de estilo modular

const ProductButton = ({ label }) => {
  return <button className={styles.productButton}>{label}</button>;
};

export default ProductButton;
