import '../../styles/main/projects.scss'

/* import { useState, useEffect } from 'react' */

function Projects(props) {

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
                   <p>Projet 1</p>
                   <p>Projet 2</p>
                   <p>Projet 3</p>
                </div>

                <div className='projects_footer'>
                    <p>6 projects</p>
                </div>


            </div>

        </section>
    )
}

export default Projects