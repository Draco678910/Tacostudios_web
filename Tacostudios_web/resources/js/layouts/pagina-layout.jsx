import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default () => (
    <AppLayoutTemplate >
        <Header />
        {children}
        <Footer />
    </AppLayoutTemplate>
);
