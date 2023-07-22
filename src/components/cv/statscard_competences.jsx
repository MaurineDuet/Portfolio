//Style
import '../../styles/cv/card.scss'

//Images
import CheckIcon from '../../assets/cv_check_icon.svg'
import TravelIcon from '../../assets/cv_travel_icon.svg'
import SpeakIcon from '../../assets/cv_speak_icon.svg'
import DrawingIcon from '../../assets/cv_drawing_icon.svg'
import JournalingIcon from '../../assets/cv_journaling_icon.svg'
import SunIcon from '../../assets/cv_sun_icon.svg'

function Competences() {

    return (
        <div className='cv_card_details'>

            <div className='cv_card_title cv_card_global_skills'>
                <h3>Compétences</h3>
                <ul>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        Bla bla
                    </li>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        Bla bla
                    </li>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        blabla
                    </li>

                    <li>
                        <img src={CheckIcon} alt="" />
                        bla
                    </li>
                </ul>
            </div>

            <div className='cv_card_hobbies'>
                <h3>Hobbies</h3>
                <ul>
                    <li>
                        <img src={TravelIcon} alt="" />
                        voyages, particulièrement en Asie
                    </li>
                    <li>
                        <img src={SpeakIcon} alt="" />
                        apprentissage de langues
                    </li>
                    <li>
                        <img src={DrawingIcon} alt="" />
                        UI design et dessin
                    </li>
                    <li>
                        <img src={JournalingIcon} alt="" />
                        journaling et écriture
                    </li>
                </ul>
            </div>

            <div className='cv_card_objectives'>
                <h3>Objectifs</h3>
                <ul>
                    <li>
                        <img src={SunIcon} alt="" />
                        Se lancer en dev freelance
                    </li>
                    <li>
                        <img src={SunIcon} alt="" />
                        Obtenir le TOPIK 5 en coréen
                    </li>
                </ul>
            </div>

        </div >
    )
}

export default Competences