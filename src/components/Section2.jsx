import React from 'react';
import styles from './Section2.module.css';
import CardSection2 from './CardSection2';
import image1 from '../assets/Section2/image1.png'
import image2 from '../assets/Section2/image2.png'
import image3 from '../assets/Section2/image3.png'
import image4 from '../assets/Section2/image4.png'


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
                        <CardSection2
                            image={image1}
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur."
                        />
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 bord ${styles.gridItem}`}>
                        <CardSection2
                            image={image2}
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur."
                        />
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 bord ${styles.gridItem}`}>
                        <CardSection2
                            image={image3}
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur."
                        />
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 bord ${styles.gridItem}`}>
                        <CardSection2
                            image={image4}
                            title="Lorem Ipsum Dolor"
                            description="Lorem ipsum dolor sit amet consectetur."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Section2;
