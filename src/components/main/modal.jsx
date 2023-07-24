//Style
import '../../styles/main/modal.scss'
import '../../styles/main/collapsible.scss'

//Component
import Collapsible from './collapsible'

//Image
import GoToProject from '../../assets/go_to_project.svg'
import ProjectImg1 from '../../assets/project_img_1.jpg'
import ProjectImg2 from '../../assets/project_img_2.jpg'
import ProjectImg3 from '../../assets/project_img_3.jpg'

function Modal({ closeModal, creationdate, name, description, objectives, langages, github }) {

    return (
        <div className="modal_overlay">

            <div className="modal">

                <div className='modal_title'>

                    <div className='modal_title_up'>

                        <h3>C:/Maurine_Duet/{name}</h3>
                        <p className='close_button' onClick={closeModal}>
                            X
                        </p>

                    </div>

                    <nav>
                        <ul>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                            <li>Help</li>
                        </ul>
                    </nav>

                </div>

                <div className='modal_main'>

                    <a className='go_to_project' href={github} target="_blank" rel="noreferrer">
                        <img src={GoToProject} alt="Icone aller au projet" />
                        Accéder au projet
                    </a>

                    <div className='project_details'>

                        <Collapsible label="Description du projet">
                            <img src={ProjectImg1} alt="Meme de chat" />
                            <p className='collapsible_text'>
                                {description}
                            </p>
                        </Collapsible>

                        <Collapsible label="Objectifs du projet">
                            <p className='collapsible_text'>
                                {objectives}
                            </p>
                            <img src={ProjectImg2} alt="Petit astronaute" />
                        </Collapsible>

                        <Collapsible label="Langages">
                            <img src={ProjectImg3} alt="Petit personnage" />
                            <p className='collapsible_text'>
                                {langages}
                            </p>
                        </Collapsible>

                    </div>


                </div>


                <div className='modal_footer'>
                    <p>Date de création : {creationdate}</p>
                </div>

            </div>

        </div>
    )
}

export default Modal