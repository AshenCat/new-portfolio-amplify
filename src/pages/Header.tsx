import React, { ReactElement, useState } from 'react'
import {Logo} from './Logo'
import './header.scss';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header(): ReactElement {
    const [open, setOpen] = useState<boolean>(true);
    return (
        <>
            <motion.header 
                className="header"
                initial={{y: -250}}
                animate={{y:0}}
            >
                <div className="logo">
                    <Logo />
                </div>
                <motion.div 
                    role="button"
                    onClick={()=>setOpen(prev=>!prev)}
                    whileHover={{
                        scale: 1.15,
                        // textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    <IoMenu />
                </motion.div>
            </motion.header>
            <motion.div className={open? 'drawer open' : 'drawer'}>
                <motion.span><Link to="/">Home</Link></motion.span>
                <motion.span><Link to="/blog">Blog</Link></motion.span>
            </motion.div>
        </>
    )
}

export default Header
