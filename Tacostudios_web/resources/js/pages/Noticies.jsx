import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Noticies from '../components/Noticies/Noticies';

export default function Inici() {

    return (
        <>
            <body>
                <Header />
                <Noticies />
                <Footer />
            </body>
        </>
    );
}