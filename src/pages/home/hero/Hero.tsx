import React, { useEffect } from 'react';
import IPage from '../../../interfaces/page';
// import './hero.scss';
import { useDencrypt } from 'use-dencrypt-effect';
import { motion } from 'framer-motion';
import BGComponent from './BGComponent.jsx';

const values = [
    'Full Stack Developer',
    'Front End Developer',
    'Software Developer',
];

// type Reveals = {
//     x: number;
//     y: number;
// };

const Hero: React.FunctionComponent<IPage> = () => {
    const [result, dencrypt] = useDencrypt();

    // const h1variant = {
    //     initial: {
    //         fontSize: '.1em',
    //         // color: '#0171B5',
    //     },
    //     animate: {
    //         fontSize: '5em',
    //         // color: '#fff',
    //     },
    // };

    useEffect(() => {
        let i = 0;

        const action = setInterval(() => {
            dencrypt(values[i]);

            i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);

        return () => {
            clearInterval(action);
            // clearTimeout(timeout);
        };
    }, []);

    return (
        <motion.div
            className="w-full h-screen flex flex-col"
            transition={{ duration: 1, delay: 1.5 }}
        >
            <div className="flex flex-col h-full justify-center">
                <div className="w-fit mx-auto p-4 gradient-h1 border-l-8 rounded-md gradient-text-1 mix-blend-difference">
                    <motion.h1 className="leading-none tracking-wider font-semibold text-5xl md:text-[10em] transition-all">
                        Klifford
                        <br />
                        Agujar
                    </motion.h1>
                </div>
            </div>
            {/* Search Engine purposes */}
            <h2 className="hidden">Portfolio</h2>
            <h2 className="hidden">Full Stack Developer</h2>
            <h2 className="hidden">Front End Developer</h2>
            <h2 className="hidden">Software Developer</h2>
            {/* End: Search Engine purposes */}
            <h3 className="absolute left-5 bottom-5 md:text-2xl gradient-text-1 transition-all roboto-slab ">
                {result}&nbsp;
            </h3>
            {/* </div> */}
            <div className="absolute w-full h-screen -z-40 bg-[color:--dark-color-1]">
                <BGComponent />
            </div>
        </motion.div>
    );
};

export default Hero;
