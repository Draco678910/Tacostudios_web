import style from "./Noticies.module.scss"
import Noticia from "../Noticia/Noticia";

const Noticies = () => {
    return (
        <div className={style.noticiesGrid}>
            <Noticia />
            <Noticia />
            <Noticia />
            <div className={style.moreButton}><button>Més</button></div>

        </div>
    )
}
export default Noticies;