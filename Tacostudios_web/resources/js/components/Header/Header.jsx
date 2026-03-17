// Header
//import { createContext, useState } from "react";
import styles from './Header.module.scss';

const Header = ({ }) => {
    console.log("Hola");
    return (
        <header className={styles.HeaderGrid}>
            <div className={styles.headerLogo}><img src="/TacostudiosLogo.png" alt="Logo Tacostudios" /><img src="" alt="Logo Tacostudios" /></div>
            <nav className={styles.headerNav}><p>Nav</p></nav>
            <div className={styles.HeaderUserDiv}><a><img src="/accountDark.png" alt="Imatge del compte d'usuari" /><p>UserName</p></a></div>
            <div className={styles.headerOpcionsDiv}> <a href=""><span><img src="/settingsDark.png" alt="" /></span></a></div>
        </header>)
}
export default Header;