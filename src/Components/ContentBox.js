import React, { useContext, useState } from 'react';
import './ContentBox.css';

import { AboutContext } from './AboutContext';
import { ResumeContext } from './ResumeContext';

//components
import About from './About';
import Resume from './Resume';
import Nav from './Nav';
import Welcome from './Welcome';


function ContentBox() {    
    
    const [showAbout] = useContext(AboutContext);    
    const [showResume] = useContext(ResumeContext);
    
    return (    
         
            <div className="contentBox">
                <Nav/>
                {
                    showAbout || showResume? null : <Welcome />
                }
                {
                    showAbout? <About /> : null
                }
                {
                    showResume? <Resume /> : null
                }  
               
            </div>
         
    )
}

export default ContentBox;
