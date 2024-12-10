import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg bord1  ${styles.navbar}`}>
            <div className={` bord1 container ${styles.divnav}`}>
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
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list bord1" style={{ fontSize: '2rem', color: 'white' }}></i>
                </button>



                {/* Links */}
                <div className={`collapse navbar-collapse bord1  mt-2 ${styles['navbar-collapse']}`} id="navbarNav">
                    <ul className={`navbar-nav ${styles['navbar-nav']}`}>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/">Categoria 1</a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/Categoria2">Categoria 2</a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/Categoria3">Categoria 3</a>
                        </li>
                        <li className={`nav-item ${styles['nav-item']}`}>
                            <a className={`nav-link ${styles['nav-link']}`} href="/Categoria4">Categoria 4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
