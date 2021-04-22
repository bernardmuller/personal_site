import React, { useState, createContext } from 'react';

export const ContactContext = createContext();

export const ContactProvider = (props) => {

    const [showContact, setShowContact] = useState(false);    

    return (
        <ContactContext.Provider value={[showContact, setShowContact]}>
            {props.children}
        </ContactContext.Provider>
    )
}