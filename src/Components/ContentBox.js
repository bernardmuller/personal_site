import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './ContentBox.css';

import { AboutContext } from './AboutContext';
import { ResumeContext } from './ResumeContext';
import { PortfolioContext } from './PortfolioContext';
import { ContactContext } from './ContactContext';

//components
import About from './About';
import Resume from './Resume';
import Nav from './Nav';
import Welcome from './Welcome';
import Portfolio from './Portfolio';
import Contact from './Contact';


function ContentBox() {    
    
    const [showAbout] = useContext(AboutContext);    
    const [showResume] = useContext(ResumeContext);
    const [showPortfolio] = useContext(PortfolioContext);
    const [showContact] = useContext(ContactContext);
    
    
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });       
    

    if(isMobile) {

        return(
            <div className="contentBox mobile">
                {/* <Nav /> */}
                <About />                    
                {/* <Resume />
                <Portfolio />
                <Contact /> */}
            </div>
        )

    } else {

        return (    
            
                <div className="contentBox">
                    <Nav className="nav"/>
                    {
                        showAbout || showResume || showPortfolio || showContact? null : <Welcome />
                    }
                    {
                        showAbout? <About /> : null
                    }
                    {
                        showResume? <Resume /> : null
                    } 
                    {
                        showPortfolio? <Portfolio /> : null
                    } 
                    {
                        showContact? <Contact /> : null
                    } 
                
                </div>
            
        )
    }
}

export default ContentBox;
