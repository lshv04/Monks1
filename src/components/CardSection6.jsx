import React from 'react';
import styles from './CardSection6.module.css'; // Caminho para a folha de estilo

const CardSection6 = ({ title, text }) => {
    return (
        <div className={`card ${styles.cardContainer}`}>
            <div className={`card-body ${styles.cardBody}`}>
                {/* Título do Card */}
                <h5 className={`card-title ${styles.cardTitle}`}>
                    {title}
                </h5>

                {/* Texto do Card */}
                <p className={`card-text ${styles.cardText}`}>
                    {text}
                </p>

                {/* Botão do Card */}
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
