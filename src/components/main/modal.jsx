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

//Basics 
import { useState, useEffect } from 'react'

function Modal({ closeModal, creationdate, name, description, objectives, langages, github }) {

    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [modalPosition, setModalPosition] = useState(() => {
        if (window.innerWidth > 768) {
            // Customize initial position when window width > 768px
            return {
                x: (window.innerWidth - 550) / 2,
                y: (window.innerHeight - 500) / 2,
            };
        } else {
            // Centered position when window width <= 768px
            return {
                x: (window.innerWidth - 350) / 2,
                y: (window.innerHeight - 500) / 2,
            };
        }
    })

    useEffect(() => {
        if (isDragging) {
            const onMouseMove = (e) => {
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;
                setModalPosition({ x: newX, y: newY });
            };

            const onMouseUp = () => {
                setIsDragging(false);
            };

            const onTouchMove = (e) => {
                if (isDragging && e.touches.length === 1) {
                    const newX = e.touches[0].clientX - offsetX;
                    const newY = e.touches[0].clientY - offsetY;
                    setModalPosition({ x: newX, y: newY });
                }
            };

            const onTouchEnd = () => {
                if (isDragging) {
                    setIsDragging(false);
                }
            }

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', onTouchEnd);

            return () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
                window.removeEventListener('touchmove', onTouchMove);
                window.removeEventListener('touchend', onTouchEnd)
            };
        }
    }, [isDragging, offsetX, offsetY]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffsetX(e.clientX - modalPosition.x);
        setOffsetY(e.clientY - modalPosition.y);
    }

    const handleTouchStart = (e) => {
        if (e.touches.length === 1) {
            e.preventDefault(); // Prevent default to prevent scrolling while dragging
            setIsDragging(true);
            setOffsetX(e.touches[0].clientX - modalPosition.x);
            setOffsetY(e.touches[0].clientY - modalPosition.y);
        }
    }

    return (
        <div className="modal_overlay">

            <div className="modal" style={{ top: modalPosition.y, left: modalPosition.x }}>

                <div className='modal_title'>

                    <div className='modal_title_up' onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>

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