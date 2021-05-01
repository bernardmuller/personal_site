import React, { useState } from 'react';
import './About.css'; 

import CallMadeIcon from '@material-ui/icons/CallMade';

function About() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);


    return (
        <div id="about_Link" className="about">
            <h2>About me</h2>
            <section className="about_Container">                
                <div className="about_Me">
                    <p>Hi 👋, my name is Bernard, architectural technologist by day and software developer by night.</p>
                    <p>I studied Architecture at the University of Pretoria and graduated in 2018. Although I really enjoyed my course,
                        I always felt a bit unfulfilled with it and knew architecture might not be for me in the long run. 
                        I was always on the lookout for something I can do to stimulate my creativity and my love for problem solving 
                        while still useing the core principles of planning and design that I learned in architecture school.</p>
                    <p>In my free time, you can find me in front of my computer busy fixing broken code I have written. I love learning new things, 
                        and since I found my interest in programming I have been fully immersing myself in it and the word of tech. 
                        Im always on platforms like <a href="https://www.youtube.com/" target="_blank"> Youtube</a>, <a href="https://www.coursera.org/" target="_blank"> Coursera</a>,   
                         <a href="https://www.freecodecamp.org/" target="_blank"> Freecodecamp</a>, or <a href="https://www.udemy.com/" target="_blank"> Udemy</a> busy learning new things programming related, 
                        reading through documentation of APIs I might use in future projects, or scrolling through the 
                        <a href="https://www.reddit.com/r/webdev/" target="_blank"> r/webdev</a> subreddit on Reddit to see what other people are building. 
                        I like listening to podcasts like  The <a href="https://www.codenewbie.org/podcast" target="_blank"> CodeNewbie</a> podcast, 
                        a podcast dedicated to helping new developers with their transition into the industry.</p>
                    <p>Software development has taugh me new ways of approaching a problem </p>
                    <p>I'm currently working hard on my goal to build projects and land a job in tech.</p>
                </div>                
                <div className="about_Info">
                    <div className="about_Info_Headings">
                        <p><span className="about_Info_Heading">Born</span>23 May 1996</p> 
                        <p>
                            <span className="about_Info_Heading">
                                Home
                            </span>
                            <a  onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}
                                href="https://www.google.co.za/maps/place/Cape+Town/@-33.914651,18.3758815,10z/data=!3m1!4b1!4m5!3m4!1s0x1dcc500f8826eed7:0x687fe1fc2828aa87!8m2!3d-33.9248685!4d18.4240553" target="_blank">
                                    Cape Town, South Africa
                                    {hover1? <CallMadeIcon className="link_Arrow"/>: null}  
                            </a>
                        </p>
                        <p>
                            <span className="about_Info_Heading">
                                Education
                            </span>
                            <a onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} href="https://www.up.ac.za/" target="_blank">
                                University of Pretoria
                                {hover2? <CallMadeIcon className="link_Arrow"/>: null}                                
                            </a>
                        </p>  
                        {/* <p><span className="about_Info_Heading">Email</span>b.mullerjnr@gmail.com</p>                       */}
                        <p>
                            <span className="about_Info_Heading">
                                Personality Type
                            </span>
                            <a  onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}
                                href="https://www.16personalities.com/istp-personality" 
                                target="_blank">
                                    ISTP-A
                                    {hover3? <CallMadeIcon className="link_Arrow"/>: null} 
                            </a>
                        </p> 
                    </div>
                    <div className="about_Tech">
                        <h3>Technologies I use</h3>
                        <div className="tech">
                            <img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" alt=""/>
                            <img src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js" alt=""/>
                            <img src="https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white" alt=""/>
                            <img src="https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3" alt=""/>
                            <img src="https://img.shields.io/badge/-Bootstrap-black?style=flat-square&logo=bootstrap" alt=""/>
                            <img src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react" alt=""/>
                            <img src="https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux" alt=""/>
                            <img src="https://img.shields.io/badge/-Python-black?style=flat-square&logo=Python" alt=""/>
                            <img src="https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb" alt=""/>
                            <img src="https://img.shields.io/badge/-Heroku-black?style=flat-square&logo=heroku" alt=""/>
                            <img src="https://img.shields.io/badge/-Netlify-black?style=flat-square&logo=netlify" alt=""/>
                            <img src="https://img.shields.io/badge/-Firebase-black?style=flat-square&logo=firebase" alt=""/>
                            <img src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" alt=""/>
                            <img src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github" alt=""/>
                            
                        </div>
                    </div>
                </div>
            </section>
                     
        </div>
    )
}

export default About
