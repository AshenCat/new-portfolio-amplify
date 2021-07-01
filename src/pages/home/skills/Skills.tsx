import React from 'react'
import IPage from '../../../interfaces/page'
import './skills.scss'
import { SiAmazonaws, SiJavascript, SiMongodb, SiMysql, SiNodeDotJs, SiReact, SiCsharp, SiTypescript, SiElectron, SiSass, SiStackoverflow } from "react-icons/si";
import { IoLogoAmplify } from "react-icons/io5";

const Skills: React.FunctionComponent<IPage> = () => {
    return <section className="skills">
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
}

export default Skills