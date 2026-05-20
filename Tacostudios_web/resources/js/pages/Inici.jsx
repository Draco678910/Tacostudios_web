import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainPage from '../components/MainPage/MainPage';
import { usePage } from '@inertiajs/react';

export default function Inici() {

    const { auth, noticias } = usePage().props;

    return (
        <article>
            <Header />
            <MainPage noticias={noticias} auth={auth} />
            <Footer />
        </article>
    );
}