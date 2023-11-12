import React from 'react';
import IPage from '../../../interfaces/page';
// import './skills.scss';
import {
    SiAmazonaws,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiReact,
    SiTypescript,
    SiElectron,
    SiStackoverflow,
    SiNextdotjs,
    SiTailwindcss,
    SiRedux,
} from 'react-icons/si';
import { IoLogoAmplify } from 'react-icons/io5';
import Separator from '../../../components/Separator/Separator';
import InView from '../../../components/InView/InView';

const Skills: React.FunctionComponent<IPage> = () => {
    const iconClassName = 'text-8xl';
    return (
        <>
            {/* <svg
                className="wave-bottom"
                viewBox="-43.981 316.669 543.981 183.331"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs></defs>
                <path
                    className="st0-bottom"
                    d="M -46.025 450.064 C -36.472 450.064 -27.041 452.216 -18.444 456.359 C 26.122 477.836 77.963 478.649 123.189 458.581 C 134.126 453.728 145.884 450.964 157.852 450.434 C 175.825 449.638 193.585 454.569 208.541 464.506 C 278.915 511.266 370.453 512.283 441.862 467.098 C 459.458 455.964 479.89 450.054 500.752 450.064"
                    transform="matrix(-1, 0, 0, -1, 454.727036, 950.358673)"
                ></path>
            </svg> */}
            <section className="p-4">
                <div className="page-container ">
                    <Separator n={14} baseVelocity={-8} scrollerId="SKILLS">
                        <h3 className="text-center text-3xl font-semibold gradient-text-1">
                            Skills
                        </h3>
                    </Separator>
                    <InView>
                        <div className="flex flex-wrap justify-between content-center gap-8 transition-all my-8">
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiReact className={iconClassName} />
                                    <figcaption className="text-center">
                                        React
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiJavascript className={iconClassName} />
                                    <figcaption className="text-center">
                                        Javascript
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiTypescript className={iconClassName} />
                                    <figcaption className="text-center">
                                        Typescript
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiNodedotjs className={iconClassName} />
                                    <figcaption className="text-center">
                                        NodeJs
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiMongodb className={iconClassName} />
                                    <figcaption className="text-center">
                                        MongoDB
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiMysql className={iconClassName} />
                                    <figcaption className="text-center">
                                        MySQL
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiNextdotjs className={iconClassName} />
                                    <figcaption className="text-center">
                                        NextJS
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiElectron className={iconClassName} />
                                    <figcaption className="text-center">
                                        ElectronJS
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiAmazonaws className={iconClassName} />
                                    <figcaption className="text-center">
                                        AWS
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <IoLogoAmplify className={iconClassName} />
                                    <figcaption className="text-center">
                                        Amplify
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiStackoverflow
                                        className={iconClassName}
                                    />
                                    <figcaption className="text-center">
                                        Stackoverflow
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiTailwindcss className={iconClassName} />
                                    <figcaption className="text-center">
                                        Tailwind
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex flex-col flex-1 basis-auto p-8 rounded bg-white shadow hover:shadow-lg skill-card transition-all">
                                <figure className="flex flex-col items-center transition-all">
                                    <SiRedux className={iconClassName} />
                                    <figcaption className="text-center">
                                        Redux
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </InView>
                </div>
            </section>
        </>
    );
};

export default Skills;
