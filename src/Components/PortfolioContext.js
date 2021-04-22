import React, { useState, createContext } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {

    const [showPortfolio, setShowPortfolio] = useState(false);    

    return (
        <PortfolioContext.Provider value={[showPortfolio, setShowPortfolio]}>
            {props.children}
        </PortfolioContext.Provider>
    )
}