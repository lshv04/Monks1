import React, { useState, useEffect } from 'react';
import styles from './Section7.module.css'; // Importa o CSS Module
import image9 from '../assets/Section7/image9.png'; // Importa a imagem

const Section7 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');

    // Gera dois números aleatórios sempre que o componente for carregado
    useEffect(() => {
        const randomNum1 = Math.floor(Math.random() * 1000);
        const randomNum2 = Math.floor(Math.random() * 1000);
        setNum1(randomNum1);
        setNum2(randomNum2);
    }, []);

    // Valida o input do usuário
    const handleValidation = () => {
        const sum = num1 + num2;
        if (parseInt(userInput, 10) === sum) {
            setMessage('Acerto! Parabéns!');
        } else {
            setMessage('Erro! Tente novamente.');
        }
    };

    return (
        <footer className={`container-fluid ${styles.footerContainer}`}>
            <div className={`container bord1 ${styles.innerContainer}`}>
                <div className={`row ${styles.gridRow}`}>
                    {/* Coluna com imagem */}
                    <div className={`col-12 col-md-4 bord1 ${styles.gridColumn}`}>
                        <img
                            src={image9}
                            alt="Descrição da imagem"
                            className={styles.image}
                        />
                    </div>

                    {/* Coluna com formulário */}
                    <div className={`col-12 col-md-8 bord1 ${styles.gridColumn}`}>
                        <div className={`bord1 ${styles.form}`}>
                            <div className={`bord ${styles.formTitle}`}>
                                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque</p>
                                <small>*Lorem ipsum dolor sit amet consectetur</small>
                            </div>

                            <form className={`container bord ${styles.formContainer}`}>
                                <div className="row g-3">
                                    {/* Primeiro input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria*"
                                            aria-label="Categoria"
                                        />
                                    </div>

                                    {/* Segundo input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria*"
                                            aria-label="Categoria"
                                        />
                                    </div>

                                    {/* Terceiro input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria"
                                            aria-label="Categoria"
                                        />
                                    </div>

                                    {/* Quarto input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria"
                                            aria-label="Categoria"
                                        />
                                    </div>
                                </div>
                            </form>

                            {/* Verificação de segurança */}
                            <div className={`bord ${styles.securityCheck}`}>
                                <h4>Verificação de segurança</h4>
                                <div className={styles.checkContainer}>
                                    <span className={styles.numberBox}>{num1}</span>
                                    <span className={styles.operator}>+</span>
                                    <span className={styles.numberBox}>{num2}</span>
                                    <span className={styles.operator}>=</span>
                                    <input
                                        type="number"
                                        className={`form-control ${styles.inputField}`}
                                        placeholder="Resultado*"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                    />
                                    <button
                                        className={`btn ${styles.validateBtn}`}
                                        onClick={handleValidation}
                                    >
                                        Validar
                                    </button>
                                </div>
                                {message && <p className={styles.message}>{message}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Section7;
