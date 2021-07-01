import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../../interfaces/page'
import './hero.scss'
import { useDencrypt } from "use-dencrypt-effect";

const values = ["Full Stack Developer", "Front End Developer", "Software Developer"];

const Hero: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    const { result, dencrypt } = useDencrypt();

    React.useEffect(() => {
        let i = 0;
    
        const action = setInterval(() => {
          dencrypt(values[i]);
    
          i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);
    
        return () => clearInterval(action);
      }, []);

    return <header className="hero">
        <h1>Klifford Agujar</h1>
        {/* Search Engine purposes */}
        <h2>Portfolio</h2>
        <h2>Full Stack Developer</h2>
        <h2>Front End Developer</h2>
        <h2>Software Developer</h2>
        {/* End: Search Engine purposes */}
        <h3>{result}&nbsp;</h3>
    </header>
}

export default withRouter(Hero)