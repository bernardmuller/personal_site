import React, { useState } from 'react'
import './Portfolio.css'
import Project from './Project'

import timesheetWeb from './timesheetWeb.PNG';
import personal_site from './personal_site.PNG';
import auto_timesheet from './auto_timesheet.PNG';
import dad_joke from './dad_joke.PNG';
import linkedin from './linkedin.PNG';


function Portfolio() {
    // const [Collapsed, setCollapsed] = useState(false);

    // const toggleCollapse = () => {
    //     setCollapsed(!Collapsed)
    // }

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            {/* <button className="showBtn" onclick={toggleCollapse}>Show Portfolio</button> */}
            <div className={`projects_Container`}>
                <Project 
                    name="My Personal Site"
                    desc="A 'business card' site I built for myself as a way to display my work and develop my ReactJS skills."
                    className="project"
                    Image={personal_site} 
                    github='https://github.com/bernardmuller/bernardmuller_site' 
                    demo='https://bernardmuller.netlify.app/'
                />
                <Project 
                    name="Timesheet Web"
                    desc="'Auto Timesheet' refactored in Express, Nodejs and MongoDB, with a REST API backend, user authentication and both browser and server side validation."
                    className="project"
                    Image={timesheetWeb} 
                    github='https://github.com/bernardmuller/timesheet' 
                    demo='https://timesheets-cnr.herokuapp.com/'
                />
                <Project 
                    name="Linkedin Clone"
                    desc="A Linkedin clone built using Reactjs, Redux and Firebase. This one is still a work in progress... It has lots of bugs. :("
                    className="project"
                    Image={linkedin} 
                    github='https://github.com/bernardmuller/linkedin-clone' 
                    
                />
                <Project 
                    name="Auto Timesheet"
                    desc="An automation app that helps an employee with the tracking of their work everyday. My first real-world project built in Python."
                    className="project"
                    Image={auto_timesheet} 
                    github='https://github.com/bernardmuller/auto_timesheet' 
                    
                />
                <Project 
                    name="Dad Joke Generator"
                    desc="An app that generates dad jokes using the icanhazdadjoke.com API."
                    className="project"
                    Image={dad_joke} 
                    github='https://github.com/bernardmuller/DadJokeGenerator/tree/master' 
                    demo="https://bernardmuller.github.io/DadJokeGenerator/"
                    
                />
            </div>
            
        </div>
    )
}

export default Portfolio;
