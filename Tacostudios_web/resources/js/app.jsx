import React from 'react';
import ReactDOM from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import '../css/app.css';
import styles from './app.module.scss';
import Header from './components/Header/Header';



const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
function App() {
    <body>
        <h1>Hola</h1>
        <Header />
    </body>
}
ReactDOM.createRoot(document.getElementById('app')).render(<App />);