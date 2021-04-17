import React from 'react'
import './InfoOption.css'

function InfoOption({ avatar, title, Icon }) {
    return (
        <div className="infoOption">
            {Icon && <Icon className="infoOption_icon" />}
        </div>
    )
}

export default InfoOption
