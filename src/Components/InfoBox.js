import React from 'react';
import './InfoBox.css';

//Components
import InfoOption from './InfoOption'

// icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function InfoBox({name, picUrl, role}) {
    return (
        <div className="infoBox">
            <div className="info">
                <img src={picUrl} alt={name}/>
                <h1>{name}</h1>
                <h4>{role}</h4>
                <div className="infoOptions">
                    <a href="https://www.linkedin.com/in/bernard-muller-a9a53a174/">
                        <InfoOption Icon={LinkedInIcon}/>
                    </a>                    
                    <a href="https://github.com/bernardmuller">
                        <InfoOption Icon={GitHubIcon}/>
                    </a>                    
                    <a href="https://www.instagram.com/bernard_muller/">
                        <InfoOption Icon={InstagramIcon}/>
                    </a>                
                </div>                
                <a className="cvButton" href="../resume_mockup.pdf" download >Download CV</a>
            </div>
            <div className="copyright">                
                <span>© 2021 Built with <a href="https://reactjs.org/">Reactjs</a></span>
            </div>
        </div>
    )
}

export default InfoBox;
