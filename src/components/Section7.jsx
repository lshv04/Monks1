import React, { useState, useEffect } from 'react';
import styles from './Section7.module.css'; // Importa o CSS Module
import image9 from '../assets/Section7/image9.png'; // Importa a imagem

const Section7 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');
    const [formInputs, setFormInputs] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
    });

    // Gera dois números aleatórios sempre que o componente for carregado
    useEffect(() => {
        const randomNum1 = Math.floor(Math.random() * 999);
        const randomNum2 = Math.floor(Math.random() * 999);
        setNum1(randomNum1);
        setNum2(randomNum2);
    }, []);

    // Atualiza os valores dos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    // Valida o input do usuário
    const handleValidation = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página
        const sum = num1 + num2;
        if (parseInt(userInput, 10) === sum) {
            const areAllInputsFilled = Object.values(formInputs).every((input) => input.trim() !== '');
            if (areAllInputsFilled) {
                console.log('Verificação concluída:',formInputs);
                setMessage('Verificação concluída com sucesso!');
            } else {
                setMessage('Por favor, preencha todos os campos.');
            }
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

                            <form
                                className={`container bord ${styles.formContainer}`}
                                onSubmit={handleValidation}
                            >
                                <div className="row g-3">
                                    {/* Primeiro input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            name="input1"
                                            value={formInputs.input1}
                                            onChange={handleInputChange}
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria*"
                                            aria-label="Categoria"
                                        />
                                    </div>

                                    {/* Segundo input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            name="input2"
                                            value={formInputs.input2}
                                            onChange={handleInputChange}
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria*"
                                            aria-label="Categoria"
                                        />
                                    </div>

                                    {/* Terceiro input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            name="input3"
                                            value={formInputs.input3}
                                            onChange={handleInputChange}
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria"
                                            aria-label="Categoria"
                                        />
                                    </div>

                                    {/* Quarto input */}
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            name="input4"
                                            value={formInputs.input4}
                                            onChange={handleInputChange}
                                            className={`form-control ${styles.inputField}`}
                                            placeholder="Categoria"
                                            aria-label="Categoria"
                                        />
                                    </div>
                                </div>

                                {/* Verificação de segurança */}
                                <div className={`bord ${styles.securityCheck}`}>
                                    <div className={`bord ${styles.checkContainer}`}>
                                        <h4 className='bord'>Verificação de segurança</h4>
                                        <span className={`bord ${styles.combinedNumbers}`}>
                                            <span className={styles.numberBox}>{num1}</span>
                                            <span className={styles.operator}>+</span>
                                            <span className={styles.numberBox}>{num2}</span>
                                        </span>
                                        <span className={styles.operator}>=</span>
                                        <input
                                            type="number"
                                            className={`form-control  ${styles.inputFieldValidation}`}
                                            placeholder="Resultado*"
                                            value={userInput}
                                            onChange={(e) => setUserInput(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={`btn ${styles.validateBtn}`}
                                    >
                                        Lorem ipsum
                                    </button>
                                </div>
                            </form>
                            {message && <p className={`text-center ${styles.message}`}>{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Section7;
