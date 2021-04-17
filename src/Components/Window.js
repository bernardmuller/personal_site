import React from 'react';
import './Window.css';

// Components
import InfoBox from './InfoBox';
import ContentBox from './ContentBox';


function Window() {
    return (
        <div className="window">
            <InfoBox 
            picUrl="https://avatars.githubusercontent.com/u/61446115?v=4" 
            name="Bernard Muller"
            role="Software Developer"/>  
            <ContentBox />
        </div>
    );
}

export default Window;
