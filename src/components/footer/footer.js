import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <p>© 2024 Сайт Петровой Ю.Д. Все права защищены.</p>
            <ul>
                <li id={0}><a href="/site-petrova-julia">Главная</a></li>
                <li id={1}><a href="/site-petrova-julia/homeworks">Домашние работы</a></li>
                <li id={2}><a href="/site-petrova-julia/curse-work">Курсовая работа</a></li>
            </ul>
        </footer>
    );
};

export default Footer;