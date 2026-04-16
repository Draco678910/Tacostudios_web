import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MainPage from '../components/Botiga/Botiga';

export default function Inici() {

    return (
        <>
            <body>
                <Header />
                <MainPage />
                <Footer />
            </body>
        </>
    );
}
