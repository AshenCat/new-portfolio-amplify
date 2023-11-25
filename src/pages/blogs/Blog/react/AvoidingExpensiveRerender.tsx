import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { mainvariant } from '../../../../config/config';
import { marked } from 'marked';
import { useNavigate } from 'react-router-dom';
import hljs from 'highlight.js';

const diagram = `
\`\`\`
             --------- child 1
             |                  -------child 2/1
Parent Div  -|-------- child 2 -|
             |                  -------child 2/2
             --------- child 3
\`\`\`
`;

const sampleCode1 = `
\`\`\`tsx
const [position, setPosition] = React.useState<number>(150);

const onScroll = (e: Event) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated);
}

return (
    <div className="scrollable" onScroll={onScroll}>
        <MovingBlock position={position} />
        <BunchOfStuff />
        <VerySlowComponent />
        <OtherStuffAlsoComplicated />
    </div>
);
\`\`\`
`;

const sampleCode2 = `
\`\`\`tsx
const ScrollableWithMovingBlock = ({children}: React.PropsWithChildren) => {
    const [position, setPosition] = React.useState<number>(150);

    const onScroll = (e: Event) => {
        const calculated = getPosition(e.target.scrollTop);
        setPosition(calculated);
    }

    return (
        <div className="scrollable" onScroll={onScroll}>
            <MovingBlock position={position} />
            {children}
        </div>
    );
} 

const MainView = () => {
    <ScrollableWithMovingBlock>
        <BunchOfStuff />
        <VerySlowComponent />
        <OtherStuffAlsoComplicated />
    </ScrollableWithMovingBlock>
}
\`\`\`
`;
function AvoidingExpensiveRerender() {
    const navigate = useNavigate();

    useEffect(() => {
        hljs.highlightAll();
        document.title = "Handling Multiple Promises - Klifford's Blog";
    }, []);

    useEffect(() => {
        const blogHeader = document.getElementById('blog-header');
        if (blogHeader) blogHeader.scrollIntoView();
    }, []);

    return (
        <motion.main
            variants={mainvariant}
            initial="initial"
            animate="animate"
            transition={{
                ease: 'easeIn',
            }}
            exit="exit"
            className="p-4 xl:p-[unset] page-container text-lg !my-8"
        >
            <div className="flex flex-col my-4">
                <div>
                    <h2 className="text-2xl gradient-text-1 inline-block">
                        Handling Multiple Async/Promises
                    </h2>
                </div>
                <div>
                    <small>Friday, 8:50PM</small>
                </div>
                <div>
                    <small>November, 24 2023</small>
                </div>
            </div>
            <p className="my-2">
                React triggers a rerender when a state within that DOM nodes
                updates values. It is the reason why it was named React to begin
                with.
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(diagram) }}
            />
            <p className="my-2">
                If the `Parent Div` component changes its state, `Parent Div`
                and every children gets re-rendered including children of `child
                2`.
            </p>
            <p className="my-2">
                If the `child 2` component changes its state, `child 2` and
                every children of `child 2` gets re-rendered.
            </p>
            <p className="my-2">
                Let&apos;s get practical. Consider the code block below:
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(sampleCode1) }}
            />
            <p className="my-2">
                Everytime we scroll the page, we update the state which triggers
                the rerender of all the child components.
            </p>
            <p className="my-2">
                let&apos;s fix this using a cool little trick with react. We
                will utilize react children node to achieve the same behaviour
                but more performant!
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(sampleCode2) }}
            />
            <p className="my-2">
                Now, the expensive components are not part of the
                ScrollableBlock with state so the expensive components will not
                re-render upon state change.
            </p>
            <p className="my-2">
                State is the bread and butter within a react component, however,
                be careful of where you place your state within a component as
                it might get computationally expensive.
            </p>
            <div className="mt-8">
                <button
                    onClick={() => navigate('/blogs')}
                    className="bg-black text-white px-4 py-2"
                >
                    Back to Blogs
                </button>
            </div>
        </motion.main>
    );
}

export default AvoidingExpensiveRerender;
