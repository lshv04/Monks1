import React from 'react';
import Navbar from './Navbar';
import styles from './Section1.module.css'; // Importação do CSS Module
import scrollImage from '../assets/scroll.png'; // Importação da imagem

const Section1 = () => {
    return (
        <div className={`container-fluid  ${styles.sectionContainer}`}>
            <Navbar />
            <div className={`container bord1  `}>
                <div className={` bord1 ${styles.section1main}  `}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h1>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis
                        commodo aenean viverra
                    </p>
                    <div className={styles.imageContainer}>
                        <img src={scrollImage} alt="Scroll" className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
