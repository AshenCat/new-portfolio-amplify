import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { mainvariant } from '../../../config/config';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.min.css';
import { marked } from 'marked';
import base0 from './images/base-0.png';
import blocking0 from './images/blocking-0.png';
import BaseWithBlocking from './images/Base-with-Blocking.png';
import { useNavigate } from 'react-router-dom';

const reg = `
\`\`\`typescript
/* Fast Request 10ms */
app.get('/api', (req: Request, res: Response) => {
    res.send();
});
\`\`\`
`;

const blocking = `
\`\`\`typescript
/* Blocking Request 10s */
app.get('/api/blocking', (req: Request, res: Response) => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + 10000) {}
    res.send();
});
\`\`\`
`;

const nonBlocking = `
\`\`\`typescript
/* NonBlocking Request 10s */
app.get('/api/non-blocking', async (req: Request, res: Response) => {
    await new Promise(async (resolve) => setTimeout(() => resolve({}), 10000));
    res.send();
});
\`\`\`
`;

function BlockingVsNonBlocking() {
    const navigate = useNavigate();

    useEffect(() => {
        hljs.highlightAll();
        document.title = "Blocking vs. Non-Blocking - Klifford's Blog";
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
                <h2 className="text-2xl gradient-text-1 inline-block">
                    Blocking Vs. Non-Blocking
                </h2>
                <small>Wednesday, 08:14pm, August 15 2023</small>
            </div>

            <p className="my-2">
                Blocking is when the execution of additional JavaScript in the
                Node.js process must wait until a non-JavaScript operation
                completes. This happens because the event loop is unable to
                continue running JavaScript while a blocking operation is
                occurring.
            </p>
            <p className="my-2">
                When architecting a backend API, it is essential to exectute
                everything as non-blocking code. If a blocking code is executed
                called on the backend server, any subsequent requests will have
                to wait for the blocking code to finish before it can get a
                response.
            </p>
            <p className="my-2">
                Consider these base request and blocking request snippets from a
                Node + Express application and their response times
                respectively:
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(reg) }}
            />
            <div className="my-2">
                <img src={base0} alt="Postman 10ms base request" />
            </div>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(blocking) }}
            />
            <div className="">
                <img src={blocking0} alt="Postman 10s blocking request" />
            </div>
            <p className="my-2">
                If a request is sent after the blocking api was called, then the
                request will have to wait for the blocking api to finish
                processing (8.5s seconds + 1.5 seconds caused by my slow hands
                for this instance) and that is not good for the frontend client.
            </p>
            <div className="my-2">
                <img
                    src={BaseWithBlocking}
                    alt="Postman 10s base request heavily delayed by blocking request"
                />
            </div>
            <p className="my-2">
                To avoid this, the blocking code must be handled by a different
                dedicated service workers. To keep things simple, we&apos;ll
                just transform the request as a promise - think of it as an AJAX
                request waiting for the response.
            </p>
            <div
                className="my-2"
                dangerouslySetInnerHTML={{ __html: marked(nonBlocking) }}
            />
            <p className="my-2">
                Now, the base request is unaffected by the 10s request!
            </p>
            <div className="my-2">
                <img
                    src={base0}
                    alt="Postman 10ms base request unaffected by non-blocking request"
                />
            </div>
            <div className='mt-8'>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-black text-white px-4 py-2"
                >
                    Go Back
                </button>
            </div>
        </motion.main>
    );
}

export default BlockingVsNonBlocking;
