import React from 'react';
import styles from './Section4.module.css';
import image8 from '../assets/Section4/image8.png';



const Section4 = () => {
    return (
        <section className={` container-fluid ${styles.sectionContainer}`}>
            <div className={` container bord ${styles.innerContainer}`}>
                <div className={`row bord mx-auto ${styles.gridRow}`}>
                    <div className={`col-12 col-md-8 bord  ${styles.leftColumn}`}>
                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra</p>
                    </div>
                    <div className={`col-12 col-md-4  bord ${styles.rightColumn}`}>
                        <img src={image8} alt="Imagem 8" className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;
