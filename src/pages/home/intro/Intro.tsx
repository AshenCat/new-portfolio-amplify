import React from 'react';
// import IPage from '../../../interfaces/page';
// import './intro.scss';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import Separator from '../../../components/Separator/Separator';
import InView from '../../../components/InView/InView';
// import me from '../../../../img/me.png';

const Hero: React.FunctionComponent<object> = () => {
    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };
    return (
        <section className="p-4">
            <div className="page-container !mt-10">
                <Separator n={12} baseVelocity={-10} scrollerId="ABOUT ME">
                    <h3 className="text-center text-3xl font-semibold gradient-text-1">
                        About Me
                    </h3>
                </Separator>
                <InView>
                    <div className="flex flex-col md:flex-row gap-x-5 my-20">
                        {/* <img src={me} alt="me" /> */}
                        <div className="md:text-2xl flex flex-col justify-center transition-all">
                            <button
                                className="flex items-center flex-row p-2 border-2 gradient-bg-1 gradient-animation-1 border-[color:var(--dark-color-1)] text-[color:var(--dark-color-1)] hover:text-[color:var(--accent-color)] hover:border-[color:var(--accent-color)] shadow my-2"
                                onClick={() =>
                                    openInNewTab(
                                        'https://www.linkedin.com/in/klifford-agujar-8714a41a9/'
                                    )
                                }
                            >
                                <IoLogoLinkedin />
                                <span className="ml-1 md:ml-4">Linkedin</span>
                            </button>
                            <button
                                className="flex items-center flex-row p-2 border-2 gradient-bg-1 gradient-animation-1 border-[color:var(--dark-color-1)] text-[color:var(--dark-color-1)] hover:text-[color:var(--accent-color)] hover:border-[color:var(--accent-color)] shadow my-2"
                                onClick={() =>
                                    openInNewTab('https://github.com/ashencat')
                                }
                            >
                                <IoLogoGithub />
                                <span className="ml-1 md:ml-4">Github</span>
                            </button>
                        </div>
                        <div className="text-xl md:text-2xl transition-all flex flex-col gap-y-2 dark-color">
                            <p>
                                Hi, my name is Klifford, and I am a developer
                                from Toronto, Ontario.
                            </p>
                            <p>
                                {' '}
                                I am a passionate web developer striving to
                                deliver great products. Welcome to my portfolio,
                                where pixels meet purpose. Explore my skills and
                                discover the art of coding with a touch of
                                creativity.
                            </p>
                            <p>
                                Let{"'"}s build something extraordinary
                                together.
                            </p>
                        </div>
                    </div>
                </InView>
            </div>
        </section>
    );
};

export default Hero;
