'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from "./style.module.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>CryptoLogo</div>

            <button className={styles.burgerMenuButton} onClick={toggleMenu}>
                <img src={isMenuOpen ? "./fermer.png" : "./menu.png"} alt="Menu" />
            </button>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
                <ul>
                    <li><Link className={styles.link} href="/explore">Explore</Link></li>
                    <li><Link className={styles.link} href="/collection">Collection</Link></li>
                    <li><Link  className={styles.link} href="/nfts">NFT's</Link></li>
                    <li><Link className={styles.link} href="/blog">Blog</Link></li>
                    <li><Link className={styles.link} href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

