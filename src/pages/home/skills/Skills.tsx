import React from 'react'
import IPage from '../../../interfaces/page'
import './skills.scss'
import { SiAmazonaws, SiJavascript, SiMongodb, SiMysql, SiNodeDotJs, SiReact, SiCsharp, SiTypescript, SiElectron, SiSass, SiStackoverflow } from "react-icons/si";
import { IoLogoAmplify } from "react-icons/io5";

const Skills: React.FunctionComponent<IPage> = () => {
    return <>
    <svg className="wave-bottom" viewBox="-43.981 316.669 543.981 183.331" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    <path className="st0-bottom" d="M -46.025 450.064 C -36.472 450.064 -27.041 452.216 -18.444 456.359 C 26.122 477.836 77.963 478.649 123.189 458.581 C 134.126 453.728 145.884 450.964 157.852 450.434 C 175.825 449.638 193.585 454.569 208.541 464.506 C 278.915 511.266 370.453 512.283 441.862 467.098 C 459.458 455.964 479.89 450.054 500.752 450.064" transform="matrix(-1, 0, 0, -1, 454.727036, 950.358673)"></path>
  </svg>
    <section className="skills">
        <h3>Skills</h3>
        <div className="page-container">
            <div className="dflex">
                <div className="icon-card">
                    <figure>
                        <SiReact />
                        <figcaption>React</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiJavascript />
                        <figcaption>Javascript</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiTypescript />
                        <figcaption>Typescript</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiNodeDotJs />
                        <figcaption>NodeJs</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiMongodb />
                        <figcaption>MongoDB</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiMysql />
                        <figcaption>MySQL</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiCsharp />
                        <figcaption>C#</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiElectron />
                        <figcaption>ElectronJS</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiAmazonaws />
                        <figcaption>AWS</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <IoLogoAmplify />
                        <figcaption>Amplify</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiStackoverflow />
                        <figcaption>Stackoverflow</figcaption>
                    </figure>
                </div>
                <div className="icon-card">
                    <figure>
                        <SiSass />
                        <figcaption>SASS</figcaption>
                    </figure>
                </div>

            </div>
        </div>
    </section>
    </>
}

export default Skills