import React from 'react';
import ReactDOM from 'react-dom/client';
import paginaLayout from './layouts/pagina-layout';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import '../css/app.css';
import styles from './app.module.scss';
import MainPage from './components/MainPage/MainPage';
import Botiga from './components/Botiga/Botiga';
import Carret from './components/Carret/Carret';
import Noticies from './components/Noticies/Noticies';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
function App() {
    return (
        // <paginaLayout>
        <MainPage />
        // <Carret />
        // <Noticies />
        // <Botiga />
        // </paginaLayout>
    )
}
ReactDOM.createRoot(document.getElementById('app')).render(<App />);