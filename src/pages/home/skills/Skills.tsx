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
import SkillCard from './SkillCard';

const Skills: React.FunctionComponent<IPage> = () => {
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
                <div className="page-container">
                    <Separator n={14} baseVelocity={-8} scrollerId="SKILLS">
                        <h3 className="text-center text-3xl font-semibold gradient-text-1">
                            Skills
                        </h3>
                    </Separator>
                    <InView>
                        <div className="flex flex-wrap justify-between content-center transition-all my-8">
                            <SkillCard
                                Icon={SiReact}
                                title="React"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiJavascript}
                                title="Javascript"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiTypescript}
                                title="Typescript"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiNodedotjs}
                                title="NodeJs"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiMongodb}
                                title="MongoDB"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiMysql}
                                title="MySQL"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiNextdotjs}
                                title="NextJS"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiElectron}
                                title="ElectronJS"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiAmazonaws}
                                title="AWS"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={IoLogoAmplify}
                                title="Amplify"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiStackoverflow}
                                title="Stackoverflow"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiTailwindcss}
                                title="Tailwind"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                            <SkillCard
                                Icon={SiRedux}
                                title="Redux"
                                skillCardClassName="hover:text-[color:var(--accent-color)]"
                            />
                        </div>
                    </InView>
                </div>
            </section>
        </>
    );
};

export default Skills;
