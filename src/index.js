import React from 'react';
import ReactDOM from 'react-dom'; // Импортируем ReactDOM для использования React 18 и выше
import App from './App'; // Импортируем основной компонент App
import './index.css'; // Импортируем CSS-стили (если есть)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);