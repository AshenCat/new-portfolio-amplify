import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../interfaces/page'
import Hero from './home/hero/Hero'
import Intro from './home/intro/Intro'
import './Home.scss'

const Home: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    return <main className="home">
        <Hero name="Hero" />
        <Intro name="intro" />
    </main>
}

export default withRouter(Home)