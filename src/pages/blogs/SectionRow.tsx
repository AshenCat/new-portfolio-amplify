import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaCaretRight } from 'react-icons/fa';

interface SectionRowProps extends React.PropsWithChildren {
    setOpen: (val: any) => void;
    open: boolean;
    title: string;
}

function SectionRow({ setOpen, open, children, title }: SectionRowProps) {
    return (
        <section className="border-b-2 flex-1 my-4">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center"
            >
                <span
                    className={`${open ? 'rotate-90' : ''} transition-all mr-2`}
                >
                    <FaCaretRight />
                </span>
                <h2 className="text-2xl gradient-text-1">{title}</h2>
            </button>
            <div className="flex flex-col md:flex-row py-4 gap-4">
                <AnimatePresence mode="wait">{children}</AnimatePresence>
            </div>
        </section>
    );
}

export default SectionRow;
