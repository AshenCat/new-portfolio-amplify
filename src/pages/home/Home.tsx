import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../interfaces/page'
import Hero from './hero/Hero'
import Intro from './intro/Intro'
import './Home.scss'
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Footer from './zfooter/Footer';

const Home: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    return <main className="home">
        <Hero name="hero" />
        <Intro name="intro" />
        <Projects name="projects" />
        <Skills name="skills" />
        <Footer name="footer" />
    </main>
}

export default withRouter(Home)