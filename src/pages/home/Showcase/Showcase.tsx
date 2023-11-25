import React from 'react';
import ClickableCards from './ShowcaseItems/ClickableCards';
import Separator from '../../../components/Separator/Separator';
import AnimatedCards from './ShowcaseItems/AnimatedCards';
import SortableCards from './ShowcaseItems/Sortable/SortableCards';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import BlogCard from '../../blogs/BlogCard';

function Showcase() {
    return (
        <section className="p-4">
            <div className="page-container">
                <Separator n={9} baseVelocity={6} scrollerId="SHOWCASE">
                    <h3 className="text-center text-3xl font-semibold gradient-text-1">
                        Showcase
                    </h3>
                </Separator>
                <div className="flex flex-col gap-x-5 mt-12">
                    <AnimatedCards />
                    <ClickableCards />
                    <SortableCards />
                </div>
                <div className="pt-8 pb-4">
                    I&apos;ve recently started writing blogs about technics and
                    technologies. Come check it out!
                </div>
                <div className="flex flex-col md:flex-row gap-4 overflow-hidden py-2">
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
                    <BlogCard
                        title="Avoid Expensive Rerenders"
                        href="/blogs/react/avoid-expensive-rerenders"
                        Icon={FaReact}
                        iconContainerClassName="bg-[#282C34] text-[#61DAFB]"
                    />
                    {[...Array(4)].map((_, i) => (
                        <article
                            key={'blogs-skeleton-' + i}
                            className="flex-col md:flex-col basis-[250px] shrink-0 grow-1 hover:opacity-50 transition-all hidden md:flex"
                        >
                            <div className="flex flex-col shadow hover:shadow-sm transition-all h-full cursor-not-allowed">
                                <figure className="p-4 flex justify-center w-full flex-1 gradient-bg-metal gradient-animation-1"></figure>
                                <h3 className="text-bold gradient-text-1 p-4">
                                    <figcaption>
                                        &nbsp;
                                        <br />
                                        &nbsp;
                                    </figcaption>
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Showcase;
