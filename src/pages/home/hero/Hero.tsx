import React, {useState, useEffect, useRef, MouseEvent} from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../../../interfaces/page'
import './hero.scss'
import { useDencrypt } from "use-dencrypt-effect";
import { motion } from 'framer-motion';

const values = ["Full Stack Developer", "Front End Developer", "Software Developer"];

type Reveals = {
  x: number;
  y: number;
}

const Hero: React.FunctionComponent<IPage & RouteComponentProps<any>> = () => {
    const { result, dencrypt } = useDencrypt();
    const [reveals, setReveals] = useState<Reveals[]>([])
    const [isOutside, setIsOutside] = useState<boolean>(false)

    const circleRef = useRef<SVGCircleElement | null>(null)
    const textRef = useRef<HTMLDivElement | null>(null)
    
    const onMouseMove = (e: MouseEvent<any>) => {
      if(!isOutside) {
        circleRef.current?.setAttribute('cx', ""+e.pageX)
        circleRef.current?.setAttribute('cy', ""+e.pageY)
        textRef.current?.style.setProperty('--x', e.pageX-55+"px")
        textRef.current?.style.setProperty('--y', e.pageY-80+"px")
      }
      // console.log(textRef.current?.style.getPropertyValue('--x'))
    }
    
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      // console.log(e.pageX)
      // console.log(e.pageY)
      if(e.button === 0 || e.button === 1){
          setReveals(prev=>[...prev, {x: (e.pageX/window.innerWidth)*100, y: (e.pageY/window.innerHeight)*100}])
          console.log(reveals)
      }
    }

    const h1variant = {
      initial: {
        fontSize: '.1em',
        color: '#0171B5'
      },
      animate: {
        fontSize: '5em',
        color: '#fff',
      }
    }

    useEffect(() => {
        let i = 0;
    
        const action = setInterval(() => {
          dencrypt(values[i]);
    
          i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);
    
        return () => clearInterval(action);
      }, []);

    return <div className="hbg">
      <div
        role="button"
        tabIndex={0}>
        <img
          className="hero-img" 
          src="https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/projects1-gradient.jpg" 
          alt="bg"/>
        <svg style={{width: '100%', height: '100vh'}}>
          <defs>
            <clipPath id="myClip">
              <circle ref={circleRef} id="circle-shadow" cx="-500" cy="-500" r="150" style={{stroke: "#ffffff", strokeWidth: "5"}} />

              <circle id="mask-circle" className="circle-md" cx="50%" cy="0" r={window.innerWidth*.2} style={{fill: "#ffffff"}}/>
              <circle id="mask-circle" className="circle-md" cx="50%" cy="100%" r={window.innerWidth*.30} style={{fill: "#ffffff"}}/>
              <circle id="mask-circle" className="circle-xs" cx="50%" cy="50%" r="200px" style={{fill: "#ffffff"}}/>
              {reveals.map(({x,y}, index) => <circle key={"" + index + (x+y) + `${x}` + `${y}` } id="mask-circle" cx={`${x}%`} cy={`${y}%`} r="200px" style={{fill: "#ffffff"}}/>)}
            </clipPath>
          </defs>
        </svg>
        <div 
          ref={textRef} 
          className="flt-small-click"
          role="button"
          tabIndex={0}
          onMouseMove={onMouseMove}
          >Click</div>
      </div>
      <div
        role="button"
        tabIndex={0} 
        className="hero"
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseLeave={()=>setIsOutside(true)}
        onMouseEnter={()=>setIsOutside(false)}>
        
        <motion.h1 
          // transition={{ duration: .1 }}
          variants={h1variant}
          >
          Klifford Agujar
        </motion.h1>
        {/* Search Engine purposes */}
        <h2>Portfolio</h2>
        <h2>Full Stack Developer</h2>
        <h2>Front End Developer</h2>
        <h2>Software Developer</h2>
        {/* End: Search Engine purposes */}
        <h3>{result}&nbsp;</h3>
      </div>
      
    </div>
}

export default withRouter(Hero)