//Style
import '../../styles/cv/card.scss'

//Images
import TravelIcon from '../../assets/cv_travel_icon.svg'
import SpeakIcon from '../../assets/cv_speak_icon.svg'
import DrawingIcon from '../../assets/cv_drawing_icon.svg'
import JournalingIcon from '../../assets/cv_journaling_icon.svg'
import SunIcon from '../../assets/cv_sun_icon.svg'

function Competences() {

    return (
        <div className='cv_card_details'>

            <div className='cv_card_title cv_card_skills'>
                <h3>Compétences</h3>
                <ul>
                    <li>
                        <progress id="strong_skills" max="100" value="100"></progress>
                        <label for="strong_skills">créativité, autonomie, organisation, travail méticuleux</label>
                    </li>
                    <li>
                        <progress id="good_skills" max="100" value="75"></progress>
                        <label for="good_skills">gestion de projet, engagement, travail de groupe</label>
                    </li>
                    <li>
                        <progress id="average_skills" max="100" value="50"></progress>
                        <label for="average_skills">leadership, management</label>
                    </li>
                    <li>
                        <progress id="weak_skills" max="100" value="25"></progress>
                        <label for="weak_skills">relation clients, logistique</label>
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