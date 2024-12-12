import React from 'react'
import styles from './CardSection6.module.css'; // Caminho para a folha de estilo


const CardSection6 = () => {
    return (
        <div className={`card shadow-sm ${styles.cardContainer}`} style={{ borderRadius: '16px' }}>
            <div className={`card-body ${styles.cardBody}`}>
                {/* Título do Card */}
                <h5 className={`card-title ${styles.cardTitle}`}>
                    Lorem ipsum dolor sit amet
                </h5>

                {/* Texto do Card */}
                <p className={`card-text ${styles.cardText}`}>
                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.
                </p>

                {/* Botão do Card */}
                <div className="text-center">
                    <button className={`btn ${styles.customBtn}`}>
                        Lorem ipsum
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardSection6