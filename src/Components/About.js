import React from 'react';
import './About.css'; 

function About() {
    return (
        <div className="about">
            <h2>About me</h2>
            <section className="about_Top">                
                <div className="about_Top_Left">
                    <p className="about_Me">Hi, my name is Bernard. I studied Architecture at the University of Pretoria and graduated in 2018. Although I really enjoyed my course, I always felt a bit unfulfilled with it and knew architecture might not be for me in the long run. I was always on the lookout for something I can do to stimulate my creativity and my love for problem solving while still use the core principles of planning and design that I learned in architecture school.</p>
                </div>                
                <div className="about_Top_Right">
                    <p><span className="about_Info_Heading">Age</span>24</p> 
                    <p><span className="about_Info_Heading">From</span>Cape Town, South Africa</p> 
                    <p><span className="about_Info_Heading">Email</span>b.mullerjnr@gmail.com</p> 
                    <p><span className="about_Info_Heading">Phone</span>+27 78 213 3024</p> 
                </div>
            </section>  
            <section className="about_Bottom">
                <h3>Interests and Hobbies</h3>
            </section>           
        </div>
    )
}

export default About
