import React from 'react';
import HomePage from './pages/home/Home';
import './index.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import Blog from './pages/blog/Blog';
import Header from './pages/component/header/Header';
import Footer from './pages/component/footer/Footer';
import { AnimatePresence } from 'framer-motion';
import useWindowDimensions from './hooks/useWindowDimensions';

const App: React.FunctionComponent<any> = () => {
    const location = useLocation();

    const { width, height } = useWindowDimensions();

    return (
        <>
            <Header height={height} />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.key}>
                    <Route
                        path="/"
                        element={<HomePage name={'HomePage'} width={width} />}
                    />
                    <Route path="/blog" element={<Blog name={'BlogPage'} />} />
                </Routes>
            </AnimatePresence>
            <Footer name="footer" />
        </>
    );
};

export default App;
