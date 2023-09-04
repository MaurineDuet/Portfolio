//Style
import "../../styles/main/bin.scss"
import '../../styles/main/modal.scss'

//Images
import Vista from '../../assets/vista_logo.png'
import Twitter from '../../assets/twitter_logo.png'
import Text from '../../assets/text.png'

//Basics
import { useState, useEffect } from "react"

function Bin({ closeBinModal }) {

    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [modalPosition, setModalPosition] = useState({
        x: (window.innerWidth - 550) / 2,
        y: (window.innerHeight - 500) / 2,
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

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);

            return () => {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
            };
        }
    }, [isDragging, offsetX, offsetY]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffsetX(e.clientX - modalPosition.x);
        setOffsetY(e.clientY - modalPosition.y);
    };

    return (

        <section className="modal_overlay">

            <div className="modal" style={{ top: modalPosition.y, left: modalPosition.x }}>

                <div className='modal_title'>

                    <div className='modal_title_up' onMouseDown={handleMouseDown}>

                        <h3>C:/Maurine_Duet/Bin</h3>
                        <p className='close_button' onClick={closeBinModal}>
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

                <div className="modal_main bin">
                    <div className="bin_element">
                        <img src={Vista} alt="" />
                        Windows Vista
                    </div>

                    <div className="bin_element">
                        <img src={Text} alt="" />
                        Worries.txt
                    </div>

                    <div className="bin_element">
                        <img src={Twitter} alt="" />
                        Twitter
                    </div>

                </div>

                <div className='modal_footer'>
                    <p>3 éléments</p>
                </div>

            </div>
        </section>
    )
}

export default Bin