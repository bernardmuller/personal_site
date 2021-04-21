import React, { useState, createContext } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = (props) => {

    
    const [showResume, setShowResume] = useState(false);

    return (
        <ResumeContext.Provider value={[showResume, setShowResume]}>
            {props.children}
        </ResumeContext.Provider>
    )
}