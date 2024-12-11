import React from 'react';
import styles from './Section5.module.css'; // Caminho para a folha de estilo modular
import ProductButton from './ProductButton';


const Section5 = () => {
  return (
    <section className={`container-fluid ${styles.sectionContainer}`}>
      <div className={`container bord ${styles.innerContainer}`}>
        <h2 >Lorem ipsum dolor sit amet consectetur</h2>
        <div className={`container bord ${styles.buttonContainer}`}>
        <ProductButton label="Perfumaria" />
        <ProductButton label="Corpo e banho" />
        <ProductButton label="Hidratante" />
        <ProductButton label="Desodorante" />
        <ProductButton label="Cabelos" />
        <ProductButton label="Maquiagem" />
        <ProductButton label="Rosto" />
        <ProductButton label="Casa" />
        <ProductButton label="Infantil" />
        <ProductButton label="Shampoo" />
        <ProductButton label="Sabonete" />
        <ProductButton label="Body Splash" />
        <ProductButton label="Óleo corporal" />
        <ProductButton label="Corretivo" />
        <ProductButton label="Proteção solar" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
