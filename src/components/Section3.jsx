import React from 'react';
import styles from './Section3.module.css'; // Importa o CSS Module

const Section3 = () => {
    return (
        <section className={`container-fluid ${styles.sectionContainer}`}>
            <div className={`container bord${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-md-6 bord ${styles.gridColumn}`}>
                        {/* Conteúdo da Coluna 1 */}
                    </div>
                    <div className={`col-12 col-md-6 bord ${styles.gridColumn}`}>
                        {/* Conteúdo da Coluna 2 */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
