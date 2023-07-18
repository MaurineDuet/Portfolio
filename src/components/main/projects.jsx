//Style
import '../../styles/main/projects.scss'

//Basic
import React from 'react'

function Projects(props) {

    const { title/* , height, mainHeight */ } = props //Defining needed props
    const projectCount = React.Children.count(props.children) //Initializing count function for Projects children (in this case, a Project)

/*     const projectsStyle = {
        height: height || 'auto', // Use the passed height or set it to 'auto' if not provided
    };

    const projectsMainStyle = {
        height: mainHeight || 'auto', // Use the passed mainHeight or set it to 'auto' if not provided
    } */

    return (

        <div className='projects' /* style={projectsStyle} */>

            <div className='projects_title'>
                <h3>C:/Maurine_Duet/Projets/{title}</h3>
                <nav>
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Help</li>
                    </ul>
                </nav>
            </div>

            <div className='projects_main' /* style={projectsMainStyle} */>
                {props.children}
            </div>

            <div className='projects_footer'>
                <p>{projectCount} projets</p>
            </div>


        </div>
    )
}

export default Projects