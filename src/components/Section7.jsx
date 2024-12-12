import React from 'react';
import styles from './Section7.module.css'; // Importa o CSS Module

const Section7 = () => {
    return (
        <footer className={`container-fluid ${styles.footerContainer}`}>
            <div className={`container bord ${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-md-3 bord ${styles.gridColumn}`}>
                        {/* Conteúdo da primeira coluna */}
                    </div>
                    <div className={`col-12 col-md-9 bord ${styles.gridColumn}`}>
                        {/* Conteúdo da segunda coluna */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Section7;
