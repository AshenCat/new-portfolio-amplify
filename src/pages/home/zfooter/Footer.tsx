import axios from 'axios'
import React from 'react'
import IPage from '../../../interfaces/page'
import { aws_endpoint, aws_key } from '../../../config/config'
import './footer.scss'

const Footer: React.FunctionComponent<IPage> = () => {
    const [emailErr, setEmailErr] = React.useState<string>('')
    const [subjectErr, setSubjectErr] = React.useState<string>('')
    const [msgErr, setMsgErr] = React.useState<string>('')

    const [loading, setLoading] = React.useState<boolean>(false)

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        let err = false;

        setEmailErr('')
        setSubjectErr('')
        setMsgErr('')

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
                console.log(res.data)
            }).catch(err => {
                console.log(err)
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
                    <input type="text" name="input-sender" id="input-sender" className="input-short" style={{width: '60%'}} />
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
                    <button onClick={onSubmit} className="btn-submit" id="btn-submit">{loading ? <div className="loader"></div> : 'Submit'}</button>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer