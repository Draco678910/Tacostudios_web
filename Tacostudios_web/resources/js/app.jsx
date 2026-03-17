import React from 'react';
import ReactDOM from 'react-dom/client';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import '../css/app.css';
import styles from './app.module.scss';
import MainPage from './components/MainPage/MainPage';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
function App() {
    return (
        <body className=''>
            <MainPage />
        </body>

    )

}
ReactDOM.createRoot(document.getElementById('app')).render(<App />);