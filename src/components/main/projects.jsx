//Style
import '../../styles/main/projects.scss'

//Basic
import React from 'react'

function Projects(props) {

    const { title } = props //Defining needed props
    const projectCount = React.Children.count(props.children) //Initializing count function for Projects children (in this case, a Project)

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