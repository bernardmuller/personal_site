import React, { useState, useContext } from 'react';
import './Nav.css';
import { AboutContext } from './AboutContext';
import { ResumeContext } from './ResumeContext';

import NavButton from './NavButton';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';

function Nav() {    
    const [showAbout, setShowAbout] = useContext(AboutContext);
    const [showResume, setShowResume] = useContext(ResumeContext);
    
    const toggleAbout = () => {
        setShowResume(false)
        setShowAbout(true)        
    }

    const toggleResume = () => {
        setShowAbout(false)
        setShowResume(true)
    }

    return (
        <div className="nav">
            <div className="nav_Buttons">                 
                <button onClick={toggleAbout}><NavButton Icon={PersonIcon} /></button> 
                <button onClick={toggleResume}><NavButton Icon={DescriptionIcon} /></button>                
             </div>
        </div>
    )
}

export default Nav;
