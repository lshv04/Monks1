import React from 'react';
import Navbar from './Navbar';
import styles from './Section1.module.css'; // Importação do CSS Module

const Section1 = () => {
  return (
    <div className={`container-fluid g-0 ${styles.sectionContainer} g-0`}>
        <Navbar/>
    </div>
  );
};

export default Section1;
