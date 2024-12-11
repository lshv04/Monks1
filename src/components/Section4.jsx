import React from 'react';
import styles from './Section4.module.css'; // Importa a folha de estilo modular

const Section4 = () => {
  return (
    <section className={`container-fluid ${styles.sectionContainer}`}>
        <div className={`container ${styles.innerContainer}`}>
            <div className={`row ${styles.gridRow}`}>
                <div className={`col-12 col-md-9 bord ${styles.leftColumn}`}>
                    {/* Conteúdo para a coluna maior */}
                </div>
                <div className={`col-12 col-md-3  bord ${styles.rightColumn}`}>
                    {/* Conteúdo para a coluna menor */}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Section4;
