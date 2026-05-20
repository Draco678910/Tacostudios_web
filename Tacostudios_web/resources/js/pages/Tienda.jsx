import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Botiga from '../components/Botiga/Botiga';

export default function Inici({ jocs }) {

    return (
        <main>
            <Header />
            <Botiga jocs={jocs} />
            <Footer />
        </main>
    );
}