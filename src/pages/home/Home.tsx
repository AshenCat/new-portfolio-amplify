import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../interfaces/page'
import Hero from './hero/Hero'
import Intro from './intro/Intro'
import './Home.scss'
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Footer from './zfooter/Footer';
import { motion } from 'framer-motion';

const Home: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    return  <motion.main
                className="home"
                initial={{opacity: 0, backgroundColor: '#000'}}
                animate={{opacity: 1, backgroundColor: '#00000000'}}
                // transition={{type: 'tween'}}
            >
        <Hero name="hero" />
        <Intro name="intro" />
        <Projects name="projects" />
        <Skills name="skills" />
        <Footer name="footer" />
    </motion.main>
}

export default withRouter(Home)