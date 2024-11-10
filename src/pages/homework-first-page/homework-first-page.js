import React from 'react';
import Menu from '../../components/menu/menu.js';
import Footer from "../../components/footer/footer";
import './style.css';

export const HomeworkFirstPage = () => {
    return (
        <body>
        <Menu/>
        <div className="homework-first">
            <div className="picture picture__background">
                <div className="picture__background__up">
                    <div className="picture__balloon">
                        <div className="picture__balloon__ball"></div>
                        <div className="picture__balloon__line"></div>
                    </div>
                    <div className="picture__donkey">
                        <div className="picture__donkey__head">
                            <div className="picture__donkey__eye">
                                <div className="picture__donkey__eye__black-part"></div>
                            </div>
                            <div className="picture__donkey__nose"></div>
                            <div className="picture__donkey__mouth"></div>
                        </div>
                        <div className="picture__donkey__neck"></div>
                        <div className="picture__donkey__ears picture__donkey__ears_first"></div>
                        <div className="picture__donkey__ears picture__donkey__ears_second"></div>
                        <div className="picture__donkey__body"></div>
                        <div className="picture__donkey__foot picture__donkey__foot_first"></div>
                        <div className="picture__donkey__foot picture__donkey__foot_second"></div>
                        <div className="picture__donkey__foot picture__donkey__foot_third"></div>
                        <div className="picture__donkey__foot picture__donkey__foot_fourth"></div>
                        <div className="picture__donkey__tail">
                            <div className="picture__donkey__tail__part picture__donkey__tail__part_first"></div>
                            <div className="picture__donkey__tail__part picture__donkey__tail__part_second"></div>
                            <div className="picture__donkey__tail__triangle"></div>
                        </div>
                    </div>
                </div>
                <div className="picture__background__down"></div>
            </div>
        </div>
        <Footer/>
        </body>
    );
};
