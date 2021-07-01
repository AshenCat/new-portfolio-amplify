import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../../interfaces/page'
import './intro.scss'
import { IoLocationSharp } from "react-icons/io5";
import me from "../../../../img/me.png"

const Hero: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    return <section className="intro">
        <div className="page-container">
            <h3>About Me</h3>
            <div className="dflex">
                <div className="left">
                    <img src={me} alt="me" />
                </div>
                <div className="right">
                    <div className="name">Hi, I&apos;m Klifford Agujar</div>
                    <div><IoLocationSharp /> Toronto, Ontario</div>
                    <p>Intruiged by technology, electronics, internet, and delicious food.</p>
                    <p>Seeking to be inspired, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me. </p>
                    <p>Let&apos;s build something amazing together.</p>
                </div>
            </div>
        </div>
    </section>
}

export default withRouter(Hero)