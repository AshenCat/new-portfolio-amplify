import { motion } from 'framer-motion';
import React from 'react'
import { RouteChildrenProps } from 'react-router-dom';
import IPage from '../../interfaces/page';
import './blog.scss'

const Blog: React.FunctionComponent<IPage & RouteChildrenProps<any>> = () =>  {
    const mainvariant = {
        initial: {
            x: '100vw', 
        },
        animate: {
            x: 0, 
        },
    }
    return (
        <motion.main
            variants={mainvariant}
            initial="initial"
            animate="animate"
            className="blog"
            transition={{
                ease: 'easeIn'
            }}
        >
            Under Construction
        </motion.main>
    )
}

export default Blog;
