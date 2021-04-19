import React, { useState } from 'react';
import './ContentBox.css';

//components
import About from './About';
import Resume from './Resume';
import NavButton from './NavButton';

import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';


function ContentBox() {  
    const [showAbout, setShowAbout]=useState(true) 
    const [showResume, setShowResume]=useState(false) 

    const toggleAbout = () => {
        setShowResume(false)
        setShowAbout(true)        
    }

    const toggleResume = () => {
        setShowAbout(false)
        setShowResume(true)
    }

    return (        
        <div className="contentBox">
            {
                showAbout? <About /> : null 
            }
            {
                showResume? <Resume /> : null
            }   
            
             <div className="nav_Buttons">
                 
                <button onClick={toggleAbout}><NavButton Icon={PersonIcon} /></button> 
                <button onClick={toggleResume}><NavButton Icon={DescriptionIcon} /></button>
                
             </div>
        </div>
    )
}

export default ContentBox;
