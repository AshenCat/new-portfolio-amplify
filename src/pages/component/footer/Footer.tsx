import axios from 'axios';
import React from 'react';
import IPage from '../../../interfaces/page';
import { aws_endpoint, aws_key } from '../../../config/config';
// import './footer.scss'
import { AiFillWarning } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';

const Footer: React.FunctionComponent<IPage> = () => {
    const [emailErr, setEmailErr] = React.useState<string>('');
    const [subjectErr, setSubjectErr] = React.useState<string>('');
    const [msgErr, setMsgErr] = React.useState<string>('');

    const [sendSuccess, setSendSuccess] = React.useState<boolean>(false);
    const [sendFailed, setSendFailed] = React.useState<boolean>(false);

    const [loading, setLoading] = React.useState<boolean>(false);

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        let err = false;

        setEmailErr('');
        setSubjectErr('');
        setMsgErr('');
        setSendSuccess(false);
        setSendFailed(false);

        const sender = document.getElementById(
            'input-sender'
        ) as HTMLInputElement;
        const subject = document.getElementById(
            'input-subject'
        ) as HTMLInputElement;
        const message = document.getElementById(
            'input-message'
        ) as HTMLInputElement;

        if (
            sender.value !== null &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender.value)
        ) {
            setEmailErr('Enter a valid email');
            sender.focus();
            err = true;
        }
        if (subject.value.length === 0 || message.value.length > 256) {
            setSubjectErr('Must not be empty and less than 256 characters');
            subject.focus();
            err = true;
        }
        if (message.value.length === 0 || message.value.length > 10000) {
            setMsgErr('Must not be empty and less than 10000 characters');
            message.focus();
            err = true;
        }

        if (!err) {
            setLoading(true);
            console.log('hash', aws_key);
            axios
                .post(
                    aws_endpoint,
                    {
                        sender: sender.value,
                        subject: subject.value,
                        body: message.value,
                    },
                    {
                        headers: {
                            'x-api-key': aws_key,
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    setLoading(false);
                    if (res.status !== 200) {
                        setSendFailed(true);
                        return;
                    }
                    sender.value = '';
                    subject.value = '';
                    message.value = '';
                    setSendSuccess(true);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setSendFailed(true);
                });
        }
    };
    return (
        <footer className="bg-[color:var(--dark-color-1)] text-[#f6f6f6] flex flex-col p-4">
            <div className="text-center my-8">
                <h3 className="text-3xl font-semibold gradient-text-1 inline-block">
                    Contact
                </h3>
            </div>
            <div className="page-container w-full flex flex-col gap-4">
                {sendSuccess && (
                    <div className="bg-green-400 p-8 flex items-center max-w-[400px] mx-auto">
                        <span className="pr-2">Message Successfully Sent!</span>
                        <FaCheckCircle className="text-green-800 text-4xl" />
                    </div>
                )}
                {sendFailed && (
                    <div className="bg-red-400 p-8 flex items-center max-w-[400px] mx-auto">
                        <span className="pr-2">
                            Failed to send email. Please manually send email.
                        </span>
                        <AiFillWarning className="text-red-800 text-4xl" />
                    </div>
                )}
                <div>
                    <label htmlFor="mailto">Mail to:</label>
                    <a href="mailto:forddagujar95@gmail.com" id="mailto">
                        forddagujar95@gmail.com
                    </a>
                </div>
                <div className="flex flex-col">
                    <label className="text-[whitesmoke]" htmlFor="input-sender">
                        Sender Email:{' '}
                    </label>
                    <input
                        type="text"
                        name="input-sender"
                        id="input-sender"
                        className={`p-2 w-full max-w-[380px] dark-color ${
                            emailErr.length ? 'border-2 border-red-400' : ''
                        }`}
                    />
                    <small className="text-red-400">{emailErr}</small>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-[whitesmoke]"
                        htmlFor="input-subject"
                    >
                        Subject:{' '}
                    </label>
                    <input
                        type="text"
                        name="input-subject"
                        id="input-subject"
                        className={`p-2 dark-color ${
                            subjectErr.length ? 'border-2 border-red-400' : ''
                        }`}
                    />
                    <small className="text-red-400">{subjectErr}</small>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-[whitesmoke]"
                        htmlFor="input-message"
                    >
                        Message:{' '}
                    </label>
                    <textarea
                        name="input-message"
                        id="input-message"
                        className={`p-2 h-[300px] dark-color ${
                            msgErr.length ? 'border-2 border-red-400' : ''
                        }`}
                    />
                    <small className="text-red-400">{msgErr}</small>
                </div>
                <div className="flex justify-end mt-4 mb-8">
                    <button
                        onClick={onSubmit}
                        className="p-2 shadow border-2"
                        id="btn-submit"
                        disabled={loading}
                    >
                        {loading ? <div className="loader"></div> : 'Submit'}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
