import React from 'react';
import styles from './Section6.module.css'; // Importa a folha de estilo modular
import CardSection6 from './CardSection6';

const Section6 = () => {
    return (
        <section className={`container-fluid ${styles.sectionContainer}`}>
            <div className={`container bord ${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>
                       <CardSection6/>
                    </div>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>

                    </div>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
