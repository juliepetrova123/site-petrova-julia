import React from 'react';
import Menu from '../../components/menu/menu.js';
import Footer from "../../components/footer/footer";
import './style.css';

export const CurseWorkPage = () => {
    return (
        <body>
            <Menu/>
            <div className="curse-work">
                <h1 className="curse-work__title">
                    Здесь будет курсовая работа
                </h1>
            </div>
        </body>
    );
};
