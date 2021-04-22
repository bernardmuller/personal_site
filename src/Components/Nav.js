import React, { useState, useContext } from 'react';
import './Nav.css';
import { AboutContext } from './AboutContext';
import { ResumeContext } from './ResumeContext';
import { PortfolioContext } from './PortfolioContext';
import { ContactContext } from './ContactContext';

import NavButton from './NavButton';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Nav() {    
    const [showAbout, setShowAbout] = useContext(AboutContext);
    const [showResume, setShowResume] = useContext(ResumeContext);
    const [showPortfolio, setShowPortfolio] = useContext(PortfolioContext);
    const [showContact, setShowContact] = useContext(ContactContext);

    
    const toggleAbout = () => {
        setShowResume(false)
        setShowContact(false)
        setShowPortfolio(false)
        setShowAbout(true)        
    }

    const toggleResume = () => {
        setShowAbout(false)
        setShowContact(false)
        setShowPortfolio(false)
        setShowResume(true)
    }

    const togglePortfolio = () => {
        setShowAbout(false)
        setShowResume(false)
        setShowContact(false)
        setShowPortfolio(true)
    }

    const toggleContact = () => {
        setShowAbout(false)
        setShowResume(false)
        setShowPortfolio(false)
        setShowContact(true)
    }

    return (
        <div className="nav">
            <div className="nav_Buttons">                 
                <button className="tooltip" onClick={toggleAbout}><NavButton Icon={PersonIcon} /><span className="tooltiptext">About Me</span></button> 
                <button className="tooltip" onClick={toggleResume}><NavButton Icon={DescriptionIcon} /><span className="tooltiptext">Resume</span></button>                
                <button className="tooltip" onClick={togglePortfolio}><NavButton Icon={WorkIcon} /><span className="tooltiptext">Portfolio</span></button>                
                <button className="tooltip" onClick={toggleContact}><NavButton Icon={ChatBubbleIcon} /><span className="tooltiptext">Contact</span></button>                
             </div>
        </div>
    )
}

export default Nav;
