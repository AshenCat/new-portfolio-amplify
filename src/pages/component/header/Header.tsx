import React, { ReactElement } from 'react';
import './header.css';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import IPage from '../../../interfaces/page';

function Header({ height }: IPage): ReactElement<any> {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            },
        }),
        closed: {
            clipPath: 'circle(30px at 40px 40px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            },
        },
    };

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={height}
                // ref={containerRef}
                style={
                    isOpen
                        ? {}
                        : {
                              transitionDelay: '1s',
                              width: '75px',
                              height: '75px',
                              overflow: 'hidden',
                          }
                }
            >
                <motion.div className="background" variants={sidebar} />
                <Navigation toggle={() => toggleOpen()} />

                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </>
    );
}

export default Header;
