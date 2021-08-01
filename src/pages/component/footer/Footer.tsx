import axios from 'axios'
import React from 'react'
import IPage from '../../../interfaces/page'
import { aws_endpoint, aws_key } from '../../../config/config'
import './footer.scss'
import { AiFillWarning } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const Footer: React.FunctionComponent<IPage> = () => {
    const [emailErr, setEmailErr] = React.useState<string>('')
    const [subjectErr, setSubjectErr] = React.useState<string>('')
    const [msgErr, setMsgErr] = React.useState<string>('')

    const [loading, setLoading] = React.useState<boolean>(false)
    const [show, setShow] = React.useState<boolean>(false)
    const [modalErr, setModalErr] = React.useState<boolean>(false)

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        let err = false;

        setEmailErr('')
        setSubjectErr('')
        setMsgErr('')
        console.log(show)

        const sender = (document.getElementById('input-sender') as HTMLInputElement)
        const subject = (document.getElementById('input-subject') as HTMLInputElement)
        const message = (document.getElementById('input-message') as HTMLInputElement)

        if (sender.value !== null && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender.value)) {
            setEmailErr('Enter a valid email...');
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

        if(!err) {
            setLoading(true)
            axios.post(aws_endpoint, {
                sender: sender.value,
                subject: subject.value,
                body: message.value
            }, {
                headers: {
                    "x-api-key": aws_key,
                    "Content-Type": "application/json"
                }
            }).then(res => {
                console.log(res)
                setLoading(false)
                if(res.status !== 200) {
                    setModalErr(true)
                }
                setShow(true)
            }).catch(err => {
                console.log(err)
                setLoading(false)
                setModalErr(true)
                setShow(true)
            })
        }
    }
    return <footer className="footer">
        <h3>Contact</h3>
        <div className="page-container">
            <div className="left">
                <div>
                    Email to: forddagujar95@gmail.com
                </div>
                <br></br>
                <div>
                    <small>I&apos;ll respond as soon as I can. Do not forget to add your email especially if you expect a reply.</small>
                </div>
                <br></br>
                <div>
                    <h4>Media credits</h4>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/black-farmed-eyeglasses-in-front-of-laptop-computer-577585/">Pexels</a></li>
                        <li><a href="https://bgjar.com/wave-line">BGJar</a></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="form-group-area">
                    <label htmlFor="input-sender">Sender Email: </label>
                    <input type="text" name="input-sender" id="input-sender" className="input-short"/>
                    <small>{emailErr}</small>
                </div>
                <div className="form-group-area">
                    <label htmlFor="input-subject">Subject: </label>
                    <input type="text" name="input-subject" id="input-subject" className="input-email" />
                    <small>{subjectErr}</small>
                </div>
                <div className="form-group-area">
                    <label htmlFor="input-message">Message: </label>
                    <textarea name="input-message" id="input-message" className="input-area" />
                    <small>{msgErr}</small>
                </div>
                <div className="btn-container">
                    <button onClick={onSubmit} className={loading ? `btn-submit disabled`: `btn-submit`} id="btn-submit" disabled={loading}>{loading ? <div className="loader"></div> : 'Submit'}</button>
                </div>
            </div>
        </div>
        <div className={show ? `backdrop show` : `backdrop`}>
            <div className="modal">
                <div className="title">
                    <h4>
                        {modalErr ? <div className="err">
                            <AiFillWarning />
                            <span>Failed </span>
                        </div> : <div className="success">
                            <FaCheckCircle />
                            <span>Success </span>
                        </div>}
                    </h4>
                </div>
                <div className="body">
                    {modalErr ? <span>Failed to send message</span> : 'Message successfully sent!'}
                </div>
                <div className="actions">
                    <button onClick={()=>{
                        setModalErr(false)
                        setShow(false)
                    }}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer