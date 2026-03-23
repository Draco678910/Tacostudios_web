import style from "./Noticia.module.scss"

const Noticia = () => {
    return (
        <article className={style.noticiaGrid}>
            <img src="/TacostudiosBannerB.png" alt="Imatge de noticia" />
            <h2>Titol</h2>
            <div className={style.noticiaTextIBoto}>
                <p>Text de la noticia</p>
                <a href="">Més</a>
            </div>
        </article>
    )
}
export default Noticia;