import { motion } from 'framer-motion';
import React from 'react';
import IPage from '../../interfaces/page';
import './blog.css';

const Blog: React.FunctionComponent<IPage> = () => {
    const mainvariant = {
        initial: {
            x: '100vw',
        },
        animate: {
            x: 0,
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' },
        },
    };
    return (
        <motion.main
            variants={mainvariant}
            initial="initial"
            animate="animate"
            className="blog"
            transition={{
                ease: 'easeIn',
            }}
            exit="exit"
        >
            Under Construction
        </motion.main>
    );
};

export default Blog;
