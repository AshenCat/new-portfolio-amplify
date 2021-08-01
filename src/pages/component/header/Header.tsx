import React, { useRef, ReactElement } from 'react'
import './header.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import IPage from '../../../interfaces/page';

function Header({height}: IPage &  RouteComponentProps<any>): ReactElement<any> {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

    return (
        <>
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={height}
              ref={containerRef}
            >
              <motion.div className="background" variants={sidebar} />
              <Navigation toggle={() => toggleOpen()} />
              
              <MenuToggle toggle={() => toggleOpen()} />

            </motion.nav>
        </>
    )
}

export default withRouter(Header)
