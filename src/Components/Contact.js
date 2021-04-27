import React from 'react'
import emailjs from 'emailjs-com';
// import { useForm } from "react-hook-form";
import './Contact.css'

function Contact() {
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xxr32xo', 'template_1rk4obo', e.target, 'user_vFosrWNoOElU5eP5Jw67l')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div className="contact">
            <h2>Contact me</h2>
            <p>Thank you for viewing my work. I am always learning new things and will be expanding my portfolio further, and display it here.</p>
            <p>If you like what you see and want to get in touch, feel free to use the form below.</p>
            <div className="contact_Container">
                <form onSubmit={sendEmail} className="form">
                    <div className="form_Container">
                        
                        <input className="form_Input" type="text" placeholder="Name" name="name" /> 

                        <input className="form_Input" type="email" placeholder="Email" name="email" />

                        <input className="form_Input" type="text" placeholder="Subject" name="subject" />

                        <textarea className="form_Message" type="textarea" placeholder="Message" name="message" />

                        <input className="submit_Button"type="submit" value="Send Message"/>
                        
                    </div>
                </form>
            </div> 
            <div className="copyRight">
            <span>© 2021 Built with <a href="https://reactjs.org/" target="_blank">Reactjs</a></span>
            </div>                     
        </div>
    )
}

export default Contact
