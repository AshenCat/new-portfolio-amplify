import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCaretRight, FaNodeJs } from 'react-icons/fa';
import useLocalStorage from '../../hooks/useLocalStorage';
import { NavLink } from 'react-router-dom';
import { mainvariant } from '../../config/config';

function BlogIndex() {
    const [openNodeJS, setOpenNodeJS] = useLocalStorage('openNodejs', true);
    return (
        <motion.main
            variants={mainvariant}
            initial="initial"
            animate="animate"
            transition={{
                ease: 'easeIn',
            }}
            exit="exit"
            className="p-4 xl:p-[unset] page-container text-lg !mt-8"
        >
            <p>
                Welcome to my blog where I write about the useful technics and
                technologies gathered from years of wisdom and research.
            </p>
            <div className="flex flex-col md:flex-row my-8">
                <AnimatePresence mode="wait">
                    <section className="border-b-2 flex-1">
                        <button
                            onClick={() => setOpenNodeJS(!openNodeJS)}
                            className="flex items-center"
                        >
                            <span
                                className={`${
                                    openNodeJS ? 'rotate-90' : ''
                                } transition-all mr-2`}
                            >
                                <FaCaretRight />
                            </span>
                            <h2 className="text-2xl gradient-text-1">NodeJS</h2>
                        </button>
                        <div className="py-4">
                            {openNodeJS && (
                                <motion.article
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col md:flex-col w-fit"
                                >
                                    <NavLink
                                        to="blocking-vs-non-blocking"
                                        className="block shadow hover:shadow-lg hover: transition-all"
                                    >
                                        <figure className="text-8xl bg-yellow-300 text-green-500 p-4 flex justify-center">
                                            <FaNodeJs />
                                        </figure>
                                        <h3 className="text-bold gradient-text-1 p-4">
                                            <figcaption>
                                                Blocking vs Non Blocking
                                            </figcaption>
                                        </h3>
                                    </NavLink>
                                </motion.article>
                            )}
                        </div>
                    </section>
                </AnimatePresence>
            </div>
        </motion.main>
    );
}

export default BlogIndex;
