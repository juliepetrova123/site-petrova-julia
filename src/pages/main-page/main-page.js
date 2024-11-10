import React from 'react';
import Menu from '../../components/menu/menu.js';
import Footer from "../../components/footer/footer";
import MainScreen from "./components/main-screen/main-screen";
import About from "./components/about/about";
import ImageCarousel from "./components/cards/cards";

export const MainPage = () => {
    return (
        <body>
        <Menu/>
        <MainScreen/>
        <About/>
        <ImageCarousel/>
        <Footer/>
        </body>
    );
};
