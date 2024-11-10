import React from 'react';
import Menu from '../../components/menu/menu.js';
import Footer from "../../components/footer/footer";
import './style.css';

export const Homeworks = () => {
    return (
        <body>
            <Menu/>
            <div id="homeworks" className="homeworks-page">
                <div className="container">
                    <div className="homeworks-menu">
                        <h2 className="homeworks-menu__title">
                            Домашние работы
                        </h2>
                        <div className="homeworks-menu__content">
                            <div className="homework-card__wrapper">
                                <a href="homework-first" className="homework-card">
                                    <div className="homework-card__title">
                                        Рисунок CSS
                                    </div>
                                    <div className="homework-card__text">
                                        Создать рисунки с помощью стилевой таблицы. Размер 200х200px.
                                    </div>
                                </a>
                            </div>
                            <div className="homework-card__wrapper">
                                <a href="homework-second" className="homework-card">
                                    <div className="homework-card__title">
                                        Flexbox-бренд
                                    </div>
                                    <div className="homework-card__text">
                                        Создать компонент рекламного ролика с размером 200х200px.
                                    </div>
                                </a>
                            </div>
                            <div className="homework-card__wrapper">
                                <a href="homework-third" className="homework-card">
                                    <div className="homework-card__title">
                                        DOM-Тест
                                    </div>
                                    <div className="homework-card__text">
                                        Вариант 3. Грамотность
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <Footer/>
        </body>
    );
};
