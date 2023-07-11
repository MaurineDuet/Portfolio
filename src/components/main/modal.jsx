import '../../styles/main/modal.scss'

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
                        <p></p>
                        <p></p>
                        <p></p>
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