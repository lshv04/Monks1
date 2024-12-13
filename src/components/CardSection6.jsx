import React from 'react';
import styles from './CardSection6.module.css';

const CardSection6 = ({ title, text }) => {
    return (
        <div className={`card ${styles.cardContainer}`}>
            <div className={`card-body ${styles.cardBody}`}>

                <h5 className={`card-title ${styles.cardTitle}`}>
                    {title}
                </h5>


                <p className={`card-text ${styles.cardText}`}>
                    {text}
                </p>


                <div className="text-center">
                    <button className={`btn ${styles.customBtn}`}>
                        Lorem ipsum
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardSection6;
