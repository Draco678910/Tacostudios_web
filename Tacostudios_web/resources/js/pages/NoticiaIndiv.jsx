import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowNoticia from '../components/ShowNoticia/ShowNoticia'
import { usePage } from '@inertiajs/react'

export default function Inici() {

    const { noticia } = usePage().props

    return (
        <>
        <main>
            <Header />
            <ShowNoticia noticia={noticia} />
            <Footer />
            </main>
        </>
    )
}