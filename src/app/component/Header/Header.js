import Link from 'next/link';
import styles from "./style.module.scss"

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>CryptoLogo</div>
        <nav className={styles.nav}>
            <ul>
                <li><Link className={styles.link} href="/explore">Explore</Link></li>
                <li><Link href="/collection">Collection</Link></li>
                <li><Link href="/nfts">NFT's</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
