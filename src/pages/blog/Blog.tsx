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
        exit: {
            x: '-100vw',
            transition: {ease: 'easeInOut'}
        }
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
            exit="exit"
        >
            Under Construction
        </motion.main>
    )
}

export default Blog;
