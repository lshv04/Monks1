import React from 'react';
import styles from './Section7.module.css'; // Importa o CSS Module
import image9 from '../assets/Section7/image9.png'; // Importa a imagem

const Section7 = () => {
    return (
        <footer className={`container-fluid ${styles.footerContainer}`}>
            <div className={`container bord1 ${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-md-4 bord1 ${styles.gridColumn}`}>
                        <img
                            src={image9}
                            alt="Descrição da imagem"
                            className={styles.image}
                        />
                    </div>
                    <div className={`col-12 col-md-8 bord1 ${styles.gridColumn}`}>
                        <div className={`bord1 ${styles.form}`}>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Section7;
