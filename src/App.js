// src/App.jsx
import React from 'react';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Homeworks } from './pages/homeworks-page/homeworks-page';
import { HomeworkFirstPage } from './pages/homework-first-page/homework-first-page';
import { HomeworkSecondPage } from './pages/homework-second-page/homework-second-page';
import { HomeworkThirdPage } from './pages/homework-third-page/homework-third-page';
import { CurseWorkPage } from "./pages/curse-work-page/curse-work-page";

const App = () => {
    return (
        <BrowserRouter basename="/site-petrova-julia/">
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/homeworks" element={<Homeworks />} />
                <Route path="/homework-first" element={<HomeworkFirstPage />} />
                <Route path="/homework-second" element={<HomeworkSecondPage />} />
                <Route path="/homework-third" element={<HomeworkThirdPage />} />
                <Route path="/curse-work" element={<CurseWorkPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;