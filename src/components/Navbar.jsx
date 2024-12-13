import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import groupImage from '../assets/Group.png';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleBackClick = () => {
        setIsExpanded(false); // Fecha o menu hamburguer
    };

    return (
        <nav className={`navbar navbar-expand-md bord1 ${styles.navbar}`}>
            <div className={`bord1 container ${styles.divnav}`}>

                <a className={`navbar-brand ${styles['navbar-brand']}`} href="/">
                    <img src={logo} alt="Brand Logo" className={styles['brand-logo']} />
                </a>


                <button
                    className="navbar-toggler p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={isExpanded ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <i className="bi bi-list bord1" style={{ fontSize: '2rem', color: 'white' }}></i>
                </button>


                <div
                    className={`collapse navbar-collapse bord1 mt-2 ${styles['navbar-collapse']} ${isExpanded ? 'show' : ''
                        }`}
                    id="navbarNav"
                >
                    <ul className={`navbar-nav bord1 ${styles['navbar-nav']}`}>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="#">
                                Categoria 1
                            </a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="#">
                                Categoria 2
                            </a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="#">
                                Categoria 3
                            </a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="#">
                                Categoria 4
                            </a>
                        </li>
                    </ul>
                    {/* Exibe a imagem apenas quando o menu hamburguer está ativado */}
                    {isExpanded && (
                        <div className={`bord1 ${styles.imageContainer}`}>
                            <img
                                src={groupImage}
                                alt="Group"
                                className={styles.image}
                                onClick={handleBackClick} // Fecha o menu ao clicar na imagem
                            />
                            <span className={styles.textOverlay}>back</span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
