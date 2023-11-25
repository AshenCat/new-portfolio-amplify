import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';

type BlogCardProps = {
    title: string;
    href: string;
    Icon: IconType;
    iconContainerClassName?: string;
};

function BlogCard({ title, href, Icon, iconContainerClassName }: BlogCardProps) {
    return (
        <motion.article
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            className="flex flex-col md:flex-col basis-[250px] shrink-0 grow-1"
        >
            <NavLink
                to={href}
                className="flex flex-col shadow hover:shadow-lg transition-all h-full"
            >
                <figure className={`text-8xl ${iconContainerClassName || ''} p-4 flex justify-center shrink-0`}>
                    <Icon />
                </figure>
                <div className="flex-1 flex justify-center items-center">
                    <h3 className="text-bold gradient-text-1 p-4 inline-block">
                        <figcaption className="text-center">{title}</figcaption>
                    </h3>
                </div>
            </NavLink>
        </motion.article>
    );
}

export default BlogCard;
