import React from 'react'
import './NavButton.css'

function navButton({ Icon }) {
    return (
        <div className="nav_Button">
            {Icon && <Icon className="navButton_Icon" />}
        </div>
    )
}

export default navButton
