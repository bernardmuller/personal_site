import React, { useState } from 'react'
import emailjs from 'emailjs-com';
// import { useForm } from "react-hook-form";
import './Contact.css'

function Contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false)

    const handleName = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handleSubject = (e) => {  
        console.log(e.target.value)      
        setSubject(e.target.value)
    }

    const handleMessage = (e) => { 
        console.log(e.target.value)       
        setMessage(e.target.value)
    }
    
    const sendEmail = (e) => {
        e.preventDefault();

        // username && email && subject && message ? setValidated(true) : setValidated(false);
        // console.log(validated? "Valid" : "Not Valid")

        emailjs.sendForm('service_xxr32xo', 'template_1rk4obo', e.target, 'user_vFosrWNoOElU5eP5Jw67l')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert("Your message has been sent to Bernard.")
    }

    return (
        <div className="contact">
            <h2>Contact me</h2>
            <p>Thank you for viewing my work. I am always learning new things and will be expanding my portfolio further, and display it here.</p>
            <p>If you like what you see and want to get in touch, feel free to use the form below.</p>
            
            <div className="contact_Container">
                <form onSubmit={sendEmail} className="form">
                    <div className="form_Container">
                        
                        <input className="form_Input" type="text" placeholder="Name" name="username" onChange={handleName} required/> 

                        <input className="form_Input" type="email" placeholder="Email" name="email" onChange={handleEmail} required/>

                        <input className="form_Input" type="text" placeholder="Subject" name="subject" onChange={handleSubject} required/>

                        <textarea className="form_Message" type="textarea" placeholder="Message" name="message" onChange={handleMessage} required/>

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
