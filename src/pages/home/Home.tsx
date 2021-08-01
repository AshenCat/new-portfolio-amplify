import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../interfaces/page'
import Hero from './hero/Hero'
import Intro from './intro/Intro'
import './Home.scss'
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import { motion } from 'framer-motion';

const Home: React.FunctionComponent<IPage & RouteComponentProps<any>> = (props) => {

    const mainvariant = {
        initial: {
            backgroundColor: '#000'
        },
        animate: {
            backgroundColor: '#00000000',
            when: "beforeChildren",
            staggerChildren: 1
        },
        exit: {
            x: '-100vw',
            transition: {ease: 'easeInOut'}
        }
    }

    return  <motion.main
                className="home"
                variants={mainvariant}
                initial="initial"
                animate="animate"
                exit="exit"
                // transition={{type: 'tween'}}
            >
        <Hero name="hero" width={props.width} />
        <Intro name="intro" />
        <Projects name="projects" />
        <Skills name="skills" />
    </motion.main>
}

export default withRouter(Home)