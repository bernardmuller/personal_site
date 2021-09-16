import React from 'react';
import './Window.css';
import { AboutProvider } from './AboutContext';
import { ResumeProvider } from './ResumeContext';
import { PortfolioProvider } from './PortfolioContext';
import { ContactProvider } from './ContactContext';

// Components
import InfoBox from './InfoBox';
import ContentBox from './ContentBox';


function Window() {
    return (
        <div className="window">
            <InfoBox 
            picUrl="https://avatars.githubusercontent.com/u/61446115?v=4" 
            name="Bernard Muller"
            role="Junior Software Engineer"/>  
            <AboutProvider>
                <ResumeProvider>
                    <PortfolioProvider>
                        <ContactProvider>
                            <ContentBox />
                        </ContactProvider>
                    </PortfolioProvider>
                </ResumeProvider>
            </AboutProvider>                  
        </div>
    );
}

export default Window;
