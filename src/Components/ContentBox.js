import React from 'react';
import './ContentBox.css';

//components
import About from './About';
import Resume from './Resume';

function ContentBox() {
    return (
        <div className="contentBox">
             <About /> 
             <Resume />
        </div>
    )
}

export default ContentBox;
