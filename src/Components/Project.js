import React from 'react';
import './Project.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';


import ProjectLink from './ProjectLink'

function Project({name, desc, Image, github , demo}) {
    return (
        <div className="project">            
            {Image && <img src={Image} alt=""/>}
            <div className="projectInfo">
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="links">
                    <a className="tooltip" href={github} target="_blank" ><ProjectLink Icon={GitHubIcon} /><span className="tooltiptext">View Code</span></a>
                    <a className="tooltip" href={demo} target="_blank" ><ProjectLink Icon={WebIcon} /><span className="tooltiptext">Live Demo</span></a>                
                </div>

            </div>
            
        </div>
    )
}

export default Project;
