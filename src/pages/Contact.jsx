import React, {useState} from "react";
import LongBentoBox from "../components/LongBentoBox";
import emailIcon from "../assets/email_icon.png";
import phoneIcon from "../assets/phone_icon.png";
import githubIcon from "../assets/github_icon.png";
import linkedinIcon from "../assets/linkedin_icon.png";

function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }
    return(
        <div className="contact">
            <h1>Reach Out At Your Preferred Contact Method</h1>
            <LongBentoBox title="EMAIL" content="jordan_clough@sfu.ca"/>
            <LongBentoBox title="PHONE" content="778-689-3007"/>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} style={{ resize: 'none' }}/>
                <button type="submit">Send</button>
            </form>
            <footer className="contact-footer">
                <a href="mailto:jordan_clough@sfu.ca">
                    <img src={emailIcon} alt="Email" />
                </a>
                <a href="tel:778-689-3007">
                    <img src={phoneIcon} alt="Phone" />
                </a>
                <a href="https://github.com/JordanClough" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/jordan-clough-75246b234" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </footer>
        </div>
    );
}
export default Contact