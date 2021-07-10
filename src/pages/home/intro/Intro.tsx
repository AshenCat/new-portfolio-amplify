import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../../interfaces/page'
import './intro.scss'
import { IoLocationSharp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import me from "../../../../img/me.png";

const Hero: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if(newWindow) newWindow.opener = null;
    }
    return <section className="intro">
        <div className="page-container">
            <h3>About Me</h3>
            <div className="dflex">
                <div className="left">
                    <img src={me} alt="me" />
                    <div className="icons">
                        <IoLogoLinkedin onClick={()=>openInNewTab('https://www.linkedin.com/in/klifford-agujar-8714a41a9/')} tabIndex={0}/>
                        <IoLogoGithub onClick={()=>openInNewTab('https://github.com/ashencat')} tabIndex={0} />
                    </div>
                </div>
                <div className="right">
                    <div className="name">Hi, I&apos;m Klifford Agujar</div>
                    <div className="loc"><IoLocationSharp /> <span>Toronto, Ontario</span></div>
                    <p>Intruiged by technology, electronics, internet, and delicious food.</p>
                    <p>Seeking to be inspired, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me. </p>
                    <p>Let&apos;s build something amazing together.</p>
                </div>
            </div>
        </div>
    </section>
}

export default withRouter(Hero)