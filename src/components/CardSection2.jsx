import React from 'react';
import styles from './CardSection2.module.css';

const CardSection2 = ({ title, description, image }) => {
    return (
        <div className={`card ${styles.card}`} >

            <img src={image} alt={title} className={`card-img-top ${styles.cardImage}`} />


            <div className={`card-body ${styles.cardContent}`}>
                <h3 className={`card-title ${styles.cardTitle}`}>{title}</h3>
                <p className={`card-text ${styles.cardDescription}`}>{description}</p>
            </div>
        </div>
    );
};

export default CardSection2;
