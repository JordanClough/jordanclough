import React, {useRef, useState} from "react";
import LongBentoBox from "../components/LongBentoBox";
import EmailIcon from "../assets/email-icon.svg?react";
import PhoneIcon from "../assets/phone-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'pp_contact_me';
        const templateId = 'template_8h28ktp';
        const publicKey = '4Dz1zX68Kks3qKxwN';

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            {publicKey: publicKey}
        ).then(() => {
            console.log('Email sent successfully');
            form.current.reset();
        }, (error) => {
            console.log('Error sending email:', error);
        });
    };
    return(
        <div className="contact">
            <h1>Reach Out At Your Preferred Contact Method</h1>
            <LongBentoBox title="EMAIL" content="jordan_clough@sfu.ca"/>
            <LongBentoBox title="PHONE" content="778-689-3007"/>
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" style={{ resize: 'none' }}/>
                <button type="submit" value="Send">Send</button>
            </form>
            <footer className="contact-footer">
                <a href="mailto:jordan_clough@sfu.ca">
                    <EmailIcon className="footer-icon"/>
                </a>
                <a href="tel:778-689-3007">
                    <PhoneIcon className="footer-icon"/>
                </a>
                <a href="https://github.com/JordanClough" target="_blank" rel="noreferrer">
                    <GithubIcon className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/jordan-clough101" target="_blank" rel="noreferrer">
                    <LinkedinIcon className="footer-icon"/>
                </a>
            </footer>
        </div>
    );
}
export default Contact