import React, { useState, createContext } from 'react';

export const AboutContext = createContext();

export const AboutProvider = (props) => {

    const [showAbout, setShowAbout] = useState(false);    

    return (
        <AboutContext.Provider value={[showAbout, setShowAbout]}>
            {props.children}
        </AboutContext.Provider>
    )
}