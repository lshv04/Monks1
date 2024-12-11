import React from 'react';
import styles from './Section2.module.css'; // Importa o CSS Module

const Section2 = () => {
    return (
        <main className={`container-fluid g-0 bord ${styles.sectionContainer}`}>
            <div className={`container bord ${styles.innerContainer}`}>
                <h2 className={styles.sectionTitle}>Lorem ipsum dolor sit amet consectetur</h2>
                <p className={styles.sectionParagraph}>
                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis
                    commodo
                </p>
                <div className="row">
                    <div className={`col-12 col-md-6 col-lg-3  bord ${styles.gridItem}`}>

                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 bord ${styles.gridItem}`}>

                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 bord ${styles.gridItem}`}>

                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 bord ${styles.gridItem}`}>
                        
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Section2;
