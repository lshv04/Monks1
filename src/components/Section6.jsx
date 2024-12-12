import React from 'react';
import styles from './Section6.module.css'; // Importa a folha de estilo modular

const Section6 = () => {
    return (
        <section className={`container-fluid ${styles.sectionContainer}`}>
            <div className={`container bord ${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    <div className={`col-12 col-md-4 bord ${styles.gridColumn}`}>
                        <div className="card shadow-sm" style={{ borderRadius: '12px' }}>
                            <div className="card-body">
                                {/* Título do Card */}
                                <h5 className="card-title font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h5>

                                {/* Texto do Card */}
                                <p className="card-text text-muted">
                                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.
                                </p>

                                {/* Botão do Card */}
                                <div className='text-center'>
                                <button className="btn btn-primary  " style={{ backgroundColor: '#D6BBFB', borderColor: '#D6BBFB' }}>
                                    Lorem ipsum
                                </button>
                                </div>
                            </div>
                        </div>
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
