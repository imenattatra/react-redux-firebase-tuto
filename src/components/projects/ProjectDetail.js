import React from 'react';

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by : Net Ninja</div>
                    <div>6th June, 2020</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;