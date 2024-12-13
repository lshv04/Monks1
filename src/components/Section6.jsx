import React from 'react';
import styles from './Section6.module.css';
import CardSection6 from './CardSection6';

const Section6 = () => {
    return (
        <section className={`container-fluid ${styles.sectionContainer}`}>
            <div className={`container bord ${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>
                        <CardSection6
                            title="Lorem ipsum dolor sit amet"
                            text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
                        />
                    </div>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>
                        <CardSection6
                            title="Lorem ipsum dolor sit amet"
                            text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
                        />
                    </div>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>
                        <CardSection6
                            title="Lorem ipsum dolor sit amet"
                            text="Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
