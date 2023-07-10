import '../../styles/main/projects.scss'
import React from 'react'

function Projects(props) {

    const projectCount = React.Children.count(props.children)

    return (
        <section className='main_left'>

            <div className='projects'>

                <div className='projects_title'>
                    <h3>C:/Maurine_Duet/Projets/{props.title}</h3>
                    <nav>
                        <ul>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                            <li>Help</li>
                        </ul>
                    </nav>
                </div>

                <div className='projects_main'>
                {props.children}
                </div>

                <div className='projects_footer'>
                    <p>{projectCount} projets</p>
                </div>


            </div>

        </section>
    )
}

export default Projects