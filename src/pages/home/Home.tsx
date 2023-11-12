import IPage from '../../interfaces/page';
import Showcase from './Showcase/Showcase';
import Hero from './hero/Hero';
import Intro from './intro/Intro';
// import './Home.scss';
// import Projects from './projects/Projects';
import Skills from './skills/Skills';
import { motion } from 'framer-motion';

const Home: React.FunctionComponent<IPage> = (props) => {
    const mainvariant = {
        initial: {
            backgroundColor: '#000',
        },
        animate: {
            backgroundColor: '#00000000',
            when: 'beforeChildren',
            staggerChildren: 1,
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' },
        },
    };

    return (
        <motion.main
            className="home"
            variants={mainvariant}
            initial="initial"
            animate="animate"
            exit="exit"
            // transition={{type: 'tween'}}
        >
            <Hero name="hero" width={props.width} />
            <Intro />
            {/* <Projects name="projects" /> */}
            <Showcase />
            <Skills name="skills" />
        </motion.main>
    );
};

export default Home;
