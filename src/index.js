import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем ReactDOM для использования React 18 и выше
import App from './App'; // Импортируем основной компонент App
import './index.css'; // Импортируем CSS-стили (если есть)

const root = ReactDOM.createRoot(document.getElementById('root')); // Получаем корневой элемент из index.html
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);