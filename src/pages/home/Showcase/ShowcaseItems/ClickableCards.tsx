import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import InView from '../../../../components/InView/InView';

function ClickableCards() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return (
        <>
            <div className="dark-color">
                I love to keep myself up-to-date with the latest industry
                trends. My github is home to a lot of random projects!
                Here&apos;s some of the product of my free time:
            </div>
            <InView>
                <article className="mt-8 relative flex flex-col md:flex-row flex-wrap shrink gap-4 [&>*:nth-child(2)]:min-w-[30%] [&>*:nth-child(2)]:basis-[30%] [&>*:nth-child(3)]:min-w-[30%] [&>*:nth-child(3)]:basis-[30%] [&>*:nth-child(1)]:basis-[60%] [&>*:nth-child(4)]:basis-[60%]">
                    {Array.from(projects).map(([key, value], index) => (
                        <motion.button
                            layoutId={key}
                            key={`${key}${index}`}
                            className={`flex flex-col grow md:flex-row md:h-48 border-2 showcase-1-card padding`}
                            onClick={() => setSelectedId(key)}
                        >
                            <figure className="flex transition-all h-full bg-[color:var(--dark-color-1)] overflow-hidden rounded-t-[5px] md:rounded-tr-[unset] md:rounded-l-[5px]">
                                <img
                                    src={value.img}
                                    className={`h-full mx-auto object-cover max-w-full md:max-w-[unset] ${value.imgClassName}`}
                                    alt={`${key} Project illustration`}
                                    loading="lazy"
                                />
                            </figure>
                            <div className="flex flex-col h-full basis-4/5 p-4 transition-all">
                                <h5 className="overflow-auto flex-1 dark-color">
                                    {value.description}
                                </h5>
                                <div className="flex">
                                    <h3 className="text-left font-semibold flex-1 gradient-text-1">
                                        {key}
                                    </h3>
                                    <div className="flex items-baseline content-baseline gap-2">
                                        {value.links.github && (
                                            <a
                                                href={value.links.github}
                                                className="text-2xl hover:text-[color:var(--accent-color)] transition-all"
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                        {value.links.discord && (
                                            <a
                                                href={value.links.discord}
                                                className="text-2xl hover:text-[color:var(--accent-color)] transition-all"
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <FaDiscord />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.button>
                    ))}

                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-600 bg-opacity-30 flex justify-center items-center z-20"
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedId(null)}
                            >
                                <motion.div
                                    className="border-2 bg-white w-fit md:max-w-[800px] h-fit showcase-1-card cursor-auto"
                                    role="button"
                                    tabIndex={0}
                                    onClick={(e) => e.stopPropagation()}
                                    layoutId={selectedId}
                                >
                                    <figure className="relative rounded-t-[5px] bg-[color:var(--dark-color-1)] overflow-hidden">
                                        <img
                                            className="w-full object-contain object-center mx-auto max-w-[600px]"
                                            src={projects.get(selectedId)?.img}
                                            alt={`${selectedId} Project illustration`}
                                            loading="lazy"
                                        />
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="absolute top-4 right-4 bg-white p-4 text-lg"
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </figure>
                                    <div className="flex flex-col p-4">
                                        <h5 className="overflow-auto flex-1 dark-color">
                                            {
                                                projects.get(selectedId)
                                                    ?.description
                                            }
                                        </h5>
                                        <div className="flex">
                                            <h3 className="text-left font-semibold flex-1 gradient-text-1">
                                                {selectedId}
                                            </h3>
                                            <div className="flex items-baseline content-baseline gap-2">
                                                {projects.get(selectedId)?.links
                                                    .github && (
                                                    <a
                                                        href={
                                                            projects.get(
                                                                selectedId
                                                            )?.links.github
                                                        }
                                                        className="text-2xl hover:text-[color:var(--accent-color)] transition-all"
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )}
                                                {projects.get(selectedId)?.links
                                                    .discord && (
                                                    <a
                                                        href={
                                                            projects.get(
                                                                selectedId
                                                            )?.links.discord
                                                        }
                                                        className="text-2xl hover:text-[color:var(--accent-color)] transition-all"
                                                    >
                                                        <FaDiscord />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </article>
            </InView>
        </>
    );
}

const projects = new Map(
    Object.entries({
        'Wolhak Bot': {
            description:
                'A discord bot used in a server with 600+ users able to take commands to manage the server for admins, process user query and utilize ChatGPT to create meaningful responses/images, and do automated tasks in a daily and weekly basis.',
            img: 'https://raw.githubusercontent.com/AshenCat/new-portfolio-amplify/master/img/WolhakBot.gif',
            imgClassName: 'object-center',
            links: {
                github: 'https://github.com/AshenCat/wolhak-bot',
                discord: 'http://wolhaksong.com/',
            },
        },
        'Code Editor App': {
            description:
                'Basic code editor application written in React + Typescript, using Redux/toolkit and Material UI Libraries',
            img: 'https://raw.githubusercontent.com/AshenCat/code-editor-app/master/readme/ss.png',
            imgClassName: 'object-left-top',
            links: {
                github: 'https://github.com/AshenCat/code-editor-app',
            },
        },
        'Python Object Detection': {
            description:
                'COLLEGE - A python script utilizing COCO dataset detecting objects in the screen or a camera in real time.',
            img: 'https://raw.githubusercontent.com/AshenCat/PythonObjectDetection/master/screenshots/inAction.gif',
            imgClassName: '',
            links: {
                github: 'https://github.com/AshenCat/PythonObjectDetection',
            },
        },
        TaskR: {
            description:
                'A desktop native application to explore the intricasies of ElectronJS with a simple project. ElectronJS powers a lot of known applications in the market such as Discord, VSCode, Obsidian, etc...',
            img: 'https://raw.githubusercontent.com/AshenCat/Taskr/master/media/taskr.gif',
            imgClassName: '',
            links: { github: 'https://github.com/AshenCat/Taskr' },
        },
    })
);

export default ClickableCards;
