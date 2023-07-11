import '../../styles/main/modal.scss'
import '../../styles/main/collapsible.scss'

import Collapsible from './collapsible'

//Image
import GoToProject from '../../assets/go_to_project.svg'

const Modal = ({ closeModal, creationDate, name }) => {

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

                    <div className='go_to_project'>
                        <img src={GoToProject} alt="Icone aller au projet" />
                        <p>Accéder au projet</p>
                    </div>

                    <div className='project_details'>

                        <Collapsible label="Fiabilité">
                            <p className='collapsible_text'>
                                Les annonces postées sur Kasa garantissent
                                une fiabilité totale. Les photos sont
                                conformes aux logements, et toutes les
                                informations sont régulièrement vérifiées
                                par nos équipes.
                            </p>
                        </Collapsible>

                    </div>


                </div>


                <div className='modal_footer'>
                    <p>Date de création : {creationDate}</p>
                </div>

            </div>

        </div>
    )
}

export default Modal