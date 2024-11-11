// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MainPage } from './pages/main-page/main-page';
import { Homeworks } from './pages/homeworks-page/homeworks-page';
import { HomeworkFirstPage } from './pages/homework-first-page/homework-first-page';
import { HomeworkSecondPage } from './pages/homework-second-page/homework-second-page';
import { HomeworkThirdPage } from './pages/homework-third-page/homework-third-page';
import { CurseWorkPage } from "./pages/curse-work-page/curse-work-page";

const App = () => {
    return (
        <Router >
            <Routes>
                <Route path="/site-petrova-julia/" element={<MainPage />} />
                <Route path="/site-petrova-julia/homeworks" element={<Homeworks />} />
                <Route path="/site-petrova-julia/homework-first" element={<HomeworkFirstPage />} />
                <Route path="/site-petrova-julia/homework-second" element={<HomeworkSecondPage />} />
                <Route path="/site-petrova-julia/homework-third" element={<HomeworkThirdPage />} />
                <Route path="/site-petrova-julia/curse-work" element={<CurseWorkPage />} />
            </Routes>
        </Router>
    );
};

export default App;