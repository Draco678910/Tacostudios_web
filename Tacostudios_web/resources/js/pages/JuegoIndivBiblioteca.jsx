import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import JocBiblioteca from '../components/JocBiblioteca/JocBiblioteca';
import { usePage } from '@inertiajs/react';

export default function JocIndiv() {

    const { joc } = usePage().props;

    return (
        <>
            <Header />
            <JocBiblioteca joc={joc} />
            <Footer />
        </>
    );
}