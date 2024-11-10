import React, { useState } from 'react';
import './style.css';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="logo">
                <div className="circle"></div>
                <div className="line line_first"></div>
                <div className="line line_second"></div>
                <div className="line line_third"></div>
                <div className="line line_fourth"></div>
                <div className="line line_fifth"></div>
            </div>
            <div className="desktop-menu">
                <nav>
                    <ul className="menu">
                        <li id={0}><a href="/">Главная</a></li>
                        <li id={1}><a href="homeworks">Домашние работы</a></li>
                        <li id={2}><a href="curse-work">Курсовая работа</a></li>
                    </ul>
                </nav>
            </div>
            <div className="mobile-menu">
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                {isMenuOpen && (
                    <nav className="menu-hamburger">
                        <ul>
                            <li id={0}><a href="/">Главная</a></li>
                            <li id={1}><a href="homeworks">Домашние работы</a></li>
                            <li id={2}><a href="curse-work">Курсовая работа</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Menu;