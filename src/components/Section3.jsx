import React from 'react';
import styles from './Section3.module.css'; // Importa o CSS Module
import image5 from '../assets/Section3/image5.png'; // Importa a imagem local
import image6 from '../assets/Section3/image6.png'; // Importa a imagem local
import image7 from '../assets/Section3/image7.png'; // Importa a imagem local

const Section3 = () => {
    return (
        <section className={`container-fluid ${styles.sectionContainer}`}>
            <div className={`container bord${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-lg-6 bord ${styles.gridColumn}`}>
                        <div className={`bord ${styles.title}`}>
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</p>
                        </div>
                        <div className={`bord ${styles.image}`}>

                            <img src={image5} alt="Description of Image" className={styles.imageContent} />

                        </div>

                    </div>
                    <div className={`col-12 col-lg-6 bord ${styles.gridColumn}`}>
                        <div className={` bord ${styles.imageContent2}`}>
                            <img src={image6} alt="Description of Image" className={styles.imageContent} />
                        </div>
                        <div className={` bord ${styles.imageContent2}`}>
                            <img src={image7} alt="Description of Image" className={styles.imageContent} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
