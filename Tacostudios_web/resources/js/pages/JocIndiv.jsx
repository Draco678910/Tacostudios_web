import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import JocMostrar from '../components/JocMostrar/JocMostrar';

export default function JocIndiv({ joc }) {
    return (
        <article>
            <Header />
            <JocMostrar joc={joc} />
            <Footer />
        </article>
    );
}