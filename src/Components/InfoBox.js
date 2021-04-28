import React, { useState } from 'react';
import './InfoBox.css';

//Components
import InfoOption from './InfoOption';
// icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import CallMadeIcon from '@material-ui/icons/CallMade';

function InfoBox({name, picUrl, role}) {
    const [hover, setHover] = useState(false);

    return (
        <div className="infoBox">
            <div className="info">
                <img src={picUrl} alt={name}/>
                <h1>{name}</h1>
                <h4>{role}</h4>
                <div className="infoOptions">
                    <a href="https://www.linkedin.com/in/bernard-muller-a9a53a174/" target="_blank">
                        <InfoOption Icon={LinkedInIcon}/>
                    </a>                    
                    <a href="https://github.com/bernardmuller" target="_blank">
                        <InfoOption Icon={GitHubIcon}/>
                    </a>                    
                    <a href="https://www.instagram.com/bernard_muller/" target="_blank">
                        <InfoOption Icon={InstagramIcon}/>
                    </a>                
                </div>                
                <a className="cvButton" href="./resume.pdf" download="resume.pdf">Download CV</a>
            </div>
            <div className="copyright">                
                <span>
                    © 2021 Built with  
                     <a  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                        href="https://reactjs.org/" target="_blank">
                            Reactjs
                            {hover? <CallMadeIcon className="link_Arrow"/>: null}
                    </a>
                </span>
            </div>
        </div>
    )
}

export default InfoBox;
