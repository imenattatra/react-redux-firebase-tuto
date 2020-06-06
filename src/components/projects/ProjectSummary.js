import React from 'react';

const ProjectSummary = ({project}) => {
    return ( 
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by: Net Ninja</p>
                <p className="gery-text">3rd september, 2020</p>
            </div>
        </div>
     );
}
 
export default ProjectSummary;