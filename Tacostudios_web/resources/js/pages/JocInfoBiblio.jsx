import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MenuJuego from '../components/MenuJuego/MenuJuego';
import { usePage } from '@inertiajs/react';

export default function JocInfoBiblio() {

    const { joc } = usePage().props;

    return (
        <>
            <Header />
            <MenuJuego joc={joc} />
            <Footer />
        </>
    );
}