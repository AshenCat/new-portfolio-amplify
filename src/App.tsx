import React from 'react';
import HomePage from './pages/home/Home';
import './index.css';

import { Route, Routes } from 'react-router-dom';
import Blog from './pages/blogs/Blogs';
import Header from './pages/component/header/Header';
import { AnimatePresence } from 'framer-motion';
import useWindowDimensions from './hooks/useWindowDimensions';
import BlogIndex from './pages/blogs/BlogIndex';
import BlockingVsNonBlocking from './pages/blogs/Blog/BlockingVsNonBlocking';

const App: React.FunctionComponent<any> = () => {
    // const location = useLocation();

    const { width, height } = useWindowDimensions();

    return (
        <>
            <Header height={height} />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage name={'HomePage'} width={width} />}
                    />
                    <Route
                        path="blogs"
                        element={<Blog name={'BlogPage'} />}
                    >
                        <Route index element={<BlogIndex />} />
                        <Route
                            path="blocking-vs-non-blocking"
                            element={<BlockingVsNonBlocking />}
                        />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;
