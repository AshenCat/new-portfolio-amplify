import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { mainvariant } from '../../config/config';
import SectionRow from './SectionRow';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';

function BlogIndex() {
    const [openNodeJS, setOpenNodeJS] = useLocalStorage('openNodejs', true);
    const [openReact, setOpenReact] = useLocalStorage('openReact', true);
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
            <div className="flex flex-col">
                <SectionRow
                    title="NodeJS"
                    open={openNodeJS}
                    setOpen={setOpenNodeJS}
                >
                    {openNodeJS && (
                        <>
                            <BlogCard
                                title="Blocking vs Non Blocking"
                                href="/blogs/nodejs/blocking-vs-non-blocking"
                                Icon={FaNodeJs}
                                iconContainerClassName="bg-yellow-300 text-green-500"
                            />
                            <BlogCard
                                title="Handling Multiple Async/Promises"
                                href="/blogs/nodejs/handling-multiple-async-promises"
                                Icon={FaNodeJs}
                                iconContainerClassName="bg-yellow-300 text-green-500"
                            />
                        </>
                    )}
                </SectionRow>
                <SectionRow
                    title="React"
                    open={openReact}
                    setOpen={setOpenReact}
                >
                    {openReact && (
                        <>
                            <BlogCard
                                title="Avoid Expensive Rerenders"
                                href="/blogs/react/avoid-expensive-rerenders"
                                Icon={FaReact}
                                iconContainerClassName="bg-[#282C34] text-[#61DAFB]"
                            />
                            
                        </>
                    )}
                </SectionRow>
            </div>
        </motion.main>
    );
}

export default BlogIndex;
