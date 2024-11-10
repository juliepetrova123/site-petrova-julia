import React, { useState } from 'react';
import './style.css';

const MainScreen = () => {
    return (
        <div className="main-page-main-screen-wrapper">
            <img
                className="main-page-main-screen-image"
                src="/images/main-background.jpg"
                alt="background"
                loading="lazy"
                decoding="async"
            />
            <img
                className="main-page-main-screen-image main-page-main-screen-image_mobile"
                src="./images/main-background.jpg"
                alt="background"
                loading="lazy"
                decoding="async"
            />
            <div className="main-page-main-screen">
                <div className="main-page-main-screen__content">
                    <h1 className="main-page-main-screen__title">
                        NATURE
                    </h1>
                    <p className="main-page-main-screen__text">
                        Если вы действительно любите природу, вы найдете красоту везде
                    </p>
                    <p className="main-page-main-screen__text">
                        Винсент Ван Гог
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;