import React from 'react'
import './ProjectLink.css'

function ProjectLink({ Icon }) {
    return (
        <div className="projectLink">
            {Icon && <Icon className="linkIcon" />}
        </div>
    )
}

export default ProjectLink
