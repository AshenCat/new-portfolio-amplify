import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import IPage from '../../interfaces/page';
import './blog.css';
import { Outlet, NavLink } from 'react-router-dom';
import { mainvariant } from '../../config/config';

const Blogs: React.FunctionComponent<IPage> = () => {
    useEffect(() => {
        document.title = 'Blogs by Klifford';
    }, []);

    return (
        <motion.div
            variants={mainvariant}
            initial="initial"
            animate="animate"
            transition={{
                ease: 'easeIn',
            }}
            exit="exit"
        >
            <div className="p-2 bg-[color:var(--dark-color-1)]">
                <div className="page-container">
                    <NavLink to="/blogs">
                        <h2 className="gradient-text-1 text-3xl ml-14 xl:ml-[unset] my-4 inline-block">
                            Blogs
                        </h2>
                    </NavLink>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <Outlet />
            </AnimatePresence>
        </motion.div>
    );
};

export default Blogs;
