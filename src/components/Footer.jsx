import React from 'react';
import styles from './Footer.module.css';
import SocialIcons from './SocialIcons';

const Footer = () => {
    return (

        <footer className={`container-fluid  ${styles.footerContainer}`}>
            <div className={`container-fluid  ${styles.line}`}></div>
            <div className={`container bord1 ${styles.innerContainer}`}>
                <div className='bord1'>
                    <SocialIcons />
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit amet</p>
                <div className={` bord1 ${styles.linkContainer}`}>


                    <a href="/loren" className={styles.link}>Loren ipsum</a>
                    <a href="/loren" className={styles.link}>Loren ipsum</a>
                    <a href="/loren" className={styles.link}>Loren ipsum</a>
                    <a href="/loren" className={styles.link}>Loren ipsum</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
