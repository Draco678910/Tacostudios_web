//Main Page
import styles from "./MainPage.module.scss";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const MainPage = ({ }) => {
    console.log("Hola2")
    return (<div className={styles.mainBody}>
        <Header />
        <main className={styles.mainPageMain}>
            <div className={styles.banner}>

            </div>
            <div className={styles.about}>
                <div className={styles.divImgAbout}>
                    <img src="/abtUs.png" alt="Logo de tacostudios per el menu sobre nossaltres" />
                </div>
                <div className={styles.divTextAbout}>
                    <div>
                        <h2>Sobre nossaltres</h2>
                        <p>Tacostudios som una empresa de dessenvolupament de videojocs indie...</p>
                        <a href="">Més</a>
                    </div>

                </div>
            </div>
            <div className={styles.noticies}>
                <p>Noticies</p>
            </div>
        </main>
        <Footer />
    </div>)
}

export default MainPage;