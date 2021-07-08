import React, { useEffect, useState } from 'react'
import IPage from '../../../interfaces/page'
import './projects.scss'
import TPCPhoneView from '../../../../img/tpcPhones.webp'
import Capstone from '../../../../img/Capstone.webp'
import Resto from '../../../../img/RestoPhones.webp'
import Catflix from '../../../../img/Catflix-register.webp'
import ML from '../../../../img/MLcomp.gif'
import personaloverlay from '../../../../img/personaloverlay.webp'
import axios from 'axios'

interface GithubData {
    author: {
        avatar_url: string
    },
    commit: {
        author: {
            date: string,
            email: string,
            name: string
        },
        message: string
    },
}

const Projects: React.FunctionComponent<IPage> = () => {
    const [overlayData, setOverlayData] = useState<GithubData[]>([])
    const [catflixData, setCatflixData] = useState<GithubData[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/repos/ashencat/catflix/commits').then(res=>{
            console.log(res.data)
            setCatflixData(res.data)
        }).catch(err=>{
            console.log(err)
        })
        axios.get('https://api.github.com/repos/ashencat/personal-overlay-2/commits').then(res=>{
            console.log(res.data)
            setOverlayData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    const openInAnotherPage = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if(newWindow) newWindow.opener = null;
    }

    return (
        <section className="projects">
            
            <svg className="wave-top2" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <path className="st-top" d="M -0.109 0.009 C 6.389 0.009 12.36 1.599 18.218 4.065 C 53.547 18.936 90.252 13.122 104.901 7.702 C 114.057 4.316 132.367 0.374 142.302 0.148 C 154.04 -0.118 163.163 3.352 168.809 5.285 C 186.579 11.368 210.592 9.005 225.891 3.842 C 234.314 1 240.968 0.238 249.99 0.022"></path>
              <path className="st-top" d="M 249.555 0.006 C 256.063 0.006 262.043 1.596 267.909 4.061 C 303.288 18.932 340.045 13.119 354.715 7.699 C 363.884 4.313 382.22 0.371 392.168 0.145 C 403.923 -0.121 413.059 3.349 418.713 5.282 C 436.509 11.365 460.555 9.002 475.876 3.839 C 484.311 0.997 490.974 0.235 500.01 0.019"></path>
            </svg>
            <svg className="wave-top" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <path className="st-top" d="M -0.109 0.009 C 6.389 0.009 12.36 1.599 18.218 4.065 C 53.547 18.936 90.252 13.122 104.901 7.702 C 114.057 4.316 132.367 0.374 142.302 0.148 C 154.04 -0.118 163.163 3.352 168.809 5.285 C 186.579 11.368 210.592 9.005 225.891 3.842 C 234.314 1 240.968 0.238 249.99 0.022"></path>
              <path className="st-top" d="M 249.555 0.006 C 256.063 0.006 262.043 1.596 267.909 4.061 C 303.288 18.932 340.045 13.119 354.715 7.699 C 363.884 4.313 382.22 0.371 392.168 0.145 C 403.923 -0.121 413.059 3.349 418.713 5.282 C 436.509 11.365 460.555 9.002 475.876 3.839 C 484.311 0.997 490.974 0.235 500.01 0.019"></path>
            </svg>
            <div className="page-container">
                <h3>Projects</h3>
                <div className="project-container">
                    <div className="image" onClick={()=>openInAnotherPage('https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/tpcPhones.webp')} onKeyPress={()=>{}} role="button" tabIndex={0}>
                        <img src={TPCPhoneView} alt="TPC Phone view" className="prj-image" />
                    </div>
                    <div className="text">
                        <h4>01</h4>
                        <h3>Tender Plant and Care</h3>
                        <p>
                            FREELANCE - As a web developer, the main responsibility is to follow the specification given (on Figma). Shown are some of the views that I have worked on. Another part of my task was to set-up the AWS EC2 server to host the project ranging from setting up the linux environment to enabling HTTPS by issuing an SSL certificate using certbot.
                        </p>
                    </div>
                </div>
                <div className="project-container">
                    <div className="image" onClick={()=>openInAnotherPage('https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/Capstone.webp')} onKeyPress={()=>{}} role="button" tabIndex={0}>
                        <img src={Capstone} alt="Inventory Management System" className="prj-image"  />
                    </div>
                    <div className="text">
                        <h4>02</h4>
                        <h3>Inventory Management System</h3>
                        <p>
                            CAPSTONE - The idea is to migrate a business workflow from paper-based management into digital inventory management system and is expected to cut costs of a business owner after migrating. The Application was built on MERN stack and is designed to utilize intranets (private local network) taking scalability into consideration.
                        </p>
                        <div className="links"> 
                            <button className="btn-link" onClick={()=>openInAnotherPage('https://github.com/AshenCat/capstone-abc-store')}>View Repository</button>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="image" onClick={()=>openInAnotherPage('https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/RestoPhones.webp')} onKeyPress={()=>{}} role="button" tabIndex={0}>
                        <img src={Resto} alt="FutureDining" className="prj-image" />
                    </div>
                    <div className="text">
                        <h4>03</h4>
                        <h3>FutureDining</h3>
                        <p>
                            FREELANCE - As a front end developer on a startup, the tasks was to simply make the views specified by the client. This reactjs application is fully responsive for all screen sizes as specified by the client.
                        </p>
                    </div>
                </div>
                <div className="project-container">
                    <div className="image" onClick={()=>openInAnotherPage('https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/MLcomp.gif')} onKeyPress={()=>{}} role="button" tabIndex={0}>
                        <img src={ML} alt="Python Object Detection" className="prj-image" />
                    </div>
                    <div className="text">
                        <h4>04</h4>
                        <h3>Python Object Detection</h3>
                        <p>
                            COLLEGE - Whilst python isn&apos;t my most comfortable language, I&apos;ve had a good time doing this project. Using the Common Objects in Context (COCO) dataset, I was able to detect objects in my screen in real time. Instead of inputting single image feeds, I modified it to take video feed instead and label all the objects it detects.
                        </p>
                        <div className="links">
                            <button className="btn-link" onClick={()=>openInAnotherPage('https://github.com/AshenCat/PythonObjectDetection')}>View Repository</button>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="image" onClick={()=>openInAnotherPage('https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/personaloverlay.webp')} onKeyPress={()=>{}} role="button" tabIndex={0}>
                        <img src={personaloverlay} alt="Personal Overlay" className="prj-image" />
                    </div>
                    <div className="text">
                        <h4>05</h4>
                        <h3>Personal Overlay</h3>
                        <p>
                            Personal Project - The goal of the desktop application is to organize my calendar schedule to my liking. The application made my daily tasks more optimized, and it also reminds me when there is an upcoming task. This application runs on Electronjs + Reactjs + mongoose which is pure javascript.
                        </p>
                        <div><b>Commits: </b></div>
                        <div className="small-list" style={{height: '180px'}}>
                            {/* vscode pushes doesn't link to account so only merge will link my account */}
                            {overlayData.map((obj, index)=> {
                                if(obj?.commit?.message) return <div className="list-row" key={`${obj?.commit?.author?.name}${obj?.commit?.author?.date}${index}`}>
                                    <div className="author">
                                        <img src="https://avatars.githubusercontent.com/u/8600507?v=4" alt="Klifford Agujar" className="smol-image" />
                                        Klifford Agujar ({obj?.commit?.author?.date})
                                    </div>
                                    <div className="message">
                                        {obj?.commit?.message}
                                    </div>
                                </div>
                                else return;
                            })}
                        </div>
                        <div className="links">
                            <button className="btn-link" onClick={()=>openInAnotherPage('https://github.com/AshenCat/personal-overlay-2')}>View Repository</button>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="image" onClick={()=>openInAnotherPage('https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/Catflix-register.webp')} onKeyPress={()=>{}} role="button" tabIndex={0}>
                        <img src={Catflix} alt="Personal Overlay" className="prj-image" />
                    </div>
                    <div className="text">
                        <h4>06</h4>
                        <h3>Catflix</h3>
                        <p>
                            Personal Project - (Still ongoing) The goal for this project is to make a web app where users can upload their memes essentially something like 9gag or imgur. The project&apos;s scope is vast and it is expected to take time to finish it. 
                        </p>
                        <div><b>Commits: </b></div>
                        <div className="small-list" style={{height: '180px'}}>
                            {/* vscode pushes doesn't link to account so only merge will link my account */}
                            {catflixData.map((obj, index)=> {
                                if(obj?.commit?.message) return <div className="list-row" key={`${obj?.commit?.author?.name}${obj?.commit?.author?.date}${index}`}>
                                    <div className="author">
                                        <img src="https://avatars.githubusercontent.com/u/8600507?v=4" alt="Klifford Agujar" className="smol-image" />
                                        Klifford Agujar ({obj?.commit?.author?.date})
                                    </div>
                                    <div className="message">
                                        {obj?.commit?.message}
                                    </div>
                                </div>
                                else return;
                            })}
                        </div>
                        <div className="links">
                            <button className="btn-link" onClick={()=>openInAnotherPage('https://github.com/AshenCat/catflix')}>View Repository</button>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="wave-bottom" viewBox="-43.981 316.669 543.981 183.331" xmlns="http://www.w3.org/2000/svg">
              <defs>
              </defs>
              <path className="st0-bottom" d="M -46.025 450.064 C -36.472 450.064 -27.041 452.216 -18.444 456.359 C 26.122 477.836 77.963 478.649 123.189 458.581 C 134.126 453.728 145.884 450.964 157.852 450.434 C 175.825 449.638 193.585 454.569 208.541 464.506 C 278.915 511.266 370.453 512.283 441.862 467.098 C 459.458 455.964 479.89 450.054 500.752 450.064" transform="matrix(-1, 0, 0, -1, 454.727036, 950.358673)"></path>
            </svg>
        </section>
    )
}

export default Projects
