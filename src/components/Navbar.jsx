import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import groupImage from '../assets/Group.png'; // Importa a imagem

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <nav className={`navbar navbar-expand-lg bord1 ${styles.navbar}`}>
            <div className={`bord1 container ${styles.divnav}`}>
                {/* Logo */}
                <a className={`navbar-brand ${styles['navbar-brand']}`} href="/">
                    <img src={logo} alt="Brand Logo" className={styles['brand-logo']} />
                </a>

                {/* Botão Toggler */}
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

                {/* Links */}
                <div
                    className={`collapse navbar-collapse bord1 mt-2 ${styles['navbar-collapse']} ${isExpanded ? 'show' : ''
                        }`}
                    id="navbarNav"
                >
                    <ul className={`navbar-nav bord1 ${styles['navbar-nav']}`}>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/">
                                Categoria 1
                            </a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/Categoria2">
                                Categoria 2
                            </a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/Categoria3">
                                Categoria 3
                            </a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/Categoria4">
                                Categoria 4
                            </a>
                        </li>
                    </ul>
                    {/* Exibe a imagem apenas quando o menu está expandido */}
                    {isExpanded && (
                        <div className={`bord1 ${styles.imageContainer}`}>
                            
                                <img src={groupImage} alt="Group" className={styles.image} />
                            
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
