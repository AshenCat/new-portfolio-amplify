import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { mainvariant } from '../../../../config/config';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.min.css';
import { marked } from 'marked';
import { useNavigate } from 'react-router-dom';

const sequential = `
\`\`\`typescript
(() => {
    // think of the promises as a fetch request that processes data for 5 seconds before it responds
    console.time();

    // Promise 1
    const promise1 = new Promise(async (resolve) => setTimeout(() => resolve(true), 5000));
    // Promise 2
    const promise2 = new Promise(async (resolve) => setTimeout(() => resolve(true), 5000));

    console.timeEnd();
    console.log({ promise1, promise2 }); 

    // Promise 1: -> 0.5ms
    // Promise 2: -> 0.5ms
    // Result: 0.586ms
    // { promise1: Promise { <pending> }, promise2: Promise { <pending> } }

    // FAST BUT DOES NOT RETURN CORRECT DATA
})();
\`\`\`
`;

const sequential2 = `
\`\`\`typescript
(async () => {
    // think of the promises as a fetch request that processes data for 5 seconds before it responds
    console.time();

    // Promise 1
    const promise1 = await new Promise(async (resolve) => setTimeout(() => resolve(true), 5000))
    // Promise 2
    const promise2 = await new Promise(async (resolve) => setTimeout(() => resolve(true), 5000))

    // Promise 1: -----> 5s
    // Promise 2:       -----> 5s
    // Result: 10.016s

    console.timeEnd();
    console.log({ promise1, promise2 }); // { promise1: true, promise2: true }
    // CORRECT DATA BUT TAKES TWICE AS LONG TO PROCESS
})()
\`\`\`
`;
const parallel = `
\`\`\`typescript
(async () => {
    // think of the promises as a fetch request that processes data for 5 seconds before it responds
    console.time();

    const [promise1, promise2] = await Promise.all([
        new Promise(async (resolve) => setTimeout(() => resolve(true), 5000)),
        new Promise(async (resolve) => setTimeout(() => resolve(true), 5000))
    ]);

    // Promise 1: -----> 5s
    // Promise 2: -----> 5s
    // Result: 5s

    console.timeEnd();
    console.log({ promise1, promise2 }); // { promise1: true, promise2: true }
    // CORRECT DATA AND RESPONDS WHEN THE LONGEST TIME OF PROMISE RESOLVE FINISHES
})()
\`\`\`
`;

function HandlingMultipleAsyncPromises() {
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
                    <small>Wednesday, 8:50PM</small>
                </div>
                <div>
                    <small>November, 15 2023</small>
                </div>
            </div>
            <p className="my-2">
                Despite being single-threaded, Node.js is still capable of
                handling concurrency and multiple I/O operations at the same
                time - thanks to its asynchronous nature.
            </p>
            <p className="my-2">
                Consider the two promise functions below where we need to log
                their actual results:
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(sequential) }}
            />
            <p className="my-2">
                By default, Node.js runs tasks line by line sequentially as per
                the example above. However, nodejs does not wait for the Promise
                to resolve giving us Promise {`{ <pending> }`} values for both.
            </p>

            <p className="my-2">
                To get the actual value, we can either use Promise.then after
                the promise but your entire code will be full of Promise.then-s.
                Instead, we will be using async await.
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(sequential2) }}
            />
            <p className="my-2">
                Now we are getting the correct values but the issue now is that
                the request is now ten seconds long!
            </p>
            <p className="my-2">
                The next goal is to reduce the response length. In order to do
                this, we will change the sequential behaviour into concurrent or
                parallel behaviour. See the code below:
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(parallel) }}
            />
            <p className="my-2"></p>
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

export default HandlingMultipleAsyncPromises;
